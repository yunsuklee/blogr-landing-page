import React from 'react'
import Logo from '../assets/Logo'

const Footer = () => {
  return (
    <footer className='d-flex w-100'>
      <div>
        <Logo />
      </div>
      <div>
        <h5>Product</h5>
        <ul>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
      </div>
      <div>
        <h5>Company</h5>
        <ul>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <h5>Connect</h5>
        <ul>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>Linkedin</li>
        </ul>
      </div>
    </footer>
  )
}


export default Footer