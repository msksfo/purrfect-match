import React from 'react';
import '../styles/servicesPage.css';
import Navigation from '../components/Navigation';

import Services from '../components/Services';
import Testimonials from '../components/Testimonials';




const ServicesPage = () => {
    return (
        <div className="services-page">
            <main className='main'>
                <h1 className='page-title'>Services & Testimonials</h1>

                <Services sectionName='Services'/>
               
                <div className='main--section-divider'></div>

                <Testimonials sectionName='Testimonials'/>
            
            </main>
            <Navigation className="navigation" />
        </div>
    );
};

export default ServicesPage;
