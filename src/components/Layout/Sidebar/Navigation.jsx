import React from 'react'
import './styles.scss'
import { NavLink } from 'react-router-dom'
import { VscAccount } from 'react-icons/vsc'
import { RiFileList3Line } from 'react-icons/ri'
import { BsHeart } from 'react-icons/bs'
import { RiSettings4Line } from 'react-icons/ri'

export const Navigation = () => {
   return (
      <nav className='sidebar__nav'>
         <NavLink to='/profile' className='sidebar__nav-item'>
            <VscAccount className='sidebar__nav-ico' />
            <p className="sidebar__nav-link">Мой профиль</p>
         </NavLink>
         <NavLink to='/' className='sidebar__nav-item'>
            <RiFileList3Line className='sidebar__nav-ico' />
            <p className="sidebar__nav-link">Рецепты</p>
         </NavLink>
         <NavLink to='/favorite' className='sidebar__nav-item'>
            <BsHeart className='sidebar__nav-ico' />
            <p className="sidebar__nav-link">Избранное</p>
         </NavLink>
         <NavLink to='/settings' className='sidebar__nav-item'>
            <RiSettings4Line className='sidebar__nav-ico' />
            <p className="sidebar__nav-link">Настройки</p>
         </NavLink>
      </nav>
   )
}
