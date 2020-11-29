import React from 'react'

const SignInUpModal = ({ showModal, setUserLoggedIn }) => {
  if (!showModal) return null

  const getUserDetails = () => {
    setUserLoggedIn(true)
  }

  return (
    <div>
      <div>
        <label>Enter your Name</label>
        <input type="text"></input>
        <button onClick={getUserDetails}>Sign In</button>
      </div>
    </div>
  )
}

export default SignInUpModal