import React, { useState, useRef } from 'react'
import SignInUpModal from 'components/common/header/signInUpModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const menuItems = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'Profile',
      path: '/profile'
    },
    {
      label: 'About',
      path: '/about'
    },
    {
      label: 'Blog',
      path: '/blog'
    },
    {
      label: 'Image Gallery',
      path: '/images'
    },
    {
      label: 'Contact Us',
      path: '/contact'
    }
  ]
  
  const [showModal, setShowModal] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const userNameRef = useRef(null)

  const renderMenuItems = (menuItem, index) => {
    return <a href={menuItem.path} className="header-root menuItem" key={index}>{menuItem.label}</a>
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