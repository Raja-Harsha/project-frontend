import { Link } from 'react-router-dom'
import { Nav,Navbar,NavLink } from 'react-bootstrap'
import React from 'react'
import "./nav.css"
import logo from "./img/bulb.png"
export default function Navigation() {
    return (
      <div>
         <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll"/>
      <Navbar.Collapse id="navbarScrool">
        <Nav className='nav'>
           <NavLink className='head'><img src={logo} width={150} alt=""/></NavLink> 
          <NavLink className='head' eventKey="1" as={Link} to="/">Home</NavLink>
          <NavLink className='head' eventKey="2" as={Link} to="/category">Category</NavLink>
          <NavLink className='head' eventKey="3" as={Link} to="/signin">Sign In</NavLink>
          <NavLink className='head' eventKey="15" as={Link} to="/signup">Signup</NavLink>

        </Nav>
      </Navbar.Collapse>
     </Navbar>
      </div>
    )
}
