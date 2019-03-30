import React from 'react';
import '../styles/contactPage.css';
import Navigation from '../components/Navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const contactPage = () => {
    return (
        <div className='contact-page--wrapper'> 
        
            <div className="contact-page">
                
                    <div className='contact-form-wrapper'>
                        <div className='company-info'>
                            <h3>Purr-fect Match</h3>
                            <ul>
                                <li>    
                                    <FontAwesomeIcon size='lg' icon='envelope' />
                                    <span className='info'>momcow01@aol.com</span>
                                </li>

                                <li>
                                    <FontAwesomeIcon size='lg' icon='phone-volume' />
                                    <span className='info'>(650) 218-6085</span>
                                </li>

                                <li>
                                    <a href='https://www.facebook.com/Purr-Fect-Match-965598736799638/'              target='_blank' rel='noopener noreferrer' className='social-link'>
                                        <FontAwesomeIcon size='lg' icon={['fab', 'facebook']} />
                                        <span className='info'>Like us on facebook</span>
                                    </a>
                                </li>
                            </ul>
                        </div> {/* close .company-info */}

                        <form className='contact-form' name="contact" data-netlify='true' data-netlify-honeypot='bot-field' method="post" action="/success">
                            <input type="hidden" name="form-name" value="contact" />
                            
                            <p>
                                <label>Name: <input type="text" name="name"/></label>
                            </p>

                            <p>
                                <label>Email: <input type="email" name="email"/></label>
                            </p>

                            <p className='full'>
                                <label>Message: <textarea name="message" rows='5'></textarea></label>
                            </p>

                            <p className='full'>
                                <button type="submit">Submit</button>
                            </p>
                        </form>
                    </div>   {/* close .contact-form-wrapper */}
                
            </div> {/* close .contact-page */}

            <Navigation className="navigation" />
        </div>
       
    );
};

export default contactPage;
