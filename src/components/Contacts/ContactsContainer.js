import { connect } from "react-redux";
import Contacts from "./Contacts";
import {changeSearchField} from './../../Redux/reducers/contacts-reducer'

let mapStateToProps = (state) => {//что бы таким образом можна юыло прокидать стейт подключили контекст
    return {
        searchInputValue: state.contacts_state.searchInputValue,
        cards: state.contacts_state.cards
    }
}
// let mapDispatchToProps = (dispatch) => {
//     let changeSearchField = (text) => {dispatch(changeSearchFieldActionCreator(text))}
//     return {
//         changeSearchField: changeSearchField    }


// }




export default    connect(mapStateToProps, {changeSearchField})(Contacts);
