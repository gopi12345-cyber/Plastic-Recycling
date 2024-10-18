import React from 'react';
import '../css/Header.css';
function Header() {
  return (
    <div className="header">
        <div className="header_left">
            <img className='logo' src='https://thumbs.dreamstime.com/b/plastic-recycling-logo-template-waste-icon-separate-258275432.jpg'/>
            <h1> Plastic Recycling</h1>
        </div>
        <div className='header_center'>
            <ul className='list_ul'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>
            <div className="dropdown">
            <button className="dropdown-button">Menu</button>
            <div className="dropdown-content">
            <a href="#">Leaderboard</a>
            <a href="#">Volunteer</a>
            <a href="#">Reports</a>
            <a href="#">ideas</a>
            </div>
          </div>
        </div>
        <div className='header_right'></div>
    </div>
  )
}

export default Header