import React from 'react'
import { Profile } from '../components/data components/Profile'
import { ProfileContent } from '../components/data components/Profile Content'

export const ProfilePage = ({user}) => {
  return (
    <>
      <Profile user={user}/>
      <ProfileContent />
    </>
  )
}
