import React from 'react';
import { useForm } from 'react-hook-form';
import ProcessPayment from '../../MainPart/ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';
const Payment = () => {
    const { errors } = useForm();
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div style={{ border: "2px solid lightsalmon",padding:"20px",marginTop: "80px"}} className="form-group ms-20" required>
                    <h6 style={{ textAlign: "center" }}>Payment via Any-(Master/Visa/Debit/Credit) Card</h6>
                    {errors?.course && <span className="text-danger">This field is required</span>}
                    <ProcessPayment />
                </div>
            </div>
        </div>
    );
};

export default Payment;