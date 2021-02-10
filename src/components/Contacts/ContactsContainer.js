import React from 'react'
import { connect } from "react-redux";
import { changeSearchField, getFirstContactsList,getContacts,deleteContact,updateContact} from './../../Redux/reducers/contacts-reducer'
import Contacts from './Contacts';

class ContactsContainer extends React.Component {
  componentDidMount() {
    this.props.getFirstContactsList(this.props.firstPage, 5);
  }
  render() {
    return (
      <Contacts {...this.props} />
    )
  }
}




let mapStateToProps = (state) => {
    return {
        searchInputValue: state.contacts_state.searchInputValue,
        cards: state.contacts_state.cards,
        firstPage: state.contacts_state.firstPage,
        nextPage: state.contacts_state.nextPage,
        hasNextPage: state.contacts_state.hasNextPage,
        hasPrevPage: state.contacts_state.hasPrevPage,
        totalPages: state.contacts_state.totalPages
    }
}
// let mapDispatchToProps = (dispatch) => {
//     let changeSearchField = (text) => {dispatch(changeSearchFieldActionCreator(text))}
//     let setUsers = (users) =>{dispatch(setUsers(users))};
//     return {
//         changeSearchField: changeSearchField    }

// }

export default connect(mapStateToProps, { changeSearchField, getFirstContactsList,getContacts,deleteContact,updateContact })(ContactsContainer);
// getUsers = (page, limit, search) => {
//        if(!search){search=""}
//        axios.get(`/api/contacts/?page=${page}&limit=${limit}&search=${search}`).then(response => {
//            this.props.setUsers(response.data.results.docs)
//            this.props.changeCurrentPage(page+1)
//            this.props.changeHasNextPageFlag(response.data.results.hasNextPage)
//        })
//    }
