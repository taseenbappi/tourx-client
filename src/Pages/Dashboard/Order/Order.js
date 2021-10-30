import React from 'react';
import './Order.css';

const Order = (props) => {
    const { name, orderName, packageCost, phone } = props.item;
    return (
        <div className="col">
            <div className="card h-100 order-card">
                <div className="card-body text-start">
                    <h4>Name:{name}</h4>
                    <h5 className="card-title">Package Name:{orderName}</h5>
                    <p className="card-text">Package Cost:$ {packageCost}</p>
                    <p>Phone: {phone}</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Order;