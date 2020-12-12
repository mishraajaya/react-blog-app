import React from 'react'

const InputBox = ({ errorMessage, getValue, isError, label, name, placeholder }) => {
  return (
    <div className="input-container">
      <label className="form-label">{label}</label>
      <input
        className="form-input" //{`form-input ${nameError && 'error'} `}
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={getValue}
      />
      {isError && (
        <span className="errorLabel">{errorMessage}</span>
      )}
    </div>
  )
}

export default InputBox