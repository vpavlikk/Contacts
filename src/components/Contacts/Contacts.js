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
/*
value={props.searchInputValue} searchInputValue берем с пропсов переданных сюда с контейнера с помощью конект хока
в контейнет с помощью контекста в который мы передали стор
в сторе с помощью КомбайнРедюсерс ми пиривязали к ключу contacts_state редюсер контактс в котором ссылка на стейт и эешинКриейтор
тоесть это значения береться со стейта контактс
props.cards так же как и props.searchInputValue
*/
