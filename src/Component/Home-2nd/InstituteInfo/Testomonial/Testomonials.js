import React from 'react';
import './Testomonials.css';

const Testomonials = (props) => {
    const { name, Image, review } = props.info;
    return (
        <div className="col-md-4 text-center seperate ">
        <div className="div-control">
            <img className="image" src={Image}></img>
            <br/>
            <h3>{name}</h3>
            <p>{review}</p>
        </div>
    </div>
    );
};

export default Testomonials;