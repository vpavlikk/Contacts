import React,{useState,useEffect} from 'react';
import "./Contacts.sass"
import ContactCard from './ContactCard/ContactCard'

let input = React.createRef();

const Contacts = (props) => {

let [searchValue, setSearchValue] = useState("")

    useEffect(()=>{
      console.log("render Contacts")
    })

    let changeSearchField = () => {
        let text = input.current.value
        setSearchValue(text);
    }

    let searchButton = () => {
      props.findContacts(searchValue)
    }

    let getNextContacts = () => {
        props.getContacts(props.nextPage, 5)
    }

    let getPrevContacts = () => {
        props.getContacts(props.prevPage, 5)
    }

    let returningOnPaggination = () => {
      props.getContacts(props.currPage, 5)
    }

    let getPage=(event)=>{
      props.getContacts(event.target.value, 5)
    }

    let arrayOfCards = props.cards.map(currentElement =>
      <ContactCard
        key={currentElement.id}
        fullname={currentElement.fullname}
        number={currentElement.number}
        add_number={currentElement.additional_number}
        company={currentElement.company}
        email={currentElement.email}
        type={currentElement.type}
        id={currentElement.id}
        currPage={props.currPage}
        deleteContact={props.deleteContact}
        ava_src={currentElement.ava_src}
      />
    )
    let first;
    let last;
    let pages = []

    for (let i=1;i<=props.totalPages;i++) {
      // first
      if (i === 1 && props.cards.length !== 0) {
        first = <button key={1} className={`pag-btn ${i === props.currPage ? 'selected-pag-btn' : null}`} value={i} onClick={getPage}>first</button>
      }
      //second previos
      if (i === props.currPage - 2 && props.currPage > 3) {// появляться кнопке если текущая страница больше трех(3-2=1,а кнопка 1 уже создана в условии first)
        pages.push(<button key={2} className={`pag-btn ${i === props.currPage ? 'selected-pag-btn' : null}`} value={i} onClick={getPage}>{i}</button>)
      }
      // first previos
      if (i === props.currPage - 1 && props.currPage > 2) {//появляеться кнопка если текущая страница больще двух(2-1=1),а кнопка 1 уже создана в условии first)
        pages.push(<button key={3} className={`pag-btn ${i === props.currPage ? 'selected-pag-btn' : null}`} value={i} onClick={getPage}>{i}</button>)
      }
      //current
      if (i === props.currPage){
        if (props.currPage > 1 && props.currPage < props.totalPages) { //при  props.totalPages === props.currPage это условие создаст копию first и last
          pages.push(<button key={4} className={`pag-btn ${i === props.currPage ? 'selected-pag-btn' : null}`} value={i} onClick={getPage}>{i}</button>)
        }
      }
      //next first
      if (i === props.currPage + 1 && props.currPage < props.totalPages-1) {
        //находим кнопку 1 следующую от текущей,если эта кнопка(props.currPage) не предпоследняя(props.totalPages-1),а меньше,то условие создаст кнопку с таким i,
       //которое не равно i последней кнопки(props.currPage + 1 != props.totalPages,которою уже создало условие last)
          pages.push(<button key={5} className={`pag-btn ${i === props.currPage ? 'selected-pag-btn' : null}`} value={i} onClick={getPage}>{i}</button>)
      }
      // next second
      if (i === props.currPage + 2 && props.currPage < props.totalPages-2) {
        //находим кнопку 2 следующую от текущей,если эта кнопка(props.currPage) не пред-предпоследняя(props.totalPages-2),а меньше,то условие создаст кнопку с таким i,
        // которое не равно i последней кнопки (props.currPage + 1 != props.totalPages,которою уже создало условие last)
          pages.push(<button key={6} className={`pag-btn ${i === props.currPage ? 'selected-pag-btn' : null}`} value={i} onClick={getPage}>{i}</button>)
      }
      //last
      if (i === props.totalPages && props.cards.length !== 0 && props.totalPages > 1) {
        last = <button key={7} className={`pag-btn ${i === props.currPage ? 'selected-pag-btn' : null}`} value={i} onClick={getPage}>last</button>
      }
    }

    return (
        <>
            <div className="search-block">
                <input  onChange={changeSearchField} ref={input} className='search' placeholder="Search" value={searchValue} />
                { searchValue.length !== 0 ? <button onClick={searchButton} className='ok-btn'>Search</button> : null }
            </div>
            <div className="cards-holder">
                {arrayOfCards}
            </div>
            {props.ifActiveSearch ?
              <div className="pag-block">
                <button className="pag-btn" onClick={returningOnPaggination}>BACK</button>
              </div> :
              <div className="pag-block">
                <div className="pag-block-prev-first-btn">
                  {props.hasPrevPage ? <button className="pag-btn" onClick={getPrevContacts}>PREV</button> : null}
                  {first}
                </div>
                <div className="pag-block-btns">
                    {pages}
                </div>
                <div className="pag-block-next-last-btn">
                  {last}
                  {props.hasNextPage ? <button className="pag-btn" onClick={getNextContacts}>NEXT</button> : null}
                </div>
              </div>
            }
        </>
    )
}
export default Contacts;
// {props.hasNextPage  ? <button className='show-more-btn' onClick={getNextContacts}>Show more</button> : null}
