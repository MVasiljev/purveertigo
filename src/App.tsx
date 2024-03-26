import React from 'react';
import "animate.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ApolloClient, ApolloProvider, InMemoryCache, split} from "@apollo/client";
import {WebSocketLink} from "@apollo/link-ws";
import {createUploadLink} from "apollo-upload-client";
import {getMainDefinition} from "@apollo/client/utilities";
import {setContext} from "@apollo/link-context";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {TRoot} from "./types/IUserTypes";
import withSession from "./auth/withSession";

/**
 * ROUTES IMPORTS
 */
import {HomePage} from "./Pages/HomePage/HomePage";
import Login from './Pages/Auth/Login';
import Dashboard from "./Pages/Dashboard/Dashboard";

const cache = new InMemoryCache({});

const wsLink = new WebSocketLink({
    uri: 'ws://localhost:1111/graphql',
    options: {
        reconnect: true,
        connectionParams: () => ({
            Authorization: localStorage.getItem('token')
        }),
    }
});

const httpLink = createUploadLink({uri: 'http://localhost:1111/graphql', credentials: 'same-origin'});

const link = split(
    ({ query }) => {
        // @ts-ignore
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink,
);

const authLink = setContext(async (_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(link),
    cache: cache,
    credentials: 'include'
});

class App extends React.Component {

    render() {

        let Root: ({refetch, session}: TRoot) => void;

        Root = ({refetch, session}) => (
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<Login refetch={refetch}/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>
            </Router>
            );

        const RootWithSession = withSession(Root);

        return (
            <ApolloProvider client={client}>
                <RootWithSession />
            </ApolloProvider>
        );
    }
}

export default App;
