import React from 'react'
import htmlLogo from '../assets/images/html_logo.webp'
import cssLogo from '../assets/images/css_logo.png'
import jsLogo from  '../assets/images/js_logo.png'


const Home = props => {
    return (
        <div>
            <h1>Home Sweet Home</h1>
            <img src={htmlLogo} alt='' /> 
          <img src={cssLogo} alt='HTML logo' />
 <img src={jsLogo} alt='HTML logo' />
        </div>
    )
}

Home.propTypes = {

}

export default Home
