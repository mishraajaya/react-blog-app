import React, { useState, useEffect, useRef } from 'react'

const Contact = () => {
  const [values, setValues] = useState(
    {
      name: '',
      email: '',
      feedback: ''
    }
  )

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const firstRender = useRef(true)

  const usePrevious = value => {
    const ref = useRef()
    useEffect(() => {
      ref.current = value
    })
    return ref.current
  }

  const perviousName = usePrevious(values.name)
  const previousEmail = usePrevious(values.email)

  useEffect(() => {
    if (firstRender.current) firstRender.current = false
    else validateForm()
  }, [values])

  const validateForm = () => {
    if (values.name !== perviousName)
      values.name === '' ? setNameError(true) : setNameError(false)
    if (values.email !== previousEmail)
      values.email === '' ? setEmailError(true) : setEmailError(false)
  }

  const getName = e => {
    setValues({...values, name: e.target.value})
  }


  const getEmail = e => {
    setValues({...values, email: e.target.value})
  }

  return (
    <div className="page-container">
      <div className="contact-section">
        <div className="form-container">
          <div className="title-container">
            <div className="title-container label">Contact Form</div>
          </div>
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
              className={`form-input ${emailError && 'error'} `}
              type="email"
              placeholder="Enter the Email."
              onChange={getEmail}
            />
            {emailError && (
              <span className="errorLabel">Email is Empty.</span>
            )}
          </div>
          <div className="input-container">
            <label className="form-label">Message:</label>
            <textarea
              className="input-container"
              placeholder="Enter the Message."
            ></textarea>
          </div>
          <div  className="input-container">
            <button className="form-button">Submit Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact