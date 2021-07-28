import React from 'react';
import './ServiceDetail.css';
import { Link } from 'react-router-dom';

const ServiceDetail = (props) => {
    const { course, Image, id, fee } = props.service;
    return (
        <div className="col-md-4 text-center seperate ">
            <div className="div-control">
                <img className="image" src={Image}></img>
                <h3>{course}</h3>
                <p className="text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <h3>${fee}</h3>
                <button><Link to={`/booking/${id}`} className="btn btn-primary"> Enroll now</Link></button>
            </div>
        </div>
    );
};

export default ServiceDetail;