import classes from "./Login.module.scss"
import "./Login.module.scss"
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {useLoginMutation} from "../../generated/graphql";
import {setAccessToken} from "../../auth/accessToken";

interface Props {
    refetch: Function
}

const Login: React.FC<Props> = (props: Props) => {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [login] = useLoginMutation();
    let navigate = useNavigate();

    return(
        <div className={classes.container}>
            <div className={classes.top}></div>
            <div className={classes.bottom}></div>
            <div className={classes.center}>
                <h2>Please Sign In</h2>
                <form onSubmit={async e => {
                    e.preventDefault();
                    const response = await login({
                        variables: {
                            loginEmail,
                            loginPassword
                        }
                    });

                    if (response && response.data && response.data.logInUser && response.data.logInUser.token) {
                        setAccessToken(response.data.logInUser.token);
                        localStorage.setItem('token', `Bearer ${response.data.logInUser.token}`)
                    }

                    await props.refetch();
                    navigate("/dashboard");
                    console.log(response)
                }}>
                    <input type="email" placeholder="email" value={loginEmail} onChange={e => {
                        setLoginEmail(e.target.value)
                    }}></input>
                    <input type="password" placeholder="password" value={loginPassword} onChange={e => {
                        setLoginPassword(e.target.value)
                    }}></input>
                    <button type="submit">Login</button>
                </form>
                <h2></h2>
            </div>


            

        </div>
    );

}

export default Login;