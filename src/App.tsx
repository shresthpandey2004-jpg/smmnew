import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'

import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={
            isLoggedIn ? <Dashboard /> : <Login setIsLoggedIn={setIsLoggedIn} />
          } />
          <Route path="/" element={
            <>
              <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <Hero />
              <Stats />
              <Services />
              <Features />
              <Testimonials />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App