import React from 'react'
import { connect } from "react-redux";
import {changeSearchField, setUsers, changeCurrentPage, changeHasNextPageFlag} from './../../Redux/reducers/contacts-reducer'
import Contacts from './Contacts';
import * as axios from 'axios'

class ContactsContainer extends React.Component {
    componentDidMount(){
        this.getUsers(this.props.currentPage, 5);
    }
    getUsers = (page, limit, search) => {
        if(!search){search=""}
        axios.get(`/api/contacts/?page=${page}&limit=${limit}&search=${search}`).then(response => {
            this.props.setUsers(response.data.results.docs)
            this.props.changeCurrentPage(page+1)
            this.props.changeHasNextPageFlag(response.data.results.hasNextPage)
        })
    }

    render(){
        return(
            <Contacts {...this.props} getUsers={this.getUsers}/>
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




export default    connect(mapStateToProps, {changeSearchField, setUsers, changeCurrentPage, changeHasNextPageFlag})(ContactsContainer);

