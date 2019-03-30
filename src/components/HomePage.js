import React from 'react';
import logo from '../images/chilling.svg';
import Header from './Header';
import Navigation from './Navigation';
import '../styles/homePage.css';


const HomePage = () => {
    return (
        <div className="App">

            <div className='App--inner-wrapper'>
                <Header className="App-header" />    
                <img src={logo} className="logo" alt="logo" />    
            </div>
            
            <Navigation className="navigation" />
        </div>
    );
};

export default HomePage;
