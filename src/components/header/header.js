import React from 'react'
import logo from './logo.png';
//ete logo enq qcum petqa import anenq
import './header.css' 

const Header = () => {

    return(
        <div className = "Header">
            <img src = {logo} alt = "logo" className = "Header-logo"/>
        </div>
    );
};

export default Header;