import React from 'react'
import "./styles.scss"

export const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__inner">
          <img className='header__logo' src="./images/logo.svg" alt="My recipes" />
          <p>Profile-ico + poup</p>
        </div>
      </div>
    </header>
  )
}
