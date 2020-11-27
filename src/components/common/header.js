import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ slogan, title }) => {
  return (
    <div className="header-container">
      <h1 className="header-container__title">{title}</h1>
      {typeof(slogan) !== "undefined" && (
        <h3 className="header-container__slogan">{slogan}</h3>
      )}
    </div>
  )
}

Header.propTypes = {
  slogan: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Header