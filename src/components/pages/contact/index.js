import React, { useState, useEffect, useRef } from 'react'
import InputBox from 'components/common/formElements/inputBox'

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

  const [emailErrorMessage, setEmailErrorMessage] = useState('')

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
    const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
    if (values.name !== perviousName)
      values.name === '' ? setNameError(true) : setNameError(false)
    if (values.email !== previousEmail){
      if (values.email === '') {
        setEmailError(true)
        setEmailErrorMessage('Email is Empty.')
      } else {
        if(!emailPattern.test(values.email)) {
          setEmailError(true)
          setEmailErrorMessage('Email is not Valid.')
        } else setEmailError(false)
      }
    } 
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
          <InputBox
            label="Name"
            name="txtName"
            placeholder="Enter the Full Name"
            getValue={getName}
            isError={nameError}
            errorMessage="Name is Empty"
          />
          <InputBox
            label="Email"
            name="txtEmail" 
            placeholder="Enter the Email Address" 
            getValue={getEmail}
            isError={emailError}
            errorMessage={emailErrorMessage}
          />
          <InputBox label="Message" name="txtMessage" placeholder="Enter the Message" />

          <div  className="input-container">
            <button className="form-button">Submit Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact