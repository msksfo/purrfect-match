import React from 'react';
import '../styles/companyInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CompanyInfo = (props) => (
    <div className='company-info'>
        <h3>{props.companyName}</h3>
        <ul>
            <li>    
                <FontAwesomeIcon size='lg' icon='envelope' />
                <span className='info'>{props.companyEmail}</span>
            </li>

            <li>
                <FontAwesomeIcon size='lg' icon='phone-volume' />
                <span className='info'>{props.companyPhone}</span>
            </li>

            <li>
                <a href='https://www.facebook.com/Purr-Fect-Match-965598736799638/'              target='_blank' rel='noopener noreferrer' className='social-link'>
                    <FontAwesomeIcon size='lg' icon={['fab', 'facebook']} />
                    <span className='info'>Like us on facebook</span>
                </a>
            </li>
        </ul>
    </div> 
)

export default CompanyInfo;