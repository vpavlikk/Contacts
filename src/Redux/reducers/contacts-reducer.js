const CHANGE_SEARCH_FIELD = 'CHANGE-SEARCH-FIELD'


let initialState = {
    searchInputValue: ' ',
    cards: [
        {id: 1, fullname: 'Konstantin K', number: '0000-0000-0000'},
        {id: 1, fullname: 'Vlad Pavlik', number: '0000-0000-0000'},
        {id: 1, fullname: 'Konstantin aasvdfa', number: '0000-0000-0000'},
        {id: 1, fullname: 'Konstantin aasvdfa', number: '0000-0000-0000'},
        {id: 1, fullname: 'Konstantin aasvdfa', number: '0000-0000-0000'},
        {id: 1, fullname: 'Konstantin aasvdfa', number: '0000-0000-0000'},
       
    ]
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
    }
}

export const changeSearchFieldActionCreator = (newText) => {return {type: CHANGE_SEARCH_FIELD, newText}}

export default contactsReducer;