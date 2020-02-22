import React from 'react'
import "./ContactCard.sass"
import ava from './ava.png'

const ContactCard = (props) => {
    return (
        <div>
            <div className="contact-card">
                <div className="ava-wrapper">
                    <img src={ava} alt='' />
                </div>
                <div>
                    <div className="fullname-label"><span>{props.fullname}</span></div>
                    <div className="number-label"><span>{props.number}</span></div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;