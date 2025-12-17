import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Zap, Shield } from 'lucide-react'

const Hero = () => {
  const platforms = [
    { name: 'Instagram', icon: '📷', color: 'from-pink-500 to-purple-600' },
    { name: 'TikTok', icon: '🎵', color: 'from-black to-red-600' },
    { name: 'YouTube', icon: '📺', color: 'from-red-500 to-red-700' },
    { name: 'Facebook', icon: '👥', color: 'from-blue-600 to-blue-800' },
    { name: 'Twitter', icon: '🐦', color: 'from-blue-400 to-blue-600' },
    { name: 'LinkedIn', icon: '💼', color: 'from-blue-700 to-blue-900' },
    { name: 'Telegram', icon: '✈️', color: 'from-blue-500 to-blue-700' },
    { name: 'WhatsApp', icon: '💬', color: 'from-green-500 to-green-700' },
  ]

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">#1 Trusted SMM Panel</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Boost Your
                <span className="block gradient-text">Social Media</span>
                <span className="block">Instantly!</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Get real followers, likes, views, and engagement across all major social platforms. 
                Fast delivery, affordable prices, and 24/7 support.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">1M+</div>
                  <div className="text-sm text-gray-600">Orders Delivered</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Safe & Secure</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/register" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Growing Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-600" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-blue-600" />
                <span>50K+ Customers</span>
              </div>
            </div>
          </div>

          {/* Right Content - Platform Grid */}
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-3xl transform rotate-6 opacity-10"></div>
            
            {/* Platform Cards */}
            <div className="relative grid grid-cols-2 gap-4 p-8">
              {platforms.map((platform, index) => (
                <div 
                  key={platform.name}
                  className={`card-hover bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${
                    index % 2 === 0 ? 'animate-float' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center text-white text-xl mb-3`}>
                    {platform.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{platform.name}</h3>
                  <p className="text-sm text-gray-600">Followers, Likes, Views</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-green-600 font-medium">✓ Instant</span>
                    <span className="text-xs text-purple-600 font-medium">From ₹1</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero