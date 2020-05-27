import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import '../assets/styles/main.css'


class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.wrapper = React.createRef(); 
     }
     render(){
    return (
        <>
        <Header />
        <main ref={this.wrapper}>{this.props.children}</main>
        <Footer />   
        </>
    )
}
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
