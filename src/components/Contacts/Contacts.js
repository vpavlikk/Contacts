import React from 'react'
import "./Contacts.sass"
import ContactCard from './ContactCard/ContactCard'

const Contacts = () => {
    return (
        <>
            <div>
                <input className='search' placeholder="Search" />
                <button className='ok-btn'>Ok</button>
            </div>
            <div className="list-holder">
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
            </div>
            <div>
                <button className='show-more-btn'>Show more</button>
            </div>

        </>
    )
}

export default Contacts;