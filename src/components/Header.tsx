import React from 'react'
import { Container, Navbar, Button } from 'react-bootstrap'

import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

interface Props {
  width: number
}

const Header = ({ width }: Props) => {
  const Nav = () => {
    if (width < 1440) {
      return (
        <NavMobile />
      )
    } else {
      return (
        <NavDesktop />
      )
    }
  }

  const headerStyle = {
    width: '100%',
    height: '500px',
    backgroundImage: `
    linear-gradient(to right, hsla(13, 100%, 72%, 0.9), hsla(365, 100%, 64%, 0.9)),
    url("./images/bg-pattern-intro-desktop.svg")`,
    backgroundPosition: '35% 52%',
    backgroundRepeat: 'no-repeat',
    color: 'hsl(0, 0%, 100%)',
    borderBottomLeftRadius: '100px',
  }

  return (
    <header style={ headerStyle }>
      <Navbar className='h-25' expand='xxl'>
        <Container className='px-5'>
          <Navbar.Brand>
            <h2 className='me-5 text-white'>Blogr</h2>
          </Navbar.Brand>
          <Nav />
        </Container>
      </Navbar>
      <Container className='d-flex flex-column justify-content-center h-50'>
        <h1 className='text-center'>A modern publishing platform</h1>
        <p className='text-center mt-3'>Grow your audience and build your online brand</p>
        <Container className='mt-5 d-flex justify-content-center'>
          <Button className='white btn-lg me-3 rounded-pill'>Start for Free</Button>
          <Button className='btn-lg rounded-pill border-white'>Learn More</Button>
        </Container>
      </Container>
    </header>
  )
}

export default Header