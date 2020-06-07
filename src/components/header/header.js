import React from "react";
import logo from "./logo.png";
import {Link} from 'react-router-dom';
//ete logo e nq qcum petqa import anenq
import "./header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to='/'>

       <img src={logo} alt="logo" className="Header-logo" />

      </Link>
    </div>
  );
};

export default Header;
