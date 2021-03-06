import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
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
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
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
                </form>
                <Link to="/account"><button type="submit" disabled={ProcessPayment} className="btn btn-primary ms-5">Payment</button></Link>
            </div>
        </div>
    );
};

export default LearnerBook;