import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '../../../firebase/firebase-auth'
import './styles.scss'

export const Avatar = ({isAvatarChanged=null, profileInfo}) => {
    const [avatar, setAvatar] = useState("")

    const fetchProfileAvatar = async ()=>{
        const avatarRef = ref(storage, profileInfo.avatarUrl)
        const res = await getDownloadURL(avatarRef)
        if(res){
            setAvatar(res)
        }
    }

    useEffect(()=>{
        fetchProfileAvatar()
    }, [profileInfo, isAvatarChanged])
    return (
        <img 
            className='avatar'
            src={avatar === "" ? "./images/default-avatar.jpg" : avatar}
            alt="Profile-avatar" 
        />
    )
}
