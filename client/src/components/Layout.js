import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import '../assets/styles/main.css'


const Layout = ({children }) => {
    return (
        <>
        <Header />
        <main>{children}</main>
        <Footer />   
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
    children: PropTypes.node.isRequired,
    children: PropTypes.node,
}

export default Layout
