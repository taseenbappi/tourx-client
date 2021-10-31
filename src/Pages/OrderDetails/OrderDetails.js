import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import './OrderDetails.css';
import img from "../../images/tour-package/beaches-in-thailand.jpg"
import { useParams } from 'react-router';
import axios from 'axios';

const OrderDetails = () => {
    const { register, handleSubmit, reset } = useForm();
    const [tourPackageItem, setTourPackageItem] = useState({});
    const { pakcageId } = useParams();
    const { user } = useAuth();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://grim-spell-05737.herokuapp.com/placedOrder', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Your Order successfully Submited");
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        const url = `https://grim-spell-05737.herokuapp.com/packages/${pakcageId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTourPackageItem(data))
    }, [])



    return (
        <div className="container-fluid order-container py-3">
            <div className="order-details-txt">
                <h1 className="p-3  ">Order Details</h1>
            </div>
            <div className="row container m-auto">

                <div className="col-12 col-lg-8 col-md-8 col-sm-12 text-start">
                    <img src={tourPackageItem.img} alt="" className="img-fluid pb-3" />
                    <h2>{tourPackageItem.title}</h2>
                    <p className="text-secondary pe-3">{tourPackageItem.description}</p>
                    <h4>Cost:$ {tourPackageItem.cost}</h4>

                </div>

                <div className="col-12 col-lg-4 col-md-4 col-sm-12 p-3 bg-light shadow rounded border-top border-5 border-success">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="p-3">Book This Package</h3>
                        <input type="text" {...register("orderName")} className="form-control m-2 p-3" required placeholder="Please Enter Your Package name" />
                        <input  {...register("name")} className="form-control m-2 p-3" value={user.displayName} />
                        <input type="email" {...register("email")} className="form-control m-2 p-3 " value={user?.email} placeholder="E-mail" />
                        <input type="number" {...register("packageCost")} className="form-control m-2 p-3 " placeholder="Package Cost" required />
                        <input type="number" {...register("phone")} className="form-control m-2 p-3 " placeholder="Phone Number" />
                        <textarea type="text" {...register("Massage")} className="form-control p-3 m-2" placeholder="Massage" />

                        <input className="btn btn-primary" type="submit" value="Placed Order" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;