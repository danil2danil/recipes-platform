import React from 'react'
import { GoPencil } from 'react-icons/go'
import './styles.scss'

export const ProfileDescription = ({ description, togleFunc }) => {
    return (
        <div className='description'>
            <p className="description__text">
                {description}
                <GoPencil className='description__ico' onClick={togleFunc} />
            </p>
        </div>
    )
}
