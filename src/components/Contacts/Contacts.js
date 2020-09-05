import React from 'react'
import "./Contacts.sass"
import ContactCard from './ContactCard/ContactCard'



let input = React.createRef();

const Contacts = (props) => {
    let changeSearchField = () => {
        let text = input.current.value
        props.changeSearchField(text);
    }
    let getUsers = () => {
        props.getUsers(props.currentPage, 5, props.searchInputValue)
    }
    let arrayOfCards = props.cards.map(currentElement => <ContactCard fullname={currentElement.fullname} number={currentElement.number} />)
    return (
        <>
            <div>
                <input  onChange={changeSearchField} ref={input} className='search' placeholder="Search" value={props.searchInputValue} />
                <button onClick={getUsers} className='ok-btn'>Ok</button>
            </div>
            <div className="list-holder">
                {arrayOfCards}
            </div>
            <div>
                {props.hasNextPage  ? <button className='show-more-btn' onClick={getUsers}>Show more</button> : null}
            </div>

        </>
    )
}
export default Contacts;
