import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Fashion Influencer',
      avatar: '👩‍💼',
      rating: 5,
      text: 'SocialBoost Pro helped me grow my Instagram from 5K to 50K followers in just 3 months! The quality is amazing and the support team is super helpful.',
      platform: 'Instagram',
      growth: '+45K Followers'
    },
    {
      name: 'Rahul Gupta',
      role: 'YouTuber',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Best SMM panel I\'ve ever used! Got 100K YouTube views for my latest video and the retention rate is incredible. Highly recommended!',
      platform: 'YouTube',
      growth: '+100K Views'
    },
    {
      name: 'Sneha Patel',
      role: 'Business Owner',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Our Facebook page engagement increased by 300% after using their services. Great for business growth and very affordable pricing.',
      platform: 'Facebook',
      growth: '+300% Engagement'
    },
    {
      name: 'Arjun Singh',
      role: 'TikTok Creator',
      avatar: '👨‍🎨',
      rating: 5,
      text: 'Amazing service! My TikTok videos started going viral after getting their likes and views. The delivery is super fast and reliable.',
      platform: 'TikTok',
      growth: '+2M Views'
    },
    {
      name: 'Kavya Reddy',
      role: 'Digital Marketer',
      avatar: '👩‍💻',
      rating: 5,
      text: 'I manage multiple client accounts and SocialBoost Pro is my go-to panel. Consistent quality, great prices, and excellent customer service.',
      platform: 'Multi-Platform',
      growth: '10+ Clients'
    },
    {
      name: 'Vikram Joshi',
      role: 'Startup Founder',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Helped us establish credibility on LinkedIn and Twitter. Our startup\'s social presence looks professional now. Worth every rupee!',
      platform: 'LinkedIn',
      growth: '+5K Connections'
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
      />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied customers 
            have to say about their experience with SocialBoost Pro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-8 h-8 text-purple-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white text-xl">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>

              {/* Platform & Growth Badge */}
              <div className="mt-4 flex items-center justify-between">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                  {testimonial.platform}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  {testimonial.growth}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-2">
                {renderStars(5)}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1M+</div>
              <div className="text-gray-600">Orders Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Them?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto text-lg">
              Start your social media growth journey today and see why thousands of customers trust SocialBoost Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                Start Growing Now
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-purple-600 transition-colors">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials