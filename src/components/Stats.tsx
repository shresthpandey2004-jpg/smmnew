import React from 'react'
import { Users, Zap, Shield, Award } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: '1,000,000+',
      label: 'Orders Completed',
      description: 'Successfully delivered across all platforms',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      number: '50,000+',
      label: 'Happy Customers',
      description: 'Trusted by businesses worldwide',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      number: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable service you can count on',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      number: '24/7',
      label: 'Customer Support',
      description: 'Always here to help you succeed',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the growing community of satisfied customers who have boosted their social media presence with our services.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div 
                key={index}
                className="relative group"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Card Content */}
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-blue-50 px-6 py-3 rounded-full border border-purple-200">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                +
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Join 50,000+ satisfied customers
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats