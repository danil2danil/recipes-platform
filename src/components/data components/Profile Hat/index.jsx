import React, { useEffect, useState } from 'react'
import './styles.scss'
import { getDownloadURL, getBytes, ref } from 'firebase/storage'
import { storage } from '../../../firebase/firebase-auth'

export const ProfileHat = ({ profileInfo }) => {
  const [profileHat, setProfileHat] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const fetchProfileHat = async () => {
    setIsLoading(true)
    const hatRef = ref(storage, profileInfo.hatURL)
    const res = await getDownloadURL(hatRef)
    setProfileHat(res)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchProfileHat()
  }, [profileInfo]);

  return (
    <div className='hat'>
      {isLoading ?
        <p>Загрузка...</p>
        :
        <img className="hat__img" src={profileHat} alt="profile-hat" />
      }
    </div>
  )
}
