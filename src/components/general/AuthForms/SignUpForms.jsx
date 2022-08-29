import React, { useState } from 'react'
import { Input } from '../Input'
import './styles.scss'
import { setProfileInfo, signUp } from '../../../firebase/firebase'
import { useNavigate } from "react-router-dom";
import { Button } from '../Button';
import {Link} from 'react-router-dom'



export const SignUpForm = () => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({
    email: "",
    nickName: "",
    trueName: "",
    pass: "",
    repeatPass: "",
  })

  const inputHandleChange = (changebleValue, newValue) => {
    setInputValue((current) => {
      let temp = { ...current }
      temp[changebleValue] = newValue
      return temp
    })
  }

  const handleClick = async ()=>{
    try{
      const res = await signUp(inputValue.email, inputValue.pass)
      console.log(res.user)
      await setProfileInfo(res.user.uid, inputValue.nickName, inputValue.trueName)
      navigate('/profile')
    }catch(e){
      alert(e.messege)
    }
  }

  return (
    <>
      <img className='auth-form__logo' src="./images/logo.svg" alt="My Recipes" />
      <div className='auth-form'>
        <h1 className="auth-form__title">Sign Up</h1>
        <div className="auth-form__input">
          <Input placeholder='Электронная почта' changebleValue='email' onChangeFunc={inputHandleChange} />
        </div>
        <div className="auth-form__input">
          <Input placeholder='Имя профиля' changebleValue='nickName' onChangeFunc={inputHandleChange} />
        </div>
        <div className="auth-form__input">
          <Input placeholder='Имя и Фамилия(необязательно)' changebleValue='trueName' onChangeFunc={inputHandleChange} />
        </div>
        <div className="auth-form__input">
          <Input placeholder='Пароль' changebleValue='pass' onChangeFunc={inputHandleChange} />
        </div>
        <div className="auth-form__input">
          <Input placeholder='Повторите пароль' changebleValue='repeatPass' onChangeFunc={inputHandleChange} />
        </div>
        <Link className='auth-form__link' to="/signIn">Нажмите сюда, если вы уже зарегистрированы</Link>
        <Button func={handleClick}>Создать аккаунт</Button>
      </div>
    </>
  )
}
