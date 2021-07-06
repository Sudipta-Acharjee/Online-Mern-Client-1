import React from 'react';
import HeaderMain from './HeaderMain';
import Navbar from './Navbar';
import Service from '../Home-2nd/Service';
import InstituteInfo from '../Home-2nd/InstituteInfo/InstituteInfo'

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Service></Service>
            <InstituteInfo></InstituteInfo>
        </div>
    );
};

export default Header;