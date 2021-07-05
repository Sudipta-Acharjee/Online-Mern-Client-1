import React from 'react';
import HeaderMain from './HeaderMain';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;