import React from 'react'
import { connect } from "react-redux";
import { changeSearchField, getUsersList} from './../../Redux/reducers/contacts-reducer'
import Contacts from './Contacts';

class ContactsContainer extends React.Component {

    componentDidMount() {
        this.getUsers(this.props.currentPage, 5);
    }
    getUsers =  (page, limit, search) => {
        this.props.getUsersList(page,limit,search)
    }

    render() {
        return (
            <Contacts {...this.props} getUsers={this.getUsers} />
        )
    }


}




let mapStateToProps = (state) => {
    return {
        searchInputValue: state.contacts_state.searchInputValue,
        cards: state.contacts_state.cards,
        currentPage: state.contacts_state.currentPage,
        hasNextPage: state.contacts_state.hasNextPage
    }
}
// let mapDispatchToProps = (dispatch) => {
//     let changeSearchField = (text) => {dispatch(changeSearchFieldActionCreator(text))}
//     let setUsers = (users) =>{dispatch(setUsers(users))};
//     return {
//         changeSearchField: changeSearchField    }

// }




export default connect(mapStateToProps, { changeSearchField, getUsersList })(ContactsContainer);

