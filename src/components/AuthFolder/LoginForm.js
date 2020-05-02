import React, { useState } from 'react'
import './AuthForm.sass'
import { NavLink } from 'react-router-dom'
import { API } from '../../api'

const LoginForm = () => {
    let [loginForm, setLoginForm] = useState({email:"", password:""})
    let [passwordToggle, setPassordToggle] = useState(false)//passwordToggle-використовується для passwordToggle?"HIDE":"SHOW" та passwordToggle?"text":"password"
    const onEmailChangeHandler = (e) =>{
        setLoginForm({email: e.target.value, password: loginForm.password})
    }
    const onPasswordChangeHandler = (e) =>{
        setLoginForm({password: e.target.value, email: loginForm.email})
    }
    const onPasswordTypeChange=()=>{
        setPassordToggle(!passwordToggle)//змінює значення passwordToggle на протележне
    }
    const useLogin = () => {
        console.log(loginForm)
        API.login(loginForm.email, loginForm.password)
    }
    /*useState("") робили на кожну строчку окремо.Тобто окремі свойства emailInput і  passwordInput
    для зручності створили одне свойства loginForm якому присвоюється обєкт з емейлом та паролем
    */
    // let [emailInput, setEmailInput] = useState("")
    // let [passwordInput, setPasswordInput] = useState("")

    // const onEmailChangeHander = (e) =>{
    //     setEmailInput(e.target.value)
    // }
    // const onPasswordChangeHandler = (e) =>{
    //     setPasswordInput(e.target.value)
    // }
    return(
        <>
            <div >
                <input onChange={onEmailChangeHandler} name='email' className='edit-input' placeholder='Email'/>
            </div >
            <div>
                <div>
                    <input style={{width:'70%'}} type={passwordToggle?"text":"password"}// змінює звьоздочки на пароль який ми вводимо
                    onChange={onPasswordChangeHandler}
                    name='password'
                    className='edit-input'
                    placeholder='password'/>
                    <button onClick={onPasswordTypeChange}>{passwordToggle?"HIDE":"SHOW"}</button>
                </div>
            </div>
            <div >
                <button onClick={useLogin} className='sbmt-btn'>Login</button>
            </div>
            <div  style={{textAlign:'center'}}><NavLink to='/register' >Do not have account? Sign Up!</NavLink></div>
        </>
    )
}

export default LoginForm
/*
hooks заміна класам. функції які дозволяють підключитись до состоянія і методів життявого циклу Реакт знаходячись в функціональній компоненті

 1)useState(value) - заміна локального стейта, можна використовувати багаторазово в одній компоненті, value-початкове значення
 Змінні та іх значення зникають по результату виконання функції. useState предоставляет функциональным компонентам доступ к состоянию React.
 объявляет «переменную состояния» Таким образом мы можем «сохранить» некоторые значения между вызовами функции.
 let [loginForm, setLoginForm] = useState({email:"", password:""})
 В стейті додається свойство loginForm і метод setLoginForm щоб змінити значення свойства loginForm,
 при цьому дефолтне значення цього свойства = обьекту з двох інших свойтв {email:"", password:""}, яке писвоюється  через хук useState
 робота хука основана на принципі деструктуризації
 let arr = ['1', '2'];
 let [one, two, three] = arr;
 console.log(one); // 1
 console.log(two); // 2
 console.log(three); // undefined

 2) useEffect(() => { })- заміна методів життєвого циклу(componentDidMount,componentDidUpdate,componentWillUnmount)
 Хук эффекта даёт вам возможность выполнять побочные эффекты в функциональном компоненте
 Побочными эффектами в React-компонентах могут быть: загрузка данных, оформление подписки и изменение DOM вручную.
 Существует два распространённых вида побочных эффектов в компонентах React: компоненты, которые требуют и не требуют сброса.

 -не требуют сброса (Сетевые запросы, изменения DOM вручную, логирование ) используем useEffect(() => { })
 (спользуя этот хук, вы говорите React сделать что-то после рендера.React запомнит функцию (то есть «эффект»),
 которую вы передали и вызовет её после того, как внесёт все изменения в DOM.)
 -требуют сброса
 useEffect(() => {
  do method while componentDidMount
  return function cleanup() {cancel method like componentWillUnmount};
 });
 return- in useEfect означает что React будет сбрасывать эффект перед тем, как компонент размонтируется.
 Однако, как мы уже знаем, эффекты выполняются не один раз, а при каждом рендере.
 Вот почему React также сбрасывает эффект из предыдущего рендера, перед тем, как запустить следующий.
 https://ru.reactjs.org/docs/hooks-effect.html
*/
