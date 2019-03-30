import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation = () => {
    return (
        <nav className="navbar">
            <ul className="navbar--ul">
                <li className="navbar--li">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar--li">
                    <Link to="/about">About</Link>
                </li>
                <li className="navbar--li">
                    <Link to="/services">Services</Link>
                </li>
                <li className="navbar--li">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
