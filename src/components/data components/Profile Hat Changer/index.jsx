import React, { useState, useEffect } from 'react'
import { Button } from '../../general/Button'
import './styles.scss'
import { uploadProfileHat } from '../../../firebase/firebase-storage'
import { useSelector } from 'react-redux'
import { BsPlusLg } from 'react-icons/bs'

export const ProfileHatChanger = ({ saveFunc, isActive }) => {
  const currentUser = useSelector(state => state.user.user)
  const [fileValue, setFileValue] = useState("")
  const [prevSrc, setPrevSrc] = useState("")
  const reader = new FileReader()

  const handleChange = (e) => {
    setFileValue(e.target.files[0])
  }

  const uploadImg = async () => {
    await uploadProfileHat(currentUser.uid, fileValue)
    setFileValue("")
    setPrevSrc("")
    saveFunc()
  }

  useEffect(() => {
    if (fileValue !== "") {
      reader.readAsDataURL(fileValue)
      reader.onloadend = () => {
        setPrevSrc(reader.result)
      }
      console.log(prevSrc)
    }
  }, [fileValue])

  return (
    <div className={isActive ? "hat-changer active" : "hat-changer"}>
      <div className="hat-changer__inner">
        <label htmlFor="img-file">
          <div className="hat-changer__file-input">
            {
              fileValue !== "" ?
                <img className="hat-changer__prev" src={prevSrc} alt="prev-img" />
                :
                ""
            }
            <BsPlusLg style={{ margin: 10, width: 25, height: 25 }} />
            <p>Выбрать фото</p>
          </div>
        </label>
        <input className='hat-changer__input' type="file" id="img-file" onChange={handleChange} />
        <div className="hat-changer__buttons">
          <Button func={uploadImg}>Сохранить</Button>
          <button className="hat-changer__close-btn" onClick={saveFunc}>Закрыть</button>
        </div>
      </div>
    </div>
  )
}
