import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { GoPencil } from 'react-icons/go'
import './styles.scss'
import { ChangeDescription } from '../Profile Description Changer'
import { getProfileDescription, getProfileInfo } from '../../../firebase/firebase-firestore'
import { getAuth } from 'firebase/auth'
import { ProfileHat } from '../Profile Hat'

export const Profile = () => {
	const currentUser = useSelector(state => state.user.user)
	const [isChangeDescription, setIsChangeDescription] = useState(false)
	const [profileInf, setProfileInf] = useState("")

	const togleCangeDescription = () => {
		setIsChangeDescription(!isChangeDescription)
	}

	const fetchProfileInfo = async () => {
		const res = await getProfileInfo(currentUser.uid)
		setProfileInf(res)
	}

	useEffect(() => {
		fetchProfileInfo()
	}, [currentUser, isChangeDescription]);

	return (
		<>
			<div className="profile">
				<ProfileHat profileInfo={profileInf}/>
				<div className="profile__inner">
					<div className="profile__main-info">
						<img className='profile__avatar' src="./images/default-avatar.jpg" alt="profile-avatar" />
						<div className="pfoile__names-box">
							<h2 className="profile__nickname">{profileInf.nickname}</h2>
							<h4 className="profile__name">{profileInf.nameAndSecondName}</h4>
						</div>
						<div className="profile__change-btn"></div>
					</div>
					{isChangeDescription ?
						<ChangeDescription saveFunc={togleCangeDescription} user={currentUser.uid} />
						:
						<>
							<div className="profile__description">
								<p className="profile__description-text">
									{profileInf.description}
									<GoPencil className='profile__description-ico' onClick={togleCangeDescription} />
								</p>
							</div>
						</>
					}
				</div>
			</div>
		</>
	)
}
