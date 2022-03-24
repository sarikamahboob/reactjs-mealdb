import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header">
                <h1>S Food Court</h1>
                <div className='links' >
                    <a href="/meals">Meals</a>
                    <a href="/aboutus">About Us</a>
                    <a href="/contactus">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Header;