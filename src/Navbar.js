import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => setHover(true);
  const handleHoverOut = () => setHover(false);

  return (
    <>
      <div className="container-group items">
        {/* Portfolio Title */}
        <ul>
          <li><h1>Portfolio</h1></li>
        </ul>

        {/* Navigation Links */}
        <ul className="content">
          <li><NavLink to="/" style={{ color: 'orange' }}>Home +</NavLink></li>
          <li><NavLink to="/about">About +</NavLink></li>
          <li><NavLink to="/education">Education +</NavLink></li>
          <li><NavLink to="/project">Project +</NavLink></li>
          <li><NavLink to="/contact">Contact-Me</NavLink></li>
        </ul>
        <div className="nav-icon">
          <div
            className="hover-info"
            onMouseOver={handleHover}
            onMouseOut={handleHoverOut}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/8212/8212733.png"
              alt="Navigation Icon"
            />
            {hover && (
              <div className="info-box">
                <ul className="contents">
                  <li><NavLink to="/" style={{ color: 'orange' }}>Home +</NavLink></li>
                  <li><NavLink to="/about">About +</NavLink></li>
                  <li><NavLink to="/education">Education +</NavLink></li>
                  <li><NavLink to="/project">Project +</NavLink></li>
                  <li><NavLink to="/contact">Contact-Me</NavLink></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
