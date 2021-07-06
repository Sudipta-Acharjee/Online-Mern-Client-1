import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-primary text">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse  navbar-collapse text-primary" id="navbarSupportedContent">
                    <h3 className="colorChanged">Bright Education Media</h3>
                    <ul className=" navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <a class="nav-link ms-5 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link ms-5 " href="/booking">Learner</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link ms-5" href="/admin/addAdmin">Admin</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/login"><button class="nav-link ms-5" >Log In</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;