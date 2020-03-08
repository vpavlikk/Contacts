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
//Reduser это функция которая принимает и обрабатывает action(единственный способ изменить состояние в стор)
//и по нему вносит изменения в state
//Reduser и state хранятся в сторе
// Reduser ждет своего вызова чтобы изменить state
//функция которая создает action - changeSearchFieldActionCreator
const contactsReducer = (state = initialState, action) => {
    switch(action.type){
        default: return state
        case CHANGE_SEARCH_FIELD: {
            // let newState = {...state}
            // newState.searchInputValue = action.newText
            // return newState
            return{...state, searchInputValue: action.newText}
            //мы зделали поверхносную копию стейт и изменили значение searchInputValue
        }
    }
}
 
// ACTIONS CREATORS:
export const changeSearchField = (newText) => {return {type: CHANGE_SEARCH_FIELD, newText}}

// THUNK CREATORS:

export default contactsReducer;
