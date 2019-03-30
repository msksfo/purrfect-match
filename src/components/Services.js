import React from 'react';
import ServicesCard from '../components/ServicesCard';
import '../styles/services.css';

const petServices = [
    'Fresh food and water', 'Litterbox cleanup', 'Doggie waste disposal', 'Administer medication (no injections)', 'Walks', 'Quality play time'
]

const homeServices = [
    'Bring in mail/packages', 'Water plants', 'Alternate your lights and/or blinds, if you wish'
]


const Services = (props) => {
    return (
        <section className='main--services'>
            <h2 className='services-title'>{props.sectionName}</h2> 

            <ServicesCard cardTitle='pet' services={petServices} />
            <ServicesCard cardTitle='home' services={homeServices} />
        </section>
    )
}

export default Services;