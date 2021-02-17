import React from 'react'
import { connect } from "react-redux";
import {getContacts,deleteContact,findContacts} from './../../Redux/reducers/contacts-reducer'
import {getCards, getCurrPage, getNextPage, getPrevPage, getHasNextPage, getHasPrevPage, getTotalPages, getIfActiveSearch} from './../../Redux/reducers/contacts-selectors'
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
        cards: getCards(state),
        currPage: getCurrPage(state),
        nextPage: getNextPage(state),
        prevPage:  getPrevPage(state),
        hasNextPage: getHasNextPage(state),
        hasPrevPage: getHasPrevPage(state),
        totalPages: getTotalPages(state),
        ifActiveSearch: getIfActiveSearch(state)
    }
}

export default connect( mapStateToProps, {getContacts,deleteContact,findContacts})(ContactsContainer);
