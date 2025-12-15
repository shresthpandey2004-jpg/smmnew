import React from 'react'
import { Shield, Zap, Users, Clock, CreditCard, Headphones, RefreshCw, Award } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Instant Delivery',
      description: 'Most services start within minutes of placing your order. No waiting around.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: '100% Safe & Secure',
      description: 'All our services are completely safe and comply with platform guidelines.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Real & Active Users',
      description: 'Get engagement from real, active users - not bots or fake accounts.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our customer support team is available round the clock to help you.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Multiple payment options including UPI, cards, and crypto. All transactions secured.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: RefreshCw,
      title: 'Refill Guarantee',
      description: 'If your numbers drop, we\'ll refill them for free within the guarantee period.',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'High-quality services with excellent retention rates and natural delivery.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Headphones,
      title: 'Expert Guidance',
      description: 'Get personalized recommendations and strategies from our social media experts.',
      color: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="gradient-text">SocialBoost Pro</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another SMM panel. We're your trusted partner in social media growth, 
            offering premium services with unmatched quality and support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Card Content */}
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How It <span className="gradient-text">Works</span>
            </h3>
            <p className="text-lg text-gray-600">
              Get started in just 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Service',
                description: 'Select your platform and the service you need from our comprehensive list.',
                icon: '🎯'
              },
              {
                step: '02',
                title: 'Place Order',
                description: 'Enter your link, choose quantity, and complete the secure payment process.',
                icon: '💳'
              },
              {
                step: '03',
                title: 'Watch Growth',
                description: 'Sit back and watch your social media metrics grow with our fast delivery.',
                icon: '📈'
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 z-0"></div>
                )}
                
                {/* Process Card */}
                <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 text-center border border-purple-100 z-10">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full mb-4">
                    {process.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4">{process.icon}</div>
                  
                  {/* Title */}
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {process.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-600">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted & Certified</h3>
            <p className="text-gray-600">Your security and privacy are our top priorities</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'SSL Secured', icon: '🔒' },
              { name: 'GDPR Compliant', icon: '🛡️' },
              { name: 'PCI DSS', icon: '💳' },
              { name: '24/7 Monitoring', icon: '👁️' }
            ].map((badge, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{badge.icon}</div>
                <div className="text-sm font-medium text-gray-700">{badge.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features