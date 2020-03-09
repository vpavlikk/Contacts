const CHANGE_SEARCH_FIELD = 'CHANGE-SEARCH-FIELD'
const SET_USERS = 'SET-USERS'
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE'
const CHANGE_HAS_NEXT_PAGE_FLAG = 'CHANGE-HAS-NEXT-PAGE-FLAG'

let initialState = {
    searchInputValue: ' ',
    cards: [],
    currentPage: 1,
    hasNextPage: false
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
        case SET_USERS:{
            // console.log(action.users)
            // let newState = {...state}
            // newState.cards = [...state.cards]
            // for (let i=0; i<action.user.lenght; i++){
            //     newState.cards.push(action.users[i])
            // }
            return{ ...state, cards: [...state.cards, ...action.users] }
            }
            case CHANGE_CURRENT_PAGE:{
                return {...state, currentPage: action.page}
            }
            case CHANGE_HAS_NEXT_PAGE_FLAG:{
                return{...state, hasNextPage: action.hasNextPage}
            }
        }
        
    }

 
// ACTIONS CREATORS:
export const changeSearchField = (newText) => {return {type: CHANGE_SEARCH_FIELD, newText}}
export const setUsers = (users) => {return {type: SET_USERS, users}}
export const changeCurrentPage = (page) => {return {type: CHANGE_CURRENT_PAGE, page}}
export const changeHasNextPageFlag = (hasNextPage) => {return{type: CHANGE_HAS_NEXT_PAGE_FLAG, hasNextPage}}
// THUNK CREATORS:

export default contactsReducer;

