import { API } from "../../api"

const CHANGE_SEARCH_FIELD = 'CHANGE-SEARCH-FIELD'
const SET_MORE_CONTACTS = 'SET-MORE-CONTACTS'
const CHANGE_NEXT_PAGE = 'CHANGE-NEXT-PAGE'
const CHANGE_PAGINATION_FLAGS = 'CHANGE-PAGINATION-FLAGS '
const SET_CONTACTS_PAGE_MOUNT = 'SET-CONTACTS-PAGE-MOUNT'
/*cards: [
        {id: 1, fullname: 'Konstantin K', number: '0000-0000-0000'},
        {id: 1, fullname: 'Vlad Pavlik', number: '0000-0000-0000'},
    ]*/

let initialState = {
    searchInputValue: ' ',
    cards: [],
    firstPage: 1,
    currPage: null,
    hasNextPage: false,
    hasPrevPage: false,
    totalPages: null,
    prevPage: null,
    nextPage: 1
}

const contactsReducer = (state = initialState, action) => {
    switch(action.type){
        default: return state
        case CHANGE_SEARCH_FIELD: {
            // let newState = {...state}
            // newState.searchInputValue = action.newText
            // return newState
            return{...state, searchInputValue: action.newText}
        }
        case SET_MORE_CONTACTS:{
            // console.log(action.users)
            // let newState = {...state}
            // newState.cards = [...state.cards]
            // for (let i=0; i<action.user.lenght; i++){
            //     newState.cards.push(action.users[i])
            // }
            return{ ...state, cards: [...state.cards, ...action.contacts] }
        }
        case SET_CONTACTS_PAGE_MOUNT:{
            return{ ...state, cards: [...action.contacts] }
        }
        case CHANGE_NEXT_PAGE:{
            return {...state, nextPage: action.page}
        }
        case CHANGE_PAGINATION_FLAGS:{
            return
            {...state, hasNextPage: action.hasNextPage, hasPrevPage: action.hasPrevPage, totalPages: action.totalPages, prevPage: action.prevPage, nextPage: action.nextPage, currPage: action.currPage}
        }
      }
    }

// ACTIONS CREATORS:
export const changeSearchField = (newText) => {return {type: CHANGE_SEARCH_FIELD, newText}}
export const setMoreContacts = (contacts) => {return {type: SET_MORE_CONTACTS, contacts}}
export const setContactsPageMount = (contacts) => {return {type: SET_CONTACTS_PAGE_MOUNT, contacts}}
export const changeNextPage = (page) => {return {type: CHANGE_NEXT_PAGE, page}}
export const changePaginationFlags = (hasNextPage,hasPrevPage,totalPages,prevPage,nextPage,currPage) => {
  return {type: CHANGE_PAGINATION_FLAGS,hasNextPage,hasPrevPage,totalPages,prevPage,nextPage,currPage}
}

// THUNK CREATORS:
//getFirstContactsList - всегда срабатывает на монтирования компоненты Контактс
// запрашивает первую страницу контактов с сервера (page = firstPage: 1,) и всегда перезаписывает контакты с первой страницы
// теми же контактами с первой страницы а не добавляет до существуюших и устанавливает currentPage: 1 = 2 что бы при нажатии
// при нажатии кнопки show more запросить пользователей со второй страницы, getFirstContactsList позволяет вернуться к первоначальному состоянию
export const getFirstContactsList =  (page,limit,search) => async (dispatch) => {
    if (!search) { search = "" }
    let response = await API.getContacts(page,limit,search)
    dispatch(setContactsPageMount(response.results.docs))
    dispatch(changePaginationFlags(response.results.hasNextPage, response.results.hasPrevPage, response.results.totalPages, response.results.prevPage, response.results.nextPage, response.results.page))
    dispatch(changeNextPage(2))
}
// getMoreContacts-срабатывает только на нажатия кнопки show more делает запросы на вторую страницу и больше,
// каждый раз до сушестующего масива контактов добавляет тот что пришел с сервера
export const getContacts=(page,limit,search)=>async(dispatch)=>{
  if (!search) { search = "" }
  let response = await API.getContacts(page,limit,search)
  dispatch(setMoreContacts(response.results.docs))
  dispatch(changePaginationFlags(response.results.hasNextPage, response.results.hasPrevPage, response.results.totalPages, response.results.prevPage, response.results.nextPage, response.results.page))
  dispatch(changeNextPage(page + 1))
}

// export const deleteContact=(id,page,limit,search)=>async(dispatch,getState)=>{
//   if (!search) { search = "" }
//   API.deleteContact(id).then(responseDelete=>{
//     alert(responseDelete.message)
//     API.getContacts(page,limit,search).then(responseUppdate=>{
//       let delContactExists = responseUppdate.results.docs.map((item)=>{return item._id;}).indexOf(id)
//       if(delContactExists === -1){//check if contact was deleted from database while cheking if the object with deleting id doesnt exist in response
//         let cards = getState().contacts_state.cards
//         let result = cards.map((item)=>{ return item._id; }).indexOf(id)//get index of deleting object in array,map идет по обьектам и возвращяет айди каждого,которое в свою очередь
//         // сравниваеться через indexOf() c id обьектом которорый хотим удалить,и если находит токое id в обьекте то возвращяет ындекс этого обьекта в масиве
//         cards.splice(result, 1);
//         dispatch(setContactsPageMount(cards))
//       }
//     })
//   })
// }

export const deleteContact=(id,page,limit,search)=>async(dispatch,getState)=>{
  if (!search) { search = "" }
  API.deleteContact(id).then(responseDelete=>{
    alert(responseDelete.message)
    API.getContacts(page,limit,search).then(responseUppdate=>{
      let cards = getState().contacts_state.cards
      cards.splice(Math.max(cards.length - responseUppdate.results.docs.length, 0))
      console.log(cards)
      let result = cards.concat(responseUppdate.results.docs)
      dispatch(setContactsPageMount(result))
    })
  })
}

export const addContact = (cardAddingFormDataObject) => async(dispatch) => {
  await API.addContact(cardAddingFormDataObject)
}

export const updateContact = (contactChangeFormDataObject) => async(dispatch) => {
  await API.updateContact(contactChangeFormDataObject)
}

export default contactsReducer;
