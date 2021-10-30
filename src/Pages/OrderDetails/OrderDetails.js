import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import './OrderDetails.css';
import img from "../../images/tour-package/beaches-in-thailand.jpg"

const OrderDetails = () => {
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();

    const packageDetailsHandler = (id) => {

        const url = `http://localhost:5000/packages/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }



    const onSubmit = data => { console.log(data) };

    return (
        <div className="container-fluid order-container">
            <div className="order-details-txt">
                <h1 className="p-3">Order Details</h1>
            </div>
            <div className="row container">

                <div className="col-12 col-lg-8 col-md-8 col-sm-12">
                    <img src={img} alt="" className="img-fluid" />
                    <h2>Title</h2>
                    <p>Railay, also known as Rai Leh, is a small peninsula between the city of Krabi
                        <br /> and Ao Nang in Thailand. It is accessible only by boat due to high limestone cliffs cutting off mainland access.</p>
                    <h4>Cost</h4>

                </div>
                <div className="col-12 col-lg-4 col-md-4 col-sm-12 p-3 bg-light p-5 shadow-sm rounded">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} className="form-control m-2 p-3" value={user.displayName} />
                        <input type="email" {...register("email")} className="form-control m-2 p-3 " value={user?.email} placeholder="E-mail" />
                        <input type="number" {...register("phone")} className="form-control m-2 p-3 " placeholder="Phone Number" />
                        <textarea type="text" {...register("Massage")} className="form-control p-3 m-2" placeholder="Massage" />

                        <input className="btn btn-primary" type="submit" value="Order Placed" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;