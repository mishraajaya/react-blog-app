import React from 'react'

const SignInUpModal = ({ showModal, setUserLoggedIn, userNameRef }) => {
  if (!showModal) return null

  const getUserDetails = () => {
    setUserLoggedIn(true)
  }

  return (
    <div className="modal">
      <div className="modal container">
        <label>Enter your Name</label>
        <input ref={userNameRef} type="text"></input>
        <button onClick={getUserDetails}>Sign In</button>
      </div>
    </div>
  )
}

export default SignInUpModal