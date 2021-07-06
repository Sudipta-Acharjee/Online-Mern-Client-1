import React, { useState } from 'react';
import ServiceDetail from './ServiceDetail';
import Fakedata from '../Fakedata';

const Service = () => {
    const first5 = Fakedata.slice(0, 10);
    const [services, setServices] = useState(first5);
    return (
        <section className="services-container control-div">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        services.map(service => <ServiceDetail service={service} key={service._id}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;