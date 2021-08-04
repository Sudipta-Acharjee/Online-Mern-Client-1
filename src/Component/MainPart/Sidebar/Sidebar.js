import React from 'react';
import { Link } from 'react-router-dom';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import RateReviewIcon from '@material-ui/icons/RateReview';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/booking" className="text-white">
                         <span><BookmarksIcon/>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/learner/allBooking" className="text-white">
                         <span><PlaylistAddCheckIcon/>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/learner/review" className="text-white">
                        <span><RateReviewIcon/>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/order" className="text-white">
                         <span><BorderColorIcon/>Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/addService" className="text-white">
                         <span><AddToQueueIcon/>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/addAdmin" className="text-white">
                        <span><SupervisorAccountIcon/>Make Admin</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;