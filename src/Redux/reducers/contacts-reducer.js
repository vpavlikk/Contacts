import {
  API
}
from "../../api"
import ava from "./ava.png"

// const SET_MORE_CONTACTS = 'SET-MORE-CONTACTS'
const CHANGE_NEXT_PAGE = 'CHANGE-NEXT-PAGE'
const CHANGE_PAGINATION_FLAGS = 'CHANGE-PAGINATION-FLAGS '
const SET_CONTACTS = "SET-CONTACTS"
const SET_IF_ACTIVE_SEARCH = "SET-IF-ACTIVE-SEARCH"
/*cards: [
        {id: 1, fullname: 'Konstantin K', number: '0000-0000-0000'},
        {id: 1, fullname: 'Vlad Pavlik', number: '0000-0000-0000'},
    ]*/
let arrayOfCards = [{
  id: '213123',
  fullname: 'Vlad P',
  number: '0000-0000-0000'
}]
let initialState = {
  cards: arrayOfCards,
  hasNextPage: false,
  hasPrevPage: false,
  totalPages: null,
  prevPage: null,
  currPage: 1,
  nextPage: null,
  ifActiveSearch: false,
  default_ava_src: ava
}

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
      // for button show more
      // case SET_MORE_CONTACTS:{
      //     // console.log(action.users)
      //     // let newState = {...state}
      //     // newState.cards = [...state.cards]
      //     // for (let i=0; i<action.user.lenght; i++){
      //     //     newState.cards.push(action.users[i])
      //     // }
      //     return{ ...state, cards: [...state.cards, ...action.contacts] }
      // }
    case SET_CONTACTS: {
      console.log(state.cards);
      console.log(action.contacts);
      return {
        ...state,
        cards: [...action.contacts]
      }
    }
    case SET_IF_ACTIVE_SEARCH: {
      return {
        ...state,
        ifActiveSearch: action.value
      }
    }
    case CHANGE_NEXT_PAGE: {
      return {
        ...state,
        nextPage: action.page
      }
    }
    case CHANGE_PAGINATION_FLAGS: {
      return {
        ...state,
        hasNextPage: action.hasNextPage,
        hasPrevPage: action.hasPrevPage,
        totalPages: action.totalPages,
        prevPage: action.prevPage,
        nextPage: action.nextPage,
        currPage: action.currPage
      }
    }
  }
}

// ACTIONS CREATORS:
// export const setMoreContacts = (contacts) => {return {type: SET_MORE_CONTACTS, contacts}} for show more button
export const setContacts = (contacts) => {
  return {
    type: SET_CONTACTS,
    contacts
  }
}
export const setIfActiveSearch = (value) => {
  return {
    type: SET_IF_ACTIVE_SEARCH,
    value
  }
}
export const changeNextPage = (page) => {
  return {
    type: CHANGE_NEXT_PAGE,
    page
  }
}
export const changePaginationFlags = (hasNextPage, hasPrevPage, totalPages, prevPage, nextPage, currPage) => {
  return {
    type: CHANGE_PAGINATION_FLAGS,
    hasNextPage,
    hasPrevPage,
    totalPages,
    prevPage,
    nextPage,
    currPage
  }
}

// THUNK CREATORS:
export const getContacts = (page, limit) => async (dispatch) => {
  let response = await API.getContacts(page, limit)
  dispatch(setContacts(response.results.docs))
  dispatch(changePaginationFlags(response.results.hasNextPage, response.results.hasPrevPage, response.results.totalPages, response.results.prevPage, response.results.nextPage, response.results.page))
  dispatch(setIfActiveSearch(false))
}

export const findContacts = (search) => (dispatch) => {
  API.findContacts(search).then(response => {
    if (response.results.docs.length === 0) {
      alert("There are no such contacts' names, try another name")
    } else {
      dispatch(setContacts(response.results.docs))
      dispatch(setIfActiveSearch(true))
    }
  })
}

export const deleteContact = (id, page, limit, search) => (dispatch, getState) => {
  if (!search) {
    search = ""
  }
  API.deleteContact(id).then(responseDelete => {
    alert(responseDelete.message)
    if (getState().contacts_state.cards.length === 1 && page - 1 !== 0) { //если удаляем последний елемент страницы,то запрос отправляеться на предыдушую страницу
      API.getContacts(page - 1, limit, search).then(response => {
        dispatch(setContacts(response.results.docs))
        dispatch(changePaginationFlags(response.results.hasNextPage, response.results.hasPrevPage, response.results.totalPages, response.results.prevPage, response.results.nextPage, response.results.page))
      })
    } else {
      API.getContacts(page, limit, search).then(response => {
        dispatch(setContacts(response.results.docs))
        dispatch(changePaginationFlags(response.results.hasNextPage, response.results.hasPrevPage, response.results.totalPages, response.results.prevPage, response.results.nextPage, response.results.page))
      })
    }
  })
}

export const addContact = (cardAddingFormDataObject) => {
  return (dispatch) => {
    API.addContact(cardAddingFormDataObject).then(response => {
      alert(response.message)
    })
  }
}

export const updateContact = (contactChangeFormDataObject) => (dispatch, getState) => {
  API.updateContact(contactChangeFormDataObject).then(response => {
    alert(response.message)
  })
}

export default contactsReducer;
