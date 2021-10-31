import React from 'react';
import './Banner.css';
const Banner = () => {
    return (

        <div className="banner container-fluid">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-6 col-md-6 col-sm-12"></div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start p-3">
                    <p className="text-warning fw-bolder fs-4">tourX.com</p>
                    <h1 className='banner-title'>IT'S TIME TO TRAVELING!</h1>
                    <p className="text-warning fs-4 fw-bolder">Pack your bag be ready!!</p>
                    <button className="btn btn-light">Book your Package Now</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;