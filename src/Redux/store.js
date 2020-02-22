import {createStore, combineReducers, applyMiddleware} from 'redux'
import contactsReducer from './reducers/contacts-reducer';
import editReducer from './reducers/edit-reducer';

let reducers = combineReducers({
    contacts_state: contactsReducer,
    edit_state: editReducer
})

let store = createStore (reducers)
window.store = store;

export default store;