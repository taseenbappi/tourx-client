import './About.css';
import React from 'react';
import aboutImg from '../../images/about.jpg';

const About = () => {

    return (
        <div className="about">
            <h2 className="p-3" ><span className="text-info">ABOUT</span> US<hr className="w-25 m-auto" /></h2>
            <div className="row">

                <div className='p-3 col-12 col-sm-12 col-lg-6 col-md-6'>
                    {/* about  */}

                    <p className="p-3 text-start bg-light fs-3">"TourX" is a tourism comapany in Bangladesh.The Best Travel Agency Company.</p>
                </div>
                <div className='p-3 col-12 col-sm-12 col-lg-6 col-md-6'>
                    <img className="img-fluid" src={aboutImg} alt="" />
                </div>
            </div>

        </div >
    );
};

export default About;