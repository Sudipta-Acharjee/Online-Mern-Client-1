import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const LearnerBook = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar/>
            </div>
            <div className="col-md-9">
                <h1>Hello booking</h1>
            </div>
        </div>
    );
};

export default LearnerBook;