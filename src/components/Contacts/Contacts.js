import React from 'react'
import "./Contacts.sass"
import ContactCard from './ContactCard/ContactCard'



let input = React.createRef();

const Contacts = (props) => {

    let changeSearchField = () => {
        let text = input.current.value
        props.changeSearchField(text);
    }
    let searchButton = () => {
      props.getContacts(props.nextPage, 5, props.searchInputValue)
    }

    let getNextContacts = () => {
        props.getContacts(props.nextPage, 5, props.searchInputValue)
    }

    let getPrevContacts = () => {
        props.getContacts(props.prevPage, 5, props.searchInputValue)
    }

    let arrayOfCards = props.cards.map(currentElement =>
      <ContactCard
        fullname={currentElement.fullname}
        number={currentElement.number}
        add_number={currentElement.additional_number}
        company={currentElement.company}
        email={currentElement.email}
        type={currentElement.type}
        id={currentElement._id}
        nextPage={props.nextPage}
        deleteContact={props.deleteContact}
        updateContact={props.updateContact}
      />
    )
    // hasPrevPage: state.contacts_state.hasPrevPage,
    // totalPages: state.contacts_state.totalPages
    let pages = []
    for (let i=1;i<=props.totalPages;i++){
      pages.push(<button>{i}</button>)
    }
    return (
        <>
            <div>
                <input  onChange={changeSearchField} ref={input} className='search' placeholder="Search" value={props.searchInputValue} />
                <button onClick={searchButton} className='ok-btn'>Ok</button>
            </div>
            <div className="list-holder">
                {arrayOfCards}
            </div>
            <div>
                {props.hasNextPage  ? <button className='show-more-btn' onClick={getNextContacts}>Show more</button> : null}
                <button onClick={getPrevContacts}>prev</button>
                <div>{pages}</div>
                <button onClick={getNextContacts}>next</button>
            </div>
        </>
    )
}
export default Contacts;
