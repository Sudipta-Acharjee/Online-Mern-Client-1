import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <h1>Hello add service</h1>
            </div>
        </div>
    );
};

export default AddService;