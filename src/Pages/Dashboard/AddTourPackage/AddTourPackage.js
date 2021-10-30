import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddTourPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/addPackage', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Package Added Successfully");
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="container-fluid">
            <div className="container py-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("title")} className="form-control p-3 m-2" placeholder="Package title" required />
                    <textarea type="text" {...register("description")} className="form-control p-3 m-2" placeholder="Package description" required />
                    <input type="text" {...register("cost")} className="form-control p-3 m-2" placeholder="Package cost" required />
                    <input type="number" {...register("rating")} className="form-control p-3 m-2" placeholder="rating" required />
                    <input type="text" {...register("img")} className="form-control p-3 m-2" placeholder="image url" required />

                    <input type="submit" value="Add Package" className="btn btn-primary " />
                </form>
            </div>
        </div>
    );
};

export default AddTourPackage;