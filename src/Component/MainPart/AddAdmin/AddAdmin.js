import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <h1>Hello make admin</h1>
            </div>
        </div>
    );
};

export default AddAdmin;