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
const LearnerReview = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <form style={customStyles} className="p-5"  onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <input type="file" class="form-control" placeholder="Your Image" {...register("img")} required />
                        {errors?.img && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="name" placeholder="Enter Your Name" {...register("name")} required />
                        {errors?.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" placeholder="Review"  {...register("review")} required />
                        {errors?.review && <span className="text-danger">This field is required</span>}
                    </div>
                    <button type="submit" className="btn btn-primary ms-5" >Payment</button>
                </form>
                
            </div>
        </div>
    );
};

export default LearnerReview;