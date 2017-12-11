import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = (props) => {


  return (
    <div>
      <nav>
        <div className="nav-wrapper teal lighten-2">
        <NavLink to="/Home" className="brand-logo center">MHI Academy of Javascript</NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to='/campuses'>Campuses</NavLink></li>
            <li><NavLink to="/students">Students</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>

  );
}

export default Header;
