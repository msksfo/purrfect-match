import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import MessageDelivered from './components/MessageDelivered';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
library.add( faEnvelope, faPhoneVolume, faFacebook, faFacebookSquare)

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/services" component={ServicesPage} />
                    <Route path="/contact" component={ContactPage} />
                     <Route path="/success" component={MessageDelivered} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
