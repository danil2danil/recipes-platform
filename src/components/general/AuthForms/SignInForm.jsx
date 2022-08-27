import React, { useState } from 'react'
import { Input } from '../Input'
import './styles.scss'
import { logIn } from '../../../firebase/firebase'
import { useNavigate } from "react-router-dom";
import { Button } from '../Button';
import {Link} from 'react-router-dom'



export const SignInForm = () => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({
    email: "",
    pass: "",
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
      const res = await logIn(inputValue.email, inputValue.pass)
      navigate('/profile')
    }catch(e){
      alert(e.messege)
    }
  }

  return (
    <>
      <img className='auth-form__logo' src="./images/logo.svg" alt="My Recipes" />
      <div className='auth-form'>
        <h1 className="auth-form__title">Sign In</h1>
        <div className="auth-form__input">
          <Input placeholder='Электронная почта' changebleValue='email' onChangeFunc={inputHandleChange} />
        </div>
        <div className="auth-form__input">
          <Input placeholder='Пароль' changebleValue='pass' onChangeFunc={inputHandleChange} />
        </div>
        <Link className='auth-form__link' to="/signUp">Нажмите сюда, если вы еще не зарегистрированны</Link>
        <Button func={handleClick}>Войти в профиль</Button>
      </div>
    </>
  )
}
