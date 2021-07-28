import React from 'react';
import LearnerBook from '../LearnerBook/LearnerBook';
import Sidebar from '../Sidebar/Sidebar';
const HomeMain = () => {
    return (
        <section className="d-flex">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <LearnerBook/>
            </div>
        </section>
    );
};

export default HomeMain;