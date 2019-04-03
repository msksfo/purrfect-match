import React from 'react';
import ServicesCard from '../components/ServicesCard';
import '../styles/services.css';


const Services = (props) => {
    return (
        <section className='main--services'>
            <h2 className='services-title'>{props.sectionName}</h2> 

            <ServicesCard cardTitle='pet' services={props.petServices} />
            <ServicesCard cardTitle='home' services={props.homeServices} />
        </section>
    )
}

export default Services;