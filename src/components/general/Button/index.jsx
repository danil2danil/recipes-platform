import React, { Children } from 'react'
import './styles.scss'

export const Button = ({children, func}) => {
  return (
    <button className='btn' onClick={func}>{children}</button>
  )
}
