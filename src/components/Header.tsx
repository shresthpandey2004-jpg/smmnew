import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Zap, User, LogOut } from 'lucide-react'

interface HeaderProps {
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  // Dashboard restored - recent orders removed only
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('user')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">SocialBoost Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">Customers</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors">How It Works</a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/dashboard" 
                  className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">Customers</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors">How It Works</a>
              
              {isLoggedIn ? (
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <Link 
                    to="/dashboard" 
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    <span>Dashboard</span>
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <Link 
                    to="/login" 
                    className="text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all text-center"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header