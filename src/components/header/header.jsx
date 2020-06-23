import React from 'react';
// import './App.css';
import logo from '../../asset/techM1.png';
import react from '../../asset/react.png';

const logoStyle = {
    width: "10%"
  };

const reactLogo = {
  width: '5%'
}

function Header() {
  return (
    <div className="App container-fulid sb-nav-fixed">
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <img src={logo} alt="logo" style={logoStyle}/>
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
          <div className="input-group search-box">
          </div>
        </form> 
        <i className="fa fa-user fa-fw"></i>   
        <img src={react} alt="logo" style={reactLogo}/>
      </nav>      
      </div>
  );
}

export default Header;
