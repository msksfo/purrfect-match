import React from 'react';
import '../styles/contactForm.css';

const ContactForm = () => (
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
)

export default ContactForm;