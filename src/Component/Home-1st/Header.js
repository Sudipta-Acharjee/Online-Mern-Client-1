import React from 'react';
import HeaderMain from './HeaderMain';
import Navbar from './Navbar';
import Service from '../Home-2nd/Service';
import InstituteInfo from '../Home-2nd/InstituteInfo/InstituteInfo'
import Testomonial from '../Home-2nd/InstituteInfo/Testomonial/Testomonial';
import Contact from '../Home-2nd/InstituteInfo/Testomonial/Contact/Contact';
import Footer from '../Home-2nd/Footer/Footer'

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Service></Service>
            <InstituteInfo></InstituteInfo>
            <Testomonial></Testomonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Header;