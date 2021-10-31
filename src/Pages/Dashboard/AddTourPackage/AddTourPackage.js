import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddTourPackage.css';

const AddTourPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://grim-spell-05737.herokuapp.com/addPackage', data)
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
        <div className="container-fluid ">
            <div className="row">
                <div className="col-12 col-lg-5 col-md-5 col-sm-12 justify-content-center align-items-center d-flex">
                    <h2>Add Your Tour Package<i class="fas fa-arrow-right text-success p-3 arrow-icon"></i></h2>

                </div>
                <div className="col-12 col-lg-7 col-md-7 col-sm-12 py-3" >

                    <div className=" m-5  justify-content-center align-items-center p-3 bg-light shadow rounded border-top border-5 border-success ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("title")} className="form-control p-3 m-2" placeholder="Package title" required />
                            <textarea type="text" {...register("description")} className="form-control p-3 m-2" placeholder="Package description" required />
                            <input type="text" {...register("cost")} className="form-control p-3 m-2" placeholder="Package cost" required />
                            <input type="number" {...register("rating")} className="form-control p-3 m-2" placeholder="rating" required />
                            <input type="text" {...register("img")} className="form-control p-3 m-2" placeholder="image url" required />

                            <input type="submit" value="Add Package" className="btn btn-warning " />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddTourPackage;