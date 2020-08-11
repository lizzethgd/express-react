import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Spinner = props => {
  return (
    <>
      <Header />
        <div className='main-wrapper'>
          <h1>Loading.</h1>
        </div>
      <Footer />
    </> 
  )
}

Spinner.propTypes = {}

export default Spinner
