import React from 'react'
import { Target, CreditCard, TrendingUp, Shield, Clock, Award } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Service',
      description: 'Select your platform and the service you need from our comprehensive list.',
      icon: Target,
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '02',
      title: 'Place Order',
      description: 'Enter your link, choose quantity, and complete the secure payment process.',
      icon: CreditCard,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '03',
      title: 'Watch Growth',
      description: 'Sit back and watch your social media metrics grow with our fast delivery.',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600'
    }
  ]

  const trustFeatures = [
    {
      icon: Shield,
      title: 'SSL Secured',
      description: 'Your data is protected with industry-standard encryption'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your needs'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'Premium services with money-back guarantee'
    },
    {
      icon: Target,
      title: 'Targeted Growth',
      description: 'Real engagement from your target audience'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in just 3 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform translate-x-1/2 z-0"></div>
                )}
                
                {/* Step Card */}
                <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 z-10">
                  {/* Step Number */}
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 text-gray-400">
                    <IconComponent className="w-full h-full" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted & Certified
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your security and privacy are our top priorities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-md">
                    <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Boost Your Social Media?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have grown their social media presence with our premium services.
            </p>
            <a 
              href="/register"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started Today
              <TrendingUp className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks