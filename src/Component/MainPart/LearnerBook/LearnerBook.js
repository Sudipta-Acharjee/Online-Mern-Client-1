import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Fakedata from '../../Fakedata';
import ProcessPayment from '../../MainPart/ProcessPayment/ProcessPayment';

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
const LearnerBook = () => {
    const { register, handleSubmit, errors } = useForm();
    const { id } = useParams();
    const first = Fakedata.slice(0, 20);
    const [course, setCourse] = useState(first);

    if (course[0].id === id) {
        return course[id].Image
    }

    const onSubmit = data => console.log(data);

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <form style={customStyles} className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="name" placeholder="Enter Your Name" {...register("name")} required />
                        {errors?.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="email" placeholder="Enter your Email"{...register("email")} required />
                        {errors?.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <p ><strong>Course Name:</strong></p>
                        <input type="text" className="form-control" value={course[id].course}  {...register("course")} required />
                        {errors?.course && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <p><strong>Fee:</strong></p>
                        <input type="text" className="form-control" value={course[id].fee} {...register("fee")} required />
                        {errors?.course && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <h2>Please Pay for me</h2>
                        <ProcessPayment onSubmit={handleSubmit(onSubmit)}></ProcessPayment>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LearnerBook;