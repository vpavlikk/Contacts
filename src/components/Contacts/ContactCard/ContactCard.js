import React,{useEffect} from 'react'
import "./ContactCard.sass"
import {NavLink} from 'react-router-dom';

const ContactCard = (props) => {

  useEffect(()=>{
    console.log("render ContactCard")
  },[
      props.fullname,
      props.number,
      props.add_number,
      props.company,
      props.email,
      props.type
    ]
  )

  const deleteButtonHandler =()=>{
    props.deleteContact(props.id,props.currPage,5)
  }

    return (
        <>
            <div className="contact-card">
                <NavLink
                  className="ava-wrapper"
                  to = {{
                    pathname: `/contacts/${props.fullname}`,
                    aboutProps: {
                      number: props.number,
                      add_number: props.add_number,
                      company: props.company,
                      email: props.email,
                      type: props.type,
                      ava_src: props.ava_src
                    }
                  }}>
                  <img src={props.ava_src} alt='' />
                </NavLink>
                  <div className="info-holder">
                    <div className="fullname-label"><span>{props.fullname}</span></div>
                    <div className="number-label"><span>{props.number}</span></div>
                  </div>
                  <div className="func">
                    <NavLink
                      className="edit-btn"
                      to = {{
                        pathname: `/contact-change/${props.fullname}`,
                        aboutProps: {
                          id: props.id,
                          ava_src: props.ava_src,
                          fullname: props.fullname,
                          number: props.number,
                          add_number: props.add_number,
                          company: props.company,
                          email: props.email,
                          type: props.type
                          }
                        }}>
                      EDDIT
                    </NavLink>
                    <button className="del-btn" onClick={deleteButtonHandler}>DELLETE</button>
                  </div>
            </div>
        </>
    )
}

export default ContactCard;
// aboutProps:{id:props.id,updateContact:props.updateContact} передаем данные пропсами в глобальный обьект реакт роутер дом который доступен после let location = useLocation();
// таким образом можна передавать значения и функции между уомпонентами
