import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'

const headerStyle = {
  width: '100%',
  height: '500px',
  backgroundImage: `
  linear-gradient(90deg, hsla(13, 100%, 72%, 0.9), hsla(353, 100%, 62%, 0.9)),
  url("./images/bg-pattern-intro-desktop.svg")`,
  backgroundPosition: '50% 50%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: 'hsl(0, 0%, 100%)',
  borderBottomLeftRadius: '100px',
}

const Header = () => {
  return (
    <header style={ headerStyle }>
      <Navbar className='h-25' expand='xxl'>
        <Container>
          <Navbar.Brand>
            <h2 className='me-5 text-white'>Blogr</h2>
          </Navbar.Brand>
          <Nav>
            <NavDropdown title='Product' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                Frontend
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Backend
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Company' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Careers
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Connect' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Newsletter
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                Newsletter
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
        </Container>
      </Navbar>
      <Container className='d-flex flex-column justify-content-center h-50'>
        <h1 className='text-center'>A modern publishing platform</h1>
        <p className='text-center'>Grow your audience and build your online brand</p>
        <Container className='d-flex justify-content-center'>
          <Button className='white btn-lg me-3 rounded-pill'>Start for Free</Button>
          <Button className='btn-lg rounded-pill border-white'>Learn More</Button>
        </Container>
      </Container>
    </header>
  )

}

export default Header