import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'
import Header from 'components/common/header'

import "./styles/main.scss"

const Root = () => {
  return (
    <>
      <Header />
      <Routes/>
    </>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))