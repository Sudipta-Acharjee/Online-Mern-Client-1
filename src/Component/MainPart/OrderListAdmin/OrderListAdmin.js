import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const OrderListAdmin = () => {
    return (
        <div className="row">
        <div className="col-md-3">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-9">
            <h1>Hello order list</h1>
        </div>
    </div>
    );
};

export default OrderListAdmin;