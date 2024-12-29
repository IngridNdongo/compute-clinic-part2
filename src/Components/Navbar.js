import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menuitems } from './Menuitems';
import './Navbar.css';

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <nav className='NavbarItems'>
        <Link to="/Home" className='Navbar-logo'>Compute Clinic</Link>
        <div className='menu-icons' onClick={handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {Menuitems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
