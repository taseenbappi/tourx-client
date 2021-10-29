import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { googleSignInHangler } = useAuth();
    return (
        <div className="container-fluid login-container">

            <div className="row">
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-3">

                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-3 ">
                    <div className="bg-light p-3 rounded">
                        <h4>Welcome TourX</h4>
                        <h1>Login</h1>
                        <button className="btn btn-primary" onClick={googleSignInHangler}><i className="fab fa-google p-3 "></i>Google-Login</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Login;