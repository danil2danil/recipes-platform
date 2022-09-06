import React, { useState } from 'react'
import { Button } from '../../general/Button'
import './styles.scss'
import { uploadProfileHat } from '../../../firebase/firebase-storage'
import { useSelector } from 'react-redux'

export const ProfileHatChanger = ({ saveFunc, isActive }) => {
  const currentUser = useSelector(state => state.user.user)
  const [fileValue, setFileValue] = useState("")

  const handleChange = (e)=>{
    setFileValue(e.target.files[0])
  }

  const uploadImg = async ()=>{
    await uploadProfileHat(currentUser.uid, fileValue)
    saveFunc() 
  }

  return (
    <div className={isActive ? "hat-changer active" : "hat-changer"}>
      <div className="hat-changer__inner">
        <input className='hat-changer__input' type="file" onChange={handleChange} />
        <div className="hat-changer__buttons">
          <Button func={uploadImg}>Сохранить</Button>
          <button className="hat-changer__close-btn" onClick={saveFunc}>Закрыть</button>
        </div>
      </div>
    </div>
  )
}
