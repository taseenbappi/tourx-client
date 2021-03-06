import React from 'react';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const { title, description, img, cost, _id } = props.packageItem;
    const uri = `/orderDetails/${_id}`



    return (
        <div>
            <div className="col ">
                <div className="card h-100 " >
                    <img src={img} className="card-img-top img-fluid p-3" alt="..." />
                    <div className="card-body text-start">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text ">{description}</p>
                        <h4>Cost:${cost}</h4>
                    </div>
                    <div className="card-footer p-2">
                        <Link to={uri} className='btn btn-primary w-100'>Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;