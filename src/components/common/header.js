import React, { useState, useRef } from 'react'
import SignInUpModal from 'components/common/header/signInUpModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const menuItems = ['Home', 'Profile', 'About', 'Blog', 'Image Gallery', 'Contact Us']
  
  const [showModal, setShowModal] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const userNameRef = useRef(null)

  const renderMenuItems = (menuItem, index) => {
    return <a href="#" className="header-root menuItem" key={index}>{menuItem}</a>
  }

  const toggleLoginModal = () => {
    setShowModal(!showModal)
  }
  
  return (
    <div className="header-root">
      <div className="header-root top-nav-bar">
        <button className="button header-root__top-button">Subscribe</button>
        <h2 className="page-title">My React Blog Site</h2>
        <FontAwesomeIcon icon={faSearch} />
        {userLoggedIn ? (
          <div>Welcome, {userNameRef.current.value}</div>
        ) : (
          <button
            className="button header-root__top-button outline"
            onClick={toggleLoginModal}
          >
            SignIn / SignUp
          </button>
        )}
      </div>
      <div className="header-root menu-nav-bar">
        {menuItems.map(renderMenuItems)}
      </div>
      <SignInUpModal
        showModal={showModal}
        setUserLoggedIn={setUserLoggedIn}
        userNameRef={userNameRef}
      />
    </div>
  )
}

export default Header