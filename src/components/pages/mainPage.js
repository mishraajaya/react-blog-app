import React, { useState, useEffect, useRef } from 'react'

const MainPage = () => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)

  const firstRender = useRef(true)

  useEffect(() => {
    console.log("useEffect Called!!!!")
    if (firstRender.current) firstRender.current = false
    else validateForm()
  }, [name])

  const validateForm = () => {
    if (name === '')
      setNameError(true)
    else
      setNameError(false)
  }

  const getName = e => {
    console.log("Value=", e.target.value)
    setName(e.target.value)
  }

  return (
    <div>
      <h2>Main Page Content Here!!!!</h2>
      <div className="form-container">
        <div>Contact Form</div>
        <div className="input-container">
          <label className="form-label">Name:</label>
          <input
            className={`form-input ${nameError && 'error'} `}
            type="text"
            placeholder="Enter the Full Name."
            onChange={getName}
          />
          {nameError && (
            <span className="errorLabel">Name is Empty.</span>
          )}
        </div>
        <div className="input-container">
          <label className="form-label">Email:</label>
          <input
            className="form-input"
            type="email"
            placeholder="Enter the Email."
          />
        </div>
        <div className="input-container">
          <label className="form-label">Message:</label>
          <textarea
            className="input-container"
            placeholder="Enter the Message."
          ></textarea>
        </div>
        <div>
          <button className="form-button">Submit Message</button>
        </div>
      </div>
    </div>
  )
}

export default MainPage