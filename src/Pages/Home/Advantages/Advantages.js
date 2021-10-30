import React from 'react';
import './Advantages.css';

const Advantages = () => {
    return (
        <div className='container-fluid advantage-container'>
            <div className='container py-5'>
                <div>
                    <h1>Our Advantages</h1>
                    <p className="fs-5">You can rely on our experience and the quality of services we
                        <br /> provide. Here are other reasons to book tours at Skyline.</p>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 py-5 container">
                    <div className="col">
                        <div className="card advantage-card h-100">
                            <i className="fas fa-wallet advantage-icon"></i>
                            <div className="card-body">
                                <h5 className="card-title advantage-title">Lowest Prices</h5>
                                <p className="card-text advantage-text">Skyline offers its clients an affordable pricing policy.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card advantage-card h-100">
                            <i className="fas fa-clipboard-list advantage-icon"></i>
                            <div className="card-body">
                                <h5 className="card-title advantage-title">Variety of Tours</h5>
                                <p className="card-text advantage-text">We offer a vast variety of tours for those who love European travel.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card advantage-card h-100">
                            <i className="far fa-thumbs-up advantage-icon"></i>
                            <div className="card-body">
                                <h5 className="card-title advantage-title">Easy Booking</h5>
                                <p className="card-text advantage-text">Easily book a tour, an air ticket or a hotel room using our website.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card advantage-card h-100">
                            <i className="far fa-gem advantage-icon"></i>
                            <div className="card-body">
                                <h5 className="card-title advantage-title">Most Popular Agency</h5>
                                <p className="card-text advantage-text">We’ve been rated #1 European tour agency numerous times.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Advantages;