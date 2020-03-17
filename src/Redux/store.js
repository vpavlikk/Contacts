import {createStore, combineReducers, applyMiddleware} from 'redux'
import contactsReducer from './reducers/contacts-reducer';
import editReducer from './reducers/edit-reducer';
/*contacts_state: contactsReducer - к стейту contacts инициализированом
в contacts-reduser теперь мы обращаемся через contacts_state(мы закрепили этот редюсер за переменной contacts_state)
все редюсеры храняться в сторе в них же храньтся стейт
combineReducers Это метод, который позволяет вместо того, чтобы создавать один огромный reducer для всего состояния приложения сразу,
 создать отдельные редюсеры для каждого компонента и добавлять данные с них в стор(разбивка на отдельные модули).

store-это большой обьект в котором храниться состояние всего проекта
*/
let reducers = combineReducers({
    contacts_state: contactsReducer,//в редюсер встроен стейт state = initialState
    edit_state: editReducer
})
/*после  combineReducers store по-прежнему «одно хранилище = один объект» для всего приложения,
 но оно имеет вложенные объекты contacts_state и edit_state в которых находиться состояние каждого*/
let store = createStore (reducers)
window.store = store;

export default store;
