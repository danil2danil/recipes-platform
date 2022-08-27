import React from 'react'
import { useState } from 'react'
import './styles.scss'

export const Input = ({onChangeFunc, placeholder, changebleValue}) => {
    return (
        <>
            <input
                className='input'
                type="text"
                onChange={(e) => onChangeFunc(changebleValue, e.target.value)}
                placeholder={placeholder}
            />
        </>
    )
}
