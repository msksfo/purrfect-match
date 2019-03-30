import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/servicesCard.css'

const ServicesCard = (props) => {
    return (
        <div className='main--services-card'>
            <h2 className='main--services-title'>Services for your {props.cardTitle}</h2>
            <ul>    
                {props.services.map(value => {
                    return <li key={value}>{value}</li>
                })}

               <li className='other-services'>
                    <Link to="/contact">Get in touch for services not listed</Link>
                </li>
            </ul>
        </div>

    )
}

export default ServicesCard;