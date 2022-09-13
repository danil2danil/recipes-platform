import { async } from '@firebase/util'
import React, {useState, useEffect} from 'react'
import { setProfileDescription } from '../../../firebase/firebase-firestore'
import { Button } from '../../general/Button'
import './styles.scss'
import { useSelector } from 'react-redux'


export const ChangeDescription = ({saveFunc, currentDescription}) => {
    const [inputValue, setInputValue] = useState()
    const currentUser = useSelector(state=>state.user.user)

    const handleChange = (e)=>{
        setInputValue(e.target.value)
    }

    const saveDescription = async ()=>{
        await setProfileDescription(currentUser.uid, inputValue)
        saveFunc()
    }

    useEffect(() => {
      setInputValue(currentDescription)
    }, []);

  return (
    <div className='description'>
        <textarea className='description__input' style={{width: 280, height: 100}} value={inputValue} onChange={handleChange}></textarea>
        <Button func={saveDescription}>Сохранить</Button>
    </div>
  )
}
