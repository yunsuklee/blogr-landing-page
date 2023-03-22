import React from 'react'
import { Button, Container, Nav, NavDropdown } from 'react-bootstrap'

import ArrowIcon from '../assets/ArrowIcon'

const NavDesktop = () => {
  const navProductTitle = (<p>Product <ArrowIcon /></p>)
  const navCompanyTitle = (<p>Company <ArrowIcon /></p>)
  const navConnectTitle = (<p>Connect <ArrowIcon /></p>)

  return (
    <>
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
      </Nav>
      <Container className='d-flex flex-row-reverse align-items-end'>
        <Button className='white btn-lg rounded-pill'>
          Sign Up
        </Button>
        <Button className='btn-lg me-3 rounded-pill'>
          Login
        </Button>
      </Container>
    </>
  )
}

export default NavDesktop