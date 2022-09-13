import React, { useState, useEffect } from 'react'
import { GoPencil } from 'react-icons/go'
import './styles.scss'
import { ChangeDescription } from '../Profile Description Changer'
import { ProfileHat } from '../Profile Hat'
import { useFetchProfileInfo } from './useFetchProfileInfo'
import { ProfileHatChanger } from '../Profile Hat Changer'
import { ProfileDescription } from '../Profile Description'
import { Avatar } from '../Profile Avatar'
import { useSelector } from 'react-redux'
import { ProfileAvatarChanger } from '../Profile Avatar Changer'

export const Profile = () => {
	const user = useSelector(state => state.user.user)
	const [isChangeDescription, setIsChangeDescription] = useState(false)
	const [isChangeHat, setIsChangeHat] = useState(false)
	const [isChangeAvatar, setIsChangeAvatar] = useState(false)
	const profileInf = useFetchProfileInfo(user && user.uid)

	const togleCangeAvatar = () => {
		setIsChangeAvatar(!isChangeAvatar)
	}

	const togleCangeDescription = () => {
		setIsChangeDescription(!isChangeDescription)
	}

	const togleChangeHat = () => {
		setIsChangeHat(!isChangeHat)
	}

	return (
		<>
			<div className="profile">
				<ProfileHatChanger isActive={isChangeHat} saveFunc={togleChangeHat} />
				<div className="profile__hat">
					<ProfileHat isHatChanged={isChangeHat} profileInfo={profileInf} />
					<button className="profile__hat-hover" onClick={togleChangeHat}>
						<p className="profile__hat-hover-txt">
							Изменить фото
						</p>
					</button>
				</div>
				<div className="profile__inner">
					<div className="profile__main-info">
						<ProfileAvatarChanger isActive={isChangeAvatar} saveFunc={togleCangeAvatar} />
						<div className="profile__avatar-area">
							<Avatar isAvatarChanged={isChangeAvatar} profileInfo={profileInf} />
							<button className="profile__avatar-hover" onClick={togleCangeAvatar}>
								<p className="profile__avatar-hover-txt">
									Изменить фото
								</p>
							</button>
						</div>
						<div className="pfoile__names-box">
							<h2 className="profile__nickname">{profileInf.nickname}</h2>
							<h4 className="profile__name">{profileInf.nameAndSecondName}</h4>
						</div>
					</div>
					{isChangeDescription ?
						<ChangeDescription currentDescription={profileInf.description} saveFunc={togleCangeDescription} />
						:
						<ProfileDescription description={profileInf.description} togleFunc={togleCangeDescription} />
					}
				</div>
			</div>
		</>
	)
}
