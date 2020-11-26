import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ slogan, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {typeof(slogan) !== "undefined" && (
        <h3>{slogan}</h3>
      )}
    </div>
  )
}

Header.propTypes = {
  slogan: PropTypes.string,
  title: PropTypes.string
}

export default Header