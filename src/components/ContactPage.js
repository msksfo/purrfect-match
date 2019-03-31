import React from 'react';
import '../styles/contactPage.css';
import CompanyInfo from '../components/CompanyInfo';
import ContactForm from '../components/ContactForm';
import Navigation from '../components/Navigation';

const contactPage = () => {
    return (
        <div className='contact-page--wrapper'> 
        
            <div className="contact-page">
                
                <div className='contact-form-wrapper'>
                    
                    <CompanyInfo 
                        companyName='Purr-fect Match'
                        companyEmail='momcow01@aol.com'
                        companyPhone='(650) 218-6085'
                    />

                    <ContactForm />
                    
                </div>   {/* close .contact-form-wrapper */}
                
            </div> {/* close .contact-page */}

            <Navigation className="navigation" />

        </div>
       
    );
};

export default contactPage;
