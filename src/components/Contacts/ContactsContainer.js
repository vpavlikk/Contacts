import React from 'react'
import { connect } from "react-redux";
import {getContacts,deleteContact,findContacts} from './../../Redux/reducers/contacts-reducer'
import Contacts from './Contacts';

class ContactsContainer extends React.Component {
  shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps===this.props)
    return true
  }
  componentDidMount() {
    this.props.getContacts(this.props.currPage, 5);
    // getUsers = (page, limit, search) => {
    //        if(!search){search=""}
    //        axios.get(`/api/contacts/?page=${page}&limit=${limit}&search=${search}`).then(response => {
    //            this.props.setUsers(response.data.results.docs)
    //            this.props.changeCurrentPage(page+1)
    //            this.props.changeHasNextPageFlag(response.data.results.hasNextPage)
    //        })
    //    }
  }
  render() {
    console.log("render ContactsContainer")
    return (
      <Contacts {...this.props} />
    )
  }
}

let mapStateToProps = (state) => {
    return {
        cards: state.contacts_state.cards,
        currPage: state.contacts_state.currPage,
        nextPage: state.contacts_state.nextPage,
        prevPage: state.contacts_state.prevPage,
        hasNextPage: state.contacts_state.hasNextPage,
        hasPrevPage: state.contacts_state.hasPrevPage,
        totalPages: state.contacts_state.totalPages,
        ifActiveSearch: state.contacts_state.ifActiveSearch
    }
}

export default connect( mapStateToProps, {getContacts,deleteContact,findContacts})(ContactsContainer);
