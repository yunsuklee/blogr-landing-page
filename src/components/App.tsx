import React from 'react'
import { useState, useEffect } from 'react'

import Header from './Header'

const App = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <div>
      <Header width={width} />
    </div>
  )
}

export default App