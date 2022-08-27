import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logIn } from '../firebase/firebase'

export const SignIn = () => {
const navigate = useNavigate()

  const handleClick = async () => {
    const res = await logIn('danilborunov26@mail.ru', '123456')
    console.log(res)
    navigate('/profile', {replace: true})
  }

  return (
    <div>
      SignIn
      <button onClick={handleClick} style={{ padding: 10, background: 'grey' }}>SignIn</button>
    </div>
  )
}
