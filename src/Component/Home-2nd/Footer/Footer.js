import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Instagram } from '@material-ui/icons';


const Footer = () => {
    return (
        <footer className="footer-area text-center clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="//facebook.com"><FacebookIcon className="icon active-icon"  /></a></li>
                        <li className="list-inline-item"><a href="//google.com"><SearchIcon className="icon" /></a></li>
                        <li className="list-inline-item"><a href="//instagram.com"><Instagram className="icon"  /></a></li>
                    </ul>
                    <div className="mt-5 text-white">
                        <h6>Call now</h6>
                        <button className="btn btn-primary">+2025550295</button>
                    </div>
                </div>
                <div className="copyRight text-center text-red">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;