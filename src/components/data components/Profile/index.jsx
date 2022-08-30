import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { GoPencil } from 'react-icons/go'
import './styles.scss'
import { ChangeDescription } from '../Profile Description Changer'
import { getProfileDescription } from '../../../firebase/firebase-firestore'
import { getAuth } from 'firebase/auth'

export const Profile = () => {
	const currentUser = useSelector(state => state.user.user)
	const [isChangeDescription, setIsChangeDescription] = useState(false)
	const [description, setDescription] = useState("")

	const togleCangeDescription = ()=>{
		setIsChangeDescription(!isChangeDescription)
	}

	const fetchDecsription = async ()=>{
		const res = await getProfileDescription(currentUser.uid)
		setDescription(res)
	}
	
	useEffect(() => {
		fetchDecsription()
	}, [currentUser, isChangeDescription]);

	return (
		<>
			<div className="profile">
				<img className='profile__hat' src="./images/default-hat-2.jpg" alt="profile_hat" />
				<div className="profile__inner">
					<div className="profile__main-info">
						<img className='profile__avatar' src="./images/default-avatar.jpg" alt="profile-avatar" />
						<div className="pfoile__names-box">
							<h2 className="profile__nickname">{currentUser.email}</h2>
							<h4 className="profile__name">{currentUser.uid}</h4>
						</div>
						<div className="profile__change-btn"></div>
					</div>
					{isChangeDescription ? 
						<ChangeDescription saveFunc={togleCangeDescription} user={currentUser.uid}/> 
						:  
						<>
							<div className="profile__description">
								<p className="profile__description-text">{description}</p>
								<GoPencil className='profile__description-ico' onClick={togleCangeDescription}/>
							</div>
						</>	
					}
				</div>
			</div>
		</>
	)
}
