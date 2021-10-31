import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './Login.css';
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
    const { googleSignInHangler, setUser } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const myHistory = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || "/home";

    const handleGoogleLogin = () => {
        googleSignInHangler()
            .then((result) => {
                const user = result.user;
                setUser(user);
                myHistory.push(redirect_uri);
                console.log(user);


            }).catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div className="container-fluid login-container d-flex justify-content-center align-items-center">
            <div className="bg-light p-5 rounded ">
                <h4>Welcome TourX</h4>
                <h1>Login</h1>
                <input className="form-control  m-auto p-2 mb-3 d-inline" type="text" name="" id="" placeholder="Email" />
                <input className="form-control  m-auto p-2 mb-3 d-inline" type="password" name="" id="" placeholder="Password" />
                <input className="btn btn-primary m-auto mb-3 d-inline" type="Submit" value="Submit" />
                <br />
                <p>Other's Login</p>
                <button className="btn btn-primary" onClick={handleGoogleLogin}><i className="fab fa-google p-3 "></i>Google-Login</button>
            </div>
        </div>



    );
};

export default Login;