import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/messageDelivered.css'

const MessageDelivered = () => {
    return (
        <div className='wrapper'>
            <div className='wrapper--inner'>
                <p>Thanks for reaching out! I look forward to meeting you and your furrends. I'll be in touch shortly.</p>
            </div>

            <Navigation />

        </div>
    )
}

export default MessageDelivered;