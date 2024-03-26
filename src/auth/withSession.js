import React, {Component} from 'react';
import {useMeQuery} from "../generated/graphql";

const withSession = Component => props => {

    const  { loading, data, refetch } = useMeQuery({fetchPolicy: "network-only"});
    if(loading) return null;
    console.log(data);
    return (<Component {...props} refetch={refetch} session={data}/>)

};

export default withSession;