import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://salty-inlet-11821.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added Product successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add-service bg-gray-500 w-6/12 mx-auto mb-10 pb-3 rounded-lg">
            <h2 className="my-5 pt-3 text-2xl font-bold text-gray-700">Please Add a Product</h2>
            <form className="add-product" onSubmit={handleSubmit(onSubmit)}>
                <input className="h-10 rounded-lg" type="text" {...register("title")} placeholder="Title" />
                <textarea className="rounded-lg" {...register("description")} placeholder="Description" />
                <input className="h-10 rounded-lg" type="number" {...register("price")} placeholder="Price" />
                <input className="h-10 rounded-lg" {...register("img")} placeholder="image url" />
                <input className="h-8 rounded-lg bg-indigo-700" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;