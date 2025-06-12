import { useState } from 'react'
import { Route ,Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Navigation from './components/Navigation/Navigation'

function App() {
  

  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
    </Routes>
    </>
  )
}

export default App
