import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const LearnerReview = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <h1>Hello learner Review</h1>
            </div>
        </div>
    );
};

export default LearnerReview;