import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import contactsReducer from './reducers/contacts-reducer';
// import editReducer from './reducers/edit-reducer';
import loginReducer from './reducers/login-reducer';
import thunk from 'redux-thunk';
import {
  reducer as formReducer
} from 'redux-form'

let reducers = combineReducers({
  contacts_state: contactsReducer,
  // edit_state: editReducer,
  form: formReducer,
  login_state: loginReducer
})
console.log(reducers)
// combineReducers возвращяет обьект который и будет нашим store,внутри возврашяемого обьекта сохраняються свойства в которых записаны ссылки на отдельные редусеры,когда идет обращения к
// store combineReducers каждый раз срабатыает
let store = createStore(reducers, applyMiddleware(thunk))
window.store = store;

export default store;

// порядок роботы
// <Provider store={store}>
// let store = createStore (reducers, applyMiddleware(thunk))
// combineReducers
// диспатч по редюсерам
// все редюсеры возвращяют дефолтные стейты
// тригериться конект подписанный на стор изменения
// данные через редакс контекст попадают в мапстейт ту пропс вызванный конектом
