import React, { useState } from 'react'
import { ArrowRight, Star, Clock, Shield, Zap } from 'lucide-react'

const Services = () => {
  const [activeTab, setActiveTab] = useState('instagram')

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: '📷', color: 'from-pink-500 to-purple-600' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵', color: 'from-black to-red-600' },
    { id: 'youtube', name: 'YouTube', icon: '📺', color: 'from-red-500 to-red-700' },
    { id: 'facebook', name: 'Facebook', icon: '👥', color: 'from-blue-600 to-blue-800' },
    { id: 'twitter', name: 'Twitter', icon: '🐦', color: 'from-blue-400 to-blue-600' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼', color: 'from-blue-700 to-blue-900' },
    { id: 'telegram', name: 'Telegram', icon: '✈️', color: 'from-blue-500 to-blue-700' },
    { id: 'whatsapp', name: 'WhatsApp', icon: '💬', color: 'from-green-500 to-green-700' },
  ]

  const services = {
    instagram: [
      { name: 'Instagram Followers', price: '₹2', unit: '100', speed: 'Instant', quality: 'High', retention: '365 days' },
      { name: 'Instagram Likes', price: '₹1', unit: '100', speed: '1-6 hours', quality: 'Premium', retention: '90 days' },
      { name: 'Instagram Views', price: '₹0.5', unit: '1000', speed: 'Instant', quality: 'High', retention: '30 days' },
      { name: 'Instagram Comments', price: '₹10', unit: '10', speed: '1-24 hours', quality: 'Custom', retention: '365 days' },
      { name: 'Instagram Story Views', price: '₹2', unit: '1000', speed: 'Instant', quality: 'High', retention: '7 days' },
      { name: 'Instagram Reel Views', price: '₹1', unit: '1000', speed: 'Instant', quality: 'Premium', retention: '30 days' },
    ],
    tiktok: [
      { name: 'TikTok Followers', price: '₹5', unit: '100', speed: '1-6 hours', quality: 'High', retention: '365 days' },
      { name: 'TikTok Likes', price: '₹2', unit: '1000', speed: 'Instant', quality: 'Premium', retention: '90 days' },
      { name: 'TikTok Views', price: '₹0.3', unit: '1000', speed: 'Instant', quality: 'High', retention: '30 days' },
      { name: 'TikTok Comments', price: '₹15', unit: '10', speed: '1-24 hours', quality: 'Custom', retention: '365 days' },
      { name: 'TikTok Shares', price: '₹3', unit: '100', speed: '1-6 hours', quality: 'High', retention: '90 days' },
    ],
    youtube: [
      { name: 'YouTube Subscribers', price: '₹25', unit: '100', speed: '1-24 hours', quality: 'Real', retention: '365 days' },
      { name: 'YouTube Views', price: '₹5', unit: '1000', speed: '1-6 hours', quality: 'High Retention', retention: '365 days' },
      { name: 'YouTube Likes', price: '₹8', unit: '100', speed: '1-6 hours', quality: 'Premium', retention: '365 days' },
      { name: 'YouTube Comments', price: '₹20', unit: '10', speed: '1-24 hours', quality: 'Custom', retention: '365 days' },
      { name: 'YouTube Watch Time', price: '₹30', unit: '100 hours', speed: '1-7 days', quality: 'Real', retention: '365 days' },
    ],
    facebook: [
      { name: 'Facebook Page Likes', price: '₹4', unit: '100', speed: '1-6 hours', quality: 'High', retention: '365 days' },
      { name: 'Facebook Post Likes', price: '₹2', unit: '100', speed: 'Instant', quality: 'Premium', retention: '90 days' },
      { name: 'Facebook Video Views', price: '₹1', unit: '1000', speed: 'Instant', quality: 'High', retention: '30 days' },
      { name: 'Facebook Comments', price: '₹12', unit: '10', speed: '1-24 hours', quality: 'Custom', retention: '365 days' },
      { name: 'Facebook Shares', price: '₹5', unit: '100', speed: '1-6 hours', quality: 'High', retention: '90 days' },
    ],
    twitter: [
      { name: 'Twitter Followers', price: '₹8', unit: '100', speed: '1-6 hours', quality: 'Active', retention: '365 days' },
      { name: 'Twitter Likes', price: '₹3', unit: '100', speed: 'Instant', quality: 'Premium', retention: '90 days' },
      { name: 'Twitter Retweets', price: '₹5', unit: '100', speed: '1-6 hours', quality: 'High', retention: '90 days' },
      { name: 'Twitter Comments', price: '₹15', unit: '10', speed: '1-24 hours', quality: 'Custom', retention: '365 days' },
    ],
    linkedin: [
      { name: 'LinkedIn Connections', price: '₹20', unit: '100', speed: '1-24 hours', quality: 'Professional', retention: '365 days' },
      { name: 'LinkedIn Post Likes', price: '₹8', unit: '100', speed: '1-6 hours', quality: 'Premium', retention: '90 days' },
      { name: 'LinkedIn Company Followers', price: '₹15', unit: '100', speed: '1-24 hours', quality: 'High', retention: '365 days' },
      { name: 'LinkedIn Post Views', price: '₹3', unit: '1000', speed: 'Instant', quality: 'High', retention: '30 days' },
    ],
    telegram: [
      { name: 'Telegram Members', price: '₹12', unit: '100', speed: '1-6 hours', quality: 'Real', retention: '365 days' },
      { name: 'Telegram Post Views', price: '₹2', unit: '1000', speed: 'Instant', quality: 'High', retention: '30 days' },
      { name: 'Telegram Reactions', price: '₹3', unit: '100', speed: '1-6 hours', quality: 'Premium', retention: '90 days' },
    ],
    whatsapp: [
      { name: 'WhatsApp Group Members', price: '₹15', unit: '100', speed: '1-24 hours', quality: 'Real', retention: '365 days' },
      { name: 'WhatsApp Status Views', price: '₹4', unit: '1000', speed: 'Instant', quality: 'High', retention: '7 days' },
    ],
  }

  const getQualityColor = (quality: string) => {
    switch (quality.toLowerCase()) {
      case 'high': case 'real': case 'professional': return 'text-green-600 bg-green-100'
      case 'premium': case 'active': return 'text-purple-600 bg-purple-100'
      case 'custom': return 'text-blue-600 bg-blue-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getSpeedColor = (speed: string) => {
    if (speed.includes('Instant')) return 'text-green-600 bg-green-100'
    if (speed.includes('1-6')) return 'text-blue-600 bg-blue-100'
    return 'text-orange-600 bg-orange-100'
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of social media marketing services across all major platforms. 
            High quality, fast delivery, and competitive prices guaranteed.
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setActiveTab(platform.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === platform.id
                  ? 'bg-white text-purple-600 shadow-lg border-2 border-purple-200'
                  : 'bg-white/50 text-gray-600 hover:bg-white hover:text-purple-600 border border-gray-200'
              }`}
            >
              <span className="text-lg">{platform.icon}</span>
              <span>{platform.name}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services[activeTab as keyof typeof services]?.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                    <span className="text-sm text-gray-500">per {service.unit}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600">4.9</span>
                </div>
              </div>

              {/* Service Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Speed</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSpeedColor(service.speed)}`}>
                    {service.speed}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Quality</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getQualityColor(service.quality)}`}>
                    {service.quality}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Refill</span>
                  </div>
                  <span className="text-xs text-green-600 font-medium">{service.retention}</span>
                </div>
              </div>

              {/* Order Button */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all transform group-hover:scale-105 flex items-center justify-center space-x-2">
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Looking for bulk orders or custom services? Contact our team for personalized pricing and packages tailored to your needs.
            </p>
            <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
              Contact Sales Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services