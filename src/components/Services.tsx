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
      { name: 'Instagram Followers', description: 'Grow your Instagram following with real, active users', speed: 'Instant', quality: 'High Quality', retention: '365 days refill', features: ['Real Users', 'No Password Required', 'Instant Start'] },
      { name: 'Instagram Likes', description: 'Boost engagement with authentic likes from real accounts', speed: '1-6 hours', quality: 'Premium', retention: '90 days refill', features: ['Organic Growth', 'Safe & Secure', 'High Retention'] },
      { name: 'Instagram Views', description: 'Increase video visibility with high-quality views', speed: 'Instant', quality: 'High Quality', retention: '30 days refill', features: ['Fast Delivery', 'Real Views', 'Boost Algorithm'] },
      { name: 'Instagram Comments', description: 'Get custom, meaningful comments from real users', speed: '1-24 hours', quality: 'Custom', retention: '365 days refill', features: ['Custom Comments', 'Real Users', 'Meaningful Engagement'] },
      { name: 'Instagram Story Views', description: 'Increase story visibility and reach more audience', speed: 'Instant', quality: 'High Quality', retention: '7 days refill', features: ['Instant Delivery', 'Real Accounts', 'Boost Reach'] },
      { name: 'Instagram Reel Views', description: 'Viral your reels with massive view counts', speed: 'Instant', quality: 'Premium', retention: '30 days refill', features: ['Viral Potential', 'Algorithm Boost', 'Fast Results'] },
    ],
    tiktok: [
      { name: 'TikTok Followers', description: 'Build your TikTok community with active followers', speed: '1-6 hours', quality: 'High Quality', retention: '365 days refill', features: ['Active Users', 'Profile Growth', 'Long-term Results'] },
      { name: 'TikTok Likes', description: 'Boost video engagement with authentic likes', speed: 'Instant', quality: 'Premium', retention: '90 days refill', features: ['Instant Boost', 'Real Engagement', 'Viral Potential'] },
      { name: 'TikTok Views', description: 'Increase video reach with high-quality views', speed: 'Instant', quality: 'High Quality', retention: '30 days refill', features: ['Massive Reach', 'Algorithm Boost', 'Fast Delivery'] },
      { name: 'TikTok Comments', description: 'Get engaging comments to boost interaction', speed: '1-24 hours', quality: 'Custom', retention: '365 days refill', features: ['Custom Comments', 'Real Interaction', 'Boost Engagement'] },
      { name: 'TikTok Shares', description: 'Increase content virality with more shares', speed: '1-6 hours', quality: 'High Quality', retention: '90 days refill', features: ['Viral Growth', 'Organic Spread', 'Real Shares'] },
    ],
    youtube: [
      { name: 'YouTube Subscribers', description: 'Grow your channel with real, active subscribers', speed: '1-24 hours', quality: 'Real Users', retention: '365 days refill', features: ['Real Subscribers', 'Channel Growth', 'Monetization Ready'] },
      { name: 'YouTube Views', description: 'Boost video performance with high-retention views', speed: '1-6 hours', quality: 'High Retention', retention: '365 days refill', features: ['High Retention', 'Algorithm Boost', 'Monetization Friendly'] },
      { name: 'YouTube Likes', description: 'Increase video engagement with authentic likes', speed: '1-6 hours', quality: 'Premium', retention: '365 days refill', features: ['Real Likes', 'Boost Ranking', 'Safe & Secure'] },
      { name: 'YouTube Comments', description: 'Get meaningful comments to boost engagement', speed: '1-24 hours', quality: 'Custom', retention: '365 days refill', features: ['Custom Comments', 'Real Users', 'Boost Interaction'] },
      { name: 'YouTube Watch Time', description: 'Increase watch hours for monetization eligibility', speed: '1-7 days', quality: 'Real Users', retention: '365 days refill', features: ['Monetization Ready', 'Real Watch Time', 'Safe Delivery'] },
    ],
    facebook: [
      { name: 'Facebook Page Likes', description: 'Grow your business page with targeted likes', speed: '1-6 hours', quality: 'High Quality', retention: '365 days refill', features: ['Business Growth', 'Targeted Audience', 'Real Users'] },
      { name: 'Facebook Post Likes', description: 'Boost post engagement with authentic reactions', speed: 'Instant', quality: 'Premium', retention: '90 days refill', features: ['Instant Boost', 'Real Engagement', 'Organic Growth'] },
      { name: 'Facebook Video Views', description: 'Increase video reach and engagement', speed: 'Instant', quality: 'High Quality', retention: '30 days refill', features: ['Massive Reach', 'Real Views', 'Algorithm Boost'] },
      { name: 'Facebook Comments', description: 'Get meaningful comments on your posts', speed: '1-24 hours', quality: 'Custom', retention: '365 days refill', features: ['Custom Comments', 'Real Interaction', 'Boost Engagement'] },
      { name: 'Facebook Shares', description: 'Increase content virality with more shares', speed: '1-6 hours', quality: 'High Quality', retention: '90 days refill', features: ['Viral Potential', 'Organic Spread', 'Real Shares'] },
    ],
    twitter: [
      { name: 'Twitter Followers', description: 'Build your Twitter community with active followers', speed: '1-6 hours', quality: 'Active Users', retention: '365 days refill', features: ['Active Users', 'Profile Growth', 'Real Engagement'] },
      { name: 'Twitter Likes', description: 'Boost tweet engagement with authentic likes', speed: 'Instant', quality: 'Premium', retention: '90 days refill', features: ['Instant Boost', 'Real Likes', 'Trend Potential'] },
      { name: 'Twitter Retweets', description: 'Increase tweet reach with more retweets', speed: '1-6 hours', quality: 'High Quality', retention: '90 days refill', features: ['Viral Potential', 'Organic Spread', 'Real Retweets'] },
      { name: 'Twitter Comments', description: 'Get engaging replies to boost interaction', speed: '1-24 hours', quality: 'Custom', retention: '365 days refill', features: ['Custom Replies', 'Real Interaction', 'Boost Engagement'] },
    ],
    linkedin: [
      { name: 'LinkedIn Connections', description: 'Expand your professional network', speed: '1-24 hours', quality: 'Professional', retention: '365 days refill', features: ['Professional Network', 'Industry Relevant', 'Career Growth'] },
      { name: 'LinkedIn Post Likes', description: 'Boost professional content engagement', speed: '1-6 hours', quality: 'Premium', retention: '90 days refill', features: ['Professional Boost', 'Industry Recognition', 'Real Engagement'] },
      { name: 'LinkedIn Company Followers', description: 'Grow your business page following', speed: '1-24 hours', quality: 'High Quality', retention: '365 days refill', features: ['Business Growth', 'Professional Audience', 'Brand Authority'] },
      { name: 'LinkedIn Post Views', description: 'Increase content visibility and reach', speed: 'Instant', quality: 'High Quality', retention: '30 days refill', features: ['Professional Reach', 'Industry Visibility', 'Content Boost'] },
    ],
    telegram: [
      { name: 'Telegram Members', description: 'Grow your channel/group with active members', speed: '1-6 hours', quality: 'Real Users', retention: '365 days refill', features: ['Active Members', 'Real Users', 'Community Growth'] },
      { name: 'Telegram Post Views', description: 'Increase post visibility and engagement', speed: 'Instant', quality: 'High Quality', retention: '30 days refill', features: ['Instant Views', 'Real Engagement', 'Content Boost'] },
      { name: 'Telegram Reactions', description: 'Boost post engagement with reactions', speed: '1-6 hours', quality: 'Premium', retention: '90 days refill', features: ['Real Reactions', 'Boost Engagement', 'Community Interaction'] },
    ],
    whatsapp: [
      { name: 'WhatsApp Group Members', description: 'Grow your WhatsApp groups with real users', speed: '1-24 hours', quality: 'Real Users', retention: '365 days refill', features: ['Real Users', 'Active Members', 'Group Growth'] },
      { name: 'WhatsApp Status Views', description: 'Increase status visibility and reach', speed: 'Instant', quality: 'High Quality', retention: '7 days refill', features: ['Instant Views', 'Real Accounts', 'Status Boost'] },
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
            Comprehensive <span className="gradient-text">SMM Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Boost your social media presence across all major platforms with our premium services. 
            From followers and likes to views and engagement - we've got everything you need to grow your online presence.
          </p>
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">100% Safe & Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Instant Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">Premium Quality</span>
            </div>
          </div>
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
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">4.9</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Service Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Delivery Speed</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSpeedColor(service.speed)}`}>
                    {service.speed}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Quality Type</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getQualityColor(service.quality)}`}>
                    {service.quality}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Guarantee</span>
                  </div>
                  <span className="text-xs text-green-600 font-medium">{service.retention}</span>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full border border-purple-200">
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Order Button */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all transform group-hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                <span>Get Started</span>
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