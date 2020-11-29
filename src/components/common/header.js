import React, { useState } from 'react'
import SignInUpModal from '../common/header/signInUpModal'

const Header = () => {
  const menuItems = ['Home', 'Profile', 'About', 'Blog', 'Image Gallery', 'Contact Us']
  
  const [showModal, setShowModal] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const renderMenuItems = (menuItem, index) => {
    return <a href="#" className="menuItem" key={index}>{menuItem}</a>
  }

  const toggleLoginModal = () => {
    setShowModal(!showModal)
  }
  
  return (
    <div className="header-root">
      <div className="header-root top-nav-bar">
        <button>Subscribe</button>
        <h2>My React Blog Site</h2>
        <button>Search</button>
        {userLoggedIn ? (
          <div>Welcome</div>
        ) : (
          <button onClick={toggleLoginModal}>SignIn / SignUp</button>
        )}
      </div>
      <div className="header-root menu-nav-bar">
        {menuItems.map(renderMenuItems)}
      </div>
      <SignInUpModal showModal={showModal} setUserLoggedIn={setUserLoggedIn} />
    </div>
  )
}

export default Header