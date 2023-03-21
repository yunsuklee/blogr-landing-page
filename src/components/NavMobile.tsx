import React from 'react'
import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'

import ArrowIconDark from '../assets/ArrowIconDark'

const navProductTitle = (<p>Product <ArrowIconDark /></p>)
const navCompanyTitle = (<p>Company <ArrowIconDark /></p>)
const navConnectTitle = (<p>Connect <ArrowIconDark /></p>)

const NavMobile = () => {
  return (
    <>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav>
          <NavDropdown title={navProductTitle} id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>
              Frontend
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Backend
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={navCompanyTitle} id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>
              About Us
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Careers
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={navConnectTitle} id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>
              Contact
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Newsletter
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>
              LinkedIn
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown.Divider />
          <Button className='btn-lg mx-auto rounded-pill'>
            Login
          </Button>
          <Button className='btn-lg mx-auto rounded-pill'>
            Sign Up
          </Button>
        </Nav>
      </Navbar.Collapse>
    </>
  )
}

export default NavMobile