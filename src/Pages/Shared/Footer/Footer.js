import React from 'react';
import logo from '../../../images/logo/tour-x.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer container-fluid row align-items-center justify-content-center g-0">
            {/* footer segment */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3 ">
                <img src={logo} alt="" className="p-3 bg-secondary rounded-pill" />

            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3">
                <i className="fab fa-facebook  p-2  fs-4 text-secondary"></i>
                <i className="fab fa-linkedin  p-2 fs-4 text-secondary"></i>
                <i className="fab fa-instagram  p-2 fs-4 text-secondary"></i>
                <i className="fab fa-twitter  p-2 fs-4 text-info"></i>
                <p className="text-secondary">© 2021 All Rights Reserved | Developer: Taseenul Hoque Bappi</p>
            </div>
        </div>
    );
};

export default Footer;