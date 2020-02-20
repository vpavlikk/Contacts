import React from 'react'
import "./ContactCard.sass"
import ava from './ava.png'

const ContactCard = () => {
    return (
        <div>
            <div className="contact-card">
                <div className="ava-wrapper">
                    <img src={ava} alt='' />
                </div>
                <div>
                    <div className="fullname-label"><span>Fullname</span></div>
                    <div className="number-label"><span>000-000-00-00</span></div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;