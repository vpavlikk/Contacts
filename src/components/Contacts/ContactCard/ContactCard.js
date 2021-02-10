import React from 'react'
import "./ContactCard.sass"
import ava from './ava.png'
import {NavLink} from 'react-router-dom';

const ContactCard = (props) => {
  const deleteButtonHandler =()=>{
    props.deleteContact(props.id,props.nextPage-1,5)
  }
    return (
        <div>
            <div className="contact-card">
                <NavLink to={{ pathname:'/contact-info',
                  aboutProps:{
                    fullname:props.fullname,
                    number:props.number,
                    add_number:props.add_number,
                    company:props.company,
                    email:props.email,
                    type:props.type
                  }}} className="ava-wrapper">
                    <img src={ava} alt='' />
                </NavLink>

                <div className="content">

                  <div className="fullname-label"><span>{props.fullname}</span></div>

                  <div className="func">
                    <div className="edit-label"><NavLink to={{ pathname:'/contact-change',aboutProps:{id:props.id,updateContact:props.updateContact}}}><span>EDDIT</span></NavLink></div>
                    <div className="del-btn"><button onClick={deleteButtonHandler}><span>DELLETE</span></button></div>
                  </div>

                  <div className="number-label"><span>{props.number}</span></div>

                </div>

            </div>
        </div>
    )
}

export default ContactCard;
// aboutProps:{id:props.id,updateContact:props.updateContact} передаем данные пропсами в глобальный обьект реакт роутер дом который доступен после let location = useLocation();
// таким образом можна передавать значения и функции между уомпонентами
