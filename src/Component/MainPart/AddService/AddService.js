import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import Fakedata from '../../Fakedata';
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

const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    const handleAddService=()=>{
        fetch('http://localhost:5000/addService',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(Fakedata)

        })
    }
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <button onClick={handleAddService}>Add Service</button>
                <form style={customStyles} className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <input type="file" class="form-control" placeholder="Your Image" {...register("img")} required />
                        {errors?.img && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="name" placeholder="Enter Your Name" {...register("name")} required />
                        {errors?.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" placeholder="Review"  {...register("description")} required />
                        {errors?.description && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" placeholder="Fee"  {...register("fee")} required />
                        {errors?.fee && <span className="text-danger">This field is required</span>}
                    </div>
                    <button type="submit" className="btn btn-primary" >Add Service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;