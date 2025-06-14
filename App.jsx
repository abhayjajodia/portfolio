import { useState } from 'react'
import { Route ,Router, Routes } from 'react-router-dom'
import HomePage from './src/pages/HomePage/HomePage'
import Navigation from './src/components/Navigation/Navigation'


function App() { 

  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="portfolio/" element={<HomePage/>} />
      <Route path="portfolio/about" element={<h1>About</h1>} />
      <Route path="portfolio/contact" element={<h1>Contact</h1>} />
    </Routes>
    </>
  )
}
export default App
