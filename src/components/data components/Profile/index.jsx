import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { GoPencil } from 'react-icons/go'
import './styles.scss'
import { ChangeDescription } from '../Profile Description Changer'
import { ProfileHat } from '../Profile Hat'
import { useFetchProfileInfo } from './useFetchProfileInfo'
import { ProfileHatChanger } from '../Profile Hat Changer'

export const Profile = () => {
	const currentUser = useSelector(state => state.user.user)
	const [isChangeDescription, setIsChangeDescription] = useState(false)
	const [isChangeHat, setIsChangeHat] = useState(false)

	const profileInf = useFetchProfileInfo(currentUser.uid, isChangeDescription)

	const togleCangeDescription = () => {
		setIsChangeDescription(!isChangeDescription)
	}

	const togleChangeHat = ()=>{
		setIsChangeHat(!isChangeHat)
	}

	return (
		<>
			<div className="profile">
      <ProfileHatChanger isActive={isChangeHat} saveFunc={togleChangeHat} />
        <div className="profile__hat">
  				<ProfileHat profileInfo={profileInf} />
          <button className="profile__hat-hover" onClick={togleChangeHat}>
            <p className="profile__hat-hover-txt">
              Изменить фото
            </p>
          </button>
        </div>
				<div className="profile__inner">
					<div className="profile__main-info">
						<img className='profile__avatar' src="./images/default-avatar.jpg" alt="profile-avatar" />
						<div className="pfoile__names-box">
							<h2 className="profile__nickname">{profileInf.nickname}</h2>
							<h4 className="profile__name">{profileInf.nameAndSecondName}</h4>
						</div>
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
