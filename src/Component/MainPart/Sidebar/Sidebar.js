import React from 'react';
import { faCalendar, faGripHorizontal,faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/booking" className="text-white">
                         <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/learner/allBooking" className="text-white">
                         <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/learner/review" className="text-white">
                        <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/order" className="text-white">
                         <span>Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/addService" className="text-white">
                         <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/addAdmin" className="text-white">
                        <span>Make Admin</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;