import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <form style={customStyles} className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" class="form-control" placeholder="Enter Your Email" {...register("email")} required />
                    {errors?.email && <span className="text-danger">This field is required</span>}
                    <button type="submit" className="btn btn-primary mt-3">Add Admin</button>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;