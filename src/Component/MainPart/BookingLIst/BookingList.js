import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <h1>Hello booking list</h1>
            </div>
        </div>
    );
};

export default BookingList;