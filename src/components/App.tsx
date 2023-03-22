import React from 'react'
import { useState, useEffect } from 'react'

import Header from './Header'
import BodyDesktop from './BodyDesktop'
import BodyMobile from './BodyMobile'
import Footer from './Footer'

const App = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  const Body = () => {
    if (width > 1440) {
      return <BodyDesktop />
    } else {
      return <BodyMobile />
    }
  }

  return (
    <div>
      <Header width={width} />
      <Body />
      <Footer />
    </div>
  )
}

export default App