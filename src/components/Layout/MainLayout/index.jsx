import React from 'react'
import { Sidebar } from '../Sidebar'
import { Outlet } from 'react-router-dom'
import './styles.scss'
import { Header } from '../Header'

export const MainLayout = () => {
  return (
    <div className='layout'>
      <div className="layout__header">
        <Header />
      </div>
      <div className="container">
        <div className="app-content">
          <div className="layout__sidebar">
            <Sidebar />
          </div>
          <div className="layout__outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
