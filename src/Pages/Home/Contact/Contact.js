import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container-fluid" id="contact">
            <div className="row">
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-3">
                    <h2>Get in Touch</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("name")} className="form-control p-3 m-2" placeholder="Name" />
                        <input type="email" {...register("email")} className="form-control p-3 m-2" placeholder="E-mail" />
                        <textarea type="number" {...register("phone")} className="form-control p-3 m-2" placeholder="Massage" />
                        <input type="submit" value="Send" className="btn btn-primary " />
                    </form>
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-3">
                    <h2>Contact Information</h2>

                    <h3 className="p-2"><span><i className="fas fa-phone-square-alt p-3"></i></span>1-800-1234-567</h3>
                    <h3 > <span ><i className="fas fa-envelope-open-text p-3"></i></span>info@tourx.org</h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;