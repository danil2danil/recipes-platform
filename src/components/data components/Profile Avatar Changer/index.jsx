import React, { useEffect } from 'react'
import { useState } from 'react'
import { uploadProfileAvatar } from '../../../firebase/firebase-storage'
import { Button } from '../../general/Button'
import { useSelector } from 'react-redux'
import './styles.scss'
import { BsPlusLg } from 'react-icons/bs'


export const ProfileAvatarChanger = ({ isActive, saveFunc }) => {
  const currentUser = useSelector(state => state.user.user)
  const [fileValue, setFIleValue] = useState("")
  const [prevSrc, setPrevSrc] = useState("")
  const fileReader = new FileReader()

  const handleChange = (event) => {
    setFIleValue(event.target.files[0])
  }

  const uploadAvatar = async () => {
    await uploadProfileAvatar(currentUser.uid, fileValue)
    setFIleValue("")
    setPrevSrc("")
    saveFunc()
  }

  useEffect(() => {
    if (fileValue) {
      fileReader.readAsDataURL(fileValue)
      fileReader.onloadend = () => {
        setPrevSrc(fileReader.result)
      }
      console.log(prevSrc)
    }
  }, [fileValue])

  return (
    <div className={isActive ? "avatar-changer active" : "avatar-changer"}>
      <div className="avatar-changer__inner">
        <label htmlFor="avatarImg">
          <div className='avatar-changer__input'>
            {
              fileValue !== "" ?
                <div className="avatar-changer__prev">
                  <img className='avatar-changer__prev-img' src={prevSrc} alt="avatar-preview" />
                </div>
                :
                <>
                  <BsPlusLg style={{ margin: 10, width: 20, height: 20 }} />
                  <p className="avatar-changer__input-txt">Выбрать фото</p>
                </>
            }
          </div>
        </label>
        <input id='avatarImg' type="file" style={{ display: "none" }} onChange={handleChange} accept="image/jpeg" />
        <div className="avatar-changer__buttons">
          <Button func={uploadAvatar}>Сохранить</Button>
          <button className='avatar-changer__close-btn' onClick={saveFunc}>Закрыть</button>
        </div>
      </div>
    </div>
  )
}
