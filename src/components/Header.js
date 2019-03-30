import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className='header-wrappper'>
            <h1 className="header">
                <span className="header--span">Purrrr</span>-Fect Match
            </h1>
            <p className='header--tagline'>Providing loving attention and reliable service for your furrends</p>
        </div>
        
    );
};

export default Header;
