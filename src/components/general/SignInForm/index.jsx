import React, { useState } from 'react'
import { Input } from '../Input'
import './styles.scss'


export const SignInForm = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    pass: "abra",
  })

  const inputHandleChange = (changebleValue, newValue) => {
    setInputValue((current) => {
      let temp = { ...current }
      temp[changebleValue] = newValue
      return temp
    })
  }

  return (
    <div className='SignInForm'>
      <div className="SignInForm__input">
        <Input placeholder='Электронная почта' changebleValue='email' onChangeFunc={inputHandleChange} />
      </div>
      <div className="SignInForm__input">
        <Input placeholder='Пароль' changebleValue='pass' onChangeFunc={inputHandleChange} />
      </div>
    </div>
  )
}
