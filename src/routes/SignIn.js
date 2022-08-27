import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInForm } from '../components/general/AuthForms/SignInForm'
import { logIn } from '../firebase/firebase'

export const SignIn = () => {
  return (
    <>
      <SignInForm />
    </>
  )
}
