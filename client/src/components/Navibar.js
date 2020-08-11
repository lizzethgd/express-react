import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import reactLogo from '../assets/images/logo.svg'

const Navibar = props => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
             
      <NavLink className="navbar-brand" to="/">
          <img
          alt=""
          src={reactLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          />
          {' '}
          MERN NotesApp
      </NavLink>
     
     
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
              <NavLink className="navlink" to="/">Home</NavLink>
              <NavLink className="navlink" to="/about">About</NavLink>
              <NavLink className="navlink" to="/contact">Contact</NavLink>
              <NavLink className="navlink" to="/students">Students</NavLink>
              <NavLink className="navlink" to="/students/add">Add</NavLink>
              <Nav.Link href="http://localhost:3500/api/v.1.0/students">API</Nav.Link>
          </Nav>
      </Navbar.Collapse>
      
</Navbar>
    )
}

Navibar.propTypes = {

}

export default Navibar
