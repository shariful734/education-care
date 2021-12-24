import React from 'react';
import './AddCourse.css'
import { useForm } from 'react-hook-form';

const AddCourse = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);


    }
    return (
        <div className="add-country vh-100">

            <h1 className="text-primary text-center m-3">Please Add A Course</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("courseName", { required: true, maxLength: 20 })} placeholder="course name" />
                <textarea  {...register("description",)} placeholder="description" />
                <input {...register("img",)} placeholder="img URL" />

                <input {...register("price",)} placeholder="price" />

                <button className="addCourse-btn" type="submit" >add Course Now</button>
            </form>

        </div >
    );
};

export default AddCourse;