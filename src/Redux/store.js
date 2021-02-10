import {createStore, combineReducers, applyMiddleware} from 'redux'
import contactsReducer from './reducers/contacts-reducer';
// import editReducer from './reducers/edit-reducer';
import loginReducer from './reducers/login-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    contacts_state: contactsReducer,
    // edit_state: editReducer,
    form: formReducer,
    login_state: loginReducer
})

let store = createStore (reducers, applyMiddleware(thunk))
window.store = store;

export default store;
