import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="headers">
        <div className="app_header">
          <h2>LOGO</h2>
          </div>
            <div className="app_headerRight">
                <label>Home</label> 
                <label>My Portfolio</label>
                <label>Clients</label>
                <label>Get In Touch</label>
            </div>
        
        </div>
    )
}

export default Header
