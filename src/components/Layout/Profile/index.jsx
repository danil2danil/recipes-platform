import React from 'react'
import { useSelector } from 'react-redux'
import './styles.scss'
import { ProfileContent } from '../../data components/Profile Content'


export const Profile = () => {
	const currentUser = useSelector(state => state.user.user)

	return (
		<>
		<div className="profile">
			<img className='profile__hat' src="./images/default-hat-2.jpg" alt="profile_hat" />
			<div className="profile__inner">
				<div className="profile__main-info">
					<img className='profile__avatar' src="./images/default-avatar.jpg" alt="profile-avatar" />
					<div className="pfoile__names-box">
						<h2 className="profile__nickname">Nickname</h2>
						<h4 className="profile__name">Profile Name</h4>
					</div>
					<div className="profile__change-btn"></div>
				</div>
				<p className="profile__description">Описание тутбудет очень много описания, но возможно и не очень много, но все равно если его будет много, то надо будет ограничивать</p>
			</div>
		</div>
		<ProfileContent />
	</>
	)
}
