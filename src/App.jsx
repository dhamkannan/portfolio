import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Router basename="/portfolio">
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
