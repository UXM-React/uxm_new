import React from 'react';
import { Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

function LeftNav() {
  return (
    <div>
      <div className="sidenav">
        <Link to="/mobile">Mobile Number</Link>
        <Link to="/email">Email id</Link>
    </div>

    {/* <Nav defaultActiveKey="/mobile" className="flex-column">
      
      <Link to="/mobile">Mobile Number</Link>
      <Link to="email">Email</Link>
    </Nav> */}

    </div>
  );
}

export default LeftNav;
