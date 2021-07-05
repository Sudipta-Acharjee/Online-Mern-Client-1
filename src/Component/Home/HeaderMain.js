import React from 'react';
import teacher from '../../image/teacher.jpg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Summit <br />Education and Online Courses</h1>
                <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>

            </div>
            <div className="col-md-6">
                <img className="image-con" src={teacher} alt="teacher-pic" />
            </div>
        </main>
    );
};

export default HeaderMain;