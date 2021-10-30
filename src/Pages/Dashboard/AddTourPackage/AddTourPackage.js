import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddTourPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/customerComment', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Your Comment Send Successfully");
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="container-fluid">
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name")} className="form-control p-3 m-2" placeholder="Name" />
                    <input type="email" {...register("email")} className="form-control p-3 m-2" placeholder="E-mail" />
                    <textarea type="text" {...register("massage")} className="form-control p-3 m-2" placeholder="Massage" />
                    <input type="submit" value="Send" className="btn btn-primary " />
                </form>
            </div>
        </div>
    );
};

export default AddTourPackage;