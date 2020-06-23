import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/Header'
import Footer from './components/footer/footer'
import Home from './pages/home/Home'

import './main.css'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))

if (module.hot) {
  module.hot.accept()
}
