import React from 'react'
import {ImExit} from 'react-icons/im'
import './styles.scss'
import { logOut } from '../../../firebase/firebase'

export const LogOutButton = () => {
  return (
    <button className='exite' onClick={logOut}>
        <p className="exite__txt">Выйти</p>
        <ImExit className='exite__ico' />
    </button>
  )
}
