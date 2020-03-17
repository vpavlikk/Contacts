import React from 'react'
import "./Contacts.sass"
import ContactCard from './ContactCard/ContactCard'



let input = React.createRef();

const Contacts = (props) => {

    let changeSearchField = () => {
        let text = input.current.value
        props.changeSearchField(text);
    }
    let arrayOfCards = props.cards.map(currentElement => <ContactCard fullname={currentElement.fullname} number={currentElement.number} />)
    return (
        <>
            <div>
                <input  onChange={changeSearchField} ref={input} className='search' placeholder="Search" value={props.searchInputValue} />
                <button className='ok-btn'>Ok</button>
            </div>
            <div className="list-holder">
                {arrayOfCards}
            </div>
            <div>
                <button className='show-more-btn'>Show more</button>
            </div>

        </>
    )
}
export default Contacts;
