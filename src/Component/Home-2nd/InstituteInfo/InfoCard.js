import React from 'react';
import './InfoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoCard = ({ info }) => {
    return (
        <section className="col-md-4 info-card">
            <div className={`d-flex justify-content-center info-container info-${info.background}`}>
                <div className="me-3">
                <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </section>
    );
};

export default InfoCard;