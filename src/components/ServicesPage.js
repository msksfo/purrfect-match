import React from 'react';
import '../styles/servicesPage.css';
import Navigation from '../components/Navigation';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const petServices = [
    'Fresh food and water', 'Litterbox cleanup', 'Doggie waste disposal', 'Administer medication (no injections)', 'Walks', 'Quality play time'
]

const homeServices = [
    'Bring in mail/packages', 'Water plants', 'Alternate your lights and/or blinds, if you wish'
]


const ServicesPage = () => {
    return (
        <div className="services-page">
            <main className='main'>
                <h1 className='page-title'>Services & Testimonials</h1>

                <Services sectionName='Services'
                          petServices={petServices}  
                          homeServices={homeServices}
                />
               
                <div className='main--section-divider'></div>

                <Testimonials sectionName='Testimonials'/>
            
            </main>
            <Navigation className="navigation" />
        </div>
    );
};

export default ServicesPage;
