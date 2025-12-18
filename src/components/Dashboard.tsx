import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Home, ShoppingCart, History, CreditCard, Settings, HelpCircle, 
  LogOut, Menu, X, Zap, User, Bell, Search, Plus, TrendingUp,
  Clock, CheckCircle, AlertCircle, RefreshCw
} from 'lucide-react'

const AddFundsForm = () => {
  const [amount, setAmount] = useState('')
  const [paymentId, setPaymentId] = useState('')
  const [showPaymentForm, setShowPaymentForm] = useState(false)

  const handleAmountSubmit = () => {
    const numAmount = parseInt(amount)
    if (numAmount >= 100) {
      setShowPaymentForm(true)
    } else {
      alert('Minimum payment amount is ₹100')
    }
  }

  const handlePaymentSubmit = () => {
    if (paymentId.trim()) {
      alert('Payment submitted for verification! Your amount will be added to your account after instant verification.')
      setAmount('')
      setPaymentId('')
      setShowPaymentForm(false)
    } else {
      alert('Please enter payment ID')
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Funds to Wallet</h2>
        
        {!showPaymentForm ? (
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Enter Amount (₹)</label>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Minimum ₹100"
                min="100"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              />
              <p className="text-sm text-gray-500 mt-2">Minimum payment: ₹100</p>
            </div>
            
            <button 
              onClick={handleAmountSubmit}
              disabled={!amount || parseInt(amount) < 100}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Proceed to Payment
            </button>
          </div>
        ) : (
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pay ₹{amount}</h3>
              <p className="text-gray-600">Scan QR code and pay the amount</p>
            </div>

            {/* QR Code Section */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 mb-6 text-center border border-blue-200">
              <div className="w-64 h-64 mx-auto bg-white rounded-lg border-2 border-blue-300 p-4 mb-4 shadow-lg">
                <img 
                  src="/payment-qr.jpg" 
                  alt="Payment QR Code" 
                  className="w-full h-full object-contain rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-full hidden items-center justify-center text-center">
                  <div>
                    <div className="text-4xl mb-2">💳</div>
                    <p className="text-sm text-gray-600">Paytm UPI QR</p>
                    <p className="text-xs text-gray-500">Scan to pay</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 text-sm bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-blue-600 font-bold text-lg">Paytm</span>
                  <span className="text-red-500 mx-1">❤️</span>
                  <span className="text-green-600 font-bold">UPI</span>
                </div>
                <p><strong>UPI ID:</strong> <span className="text-blue-600 font-mono">pandey.shresth@ptyes</span></p>
                <p><strong>Amount:</strong> <span className="text-green-600 font-bold">₹{amount}</span></p>
                <p className="text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full">Pay exactly ₹{amount}</p>
              </div>
            </div>

            {/* Payment Instructions */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 mb-6 border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-3 flex items-center">
                <span className="text-lg mr-2">📋</span>
                Payment Instructions:
              </h4>
              <ul className="text-sm text-blue-800 space-y-2">
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                  Scan QR code with any UPI app (Paytm, PhonePe, GPay, etc.)
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                  Pay exactly <strong>₹{amount}</strong> to <strong>pandey.shresth@ptyes</strong>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                  Copy the payment/transaction ID from your UPI app
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                  Enter the transaction ID below and submit
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                  Amount will be added to your wallet after instant verification
                </li>
              </ul>
            </div>

            {/* Payment ID Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment/Transaction ID</label>
              <input 
                type="text" 
                value={paymentId}
                onChange={(e) => setPaymentId(e.target.value)}
                placeholder="Enter your payment ID here"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">You'll get this ID after successful payment</p>
            </div>

            <div className="flex space-x-4">
              <button 
                onClick={() => setShowPaymentForm(false)}
                className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                Back
              </button>
              <button 
                onClick={handlePaymentSubmit}
                disabled={!paymentId.trim()}
                className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Payment
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Live Transactions</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 font-medium">LIVE</span>
          </div>
        </div>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">�🇳</span>
              </div>
              <div>
                <p className="font-medium text-green-800">₹2,500 Added</p>
                <p className="text-xs text-green-600">Rahul S. • Mumbai, Maharashtra</p>
              </div>
            </div>
            <span className="text-xs text-green-600 font-medium">2 min ago</span>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">��</span>
              </div>
              <div>
                <p className="font-medium text-blue-800">₹1,800 Added</p>
                <p className="text-xs text-blue-600">Priya M. • Delhi, NCR</p>
              </div>
            </div>
            <span className="text-xs text-blue-600 font-medium">5 min ago</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">🇮🇳</span>
              </div>
              <div>
                <p className="font-medium text-purple-800">₹5,000 Added</p>
                <p className="text-xs text-purple-600">Arjun K. • Bangalore, Karnataka</p>
              </div>
            </div>
            <span className="text-xs text-purple-600 font-medium">8 min ago</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-sm">��</span>
              </div>
              <div>
                <p className="font-medium text-orange-800">₹3,200 Added</p>
                <p className="text-xs text-orange-600">Sneha T. • Hyderabad, Telangana</p>
              </div>
            </div>
            <span className="text-xs text-orange-600 font-medium">12 min ago</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg border-l-4 border-pink-400">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold text-sm">�🇳</span>
              </div>
              <div>
                <p className="font-medium text-pink-800">₹1,500 Added</p>
                <p className="text-xs text-pink-600">Vikash L. • Pune, Maharashtra</p>
              </div>
            </div>
            <span className="text-xs text-pink-600 font-medium">15 min ago</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg border-l-4 border-indigo-400">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-bold text-sm">��</span>
              </div>
              <div>
                <p className="font-medium text-indigo-800">₹4,000 Added</p>
                <p className="text-xs text-indigo-600">Ankit K. • Chennai, Tamil Nadu</p>
              </div>
            </div>
            <span className="text-xs text-indigo-600 font-medium">18 min ago</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-teal-50 rounded-lg border-l-4 border-teal-400">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-bold text-sm">��</span>
              </div>
              <div>
                <p className="font-medium text-teal-800">₹2,800 Added</p>
                <p className="text-xs text-teal-600">Ravi R. • Kolkata, West Bengal</p>
              </div>
            </div>
            <span className="text-xs text-teal-600 font-medium">22 min ago</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-bold text-sm">��</span>
              </div>
              <div>
                <p className="font-medium text-yellow-800">₹3,500 Added</p>
                <p className="text-xs text-yellow-600">Neha T. • Ahmedabad, Gujarat</p>
              </div>
            </div>
            <span className="text-xs text-yellow-600 font-medium">25 min ago</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Total transactions today:</span>
            <span className="font-bold text-green-600">₹2,47,850</span>
          </div>
          <div className="flex items-center justify-between text-sm mt-1">
            <span className="text-gray-600">Active users in India:</span>
            <span className="font-bold text-blue-600">1,247 online</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const NewOrderForm = ({ addOrder }) => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [link, setLink] = useState('')
  const [quantity, setQuantity] = useState('')
  const [totalCost, setTotalCost] = useState(0)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const subcategories = {
    instagram: ['Followers', 'Likes', 'Views', 'Comments', 'Others'],
    tiktok: ['Followers', 'Likes', 'Views'],
    youtube: ['Subscribers', 'Views', 'Likes', 'Comments', 'Watch-Time', 'Others'],
    facebook: ['Followers', 'Likes', 'Views', 'Live Stream', 'Others'],
    telegram: ['Members', 'Views', 'Reactions', 'Comments'],
    twitter: ['Followers', 'Likes', 'Retweets', 'Views', 'Others']
  }

  const services = {
    instagram: {
      followers: [
        { 
          id: 7, 
          name: 'Instagram » Followers [No Refill]', 
          rate: 18.50, 
          min: 100, 
          max: 100000, 
          description: 'Instagram Followers - No Refill Guarantee',
          speed: 'Fast (1-6 hours)',
          retention: 'No Refill'
        },
        { 
          id: 8, 
          name: 'Instagram » Followers [100% Refill]', 
          rate: 28.00, 
          min: 100, 
          max: 50000, 
          description: 'Instagram Followers with 100% Refill Guarantee',
          speed: 'Fast (1-6 hours)',
          retention: '365 Days Refill'
        },
        { 
          id: 9, 
          name: 'Instagram » Followers [Lifetime]', 
          rate: 45.00, 
          min: 50, 
          max: 25000, 
          description: 'Instagram Followers - Lifetime Guarantee',
          speed: 'Slow (24-72 hours)',
          retention: 'Lifetime Refill'
        },
        { 
          id: 10, 
          name: 'Instagram » Followers [TOP QUALITY]', 
          rate: 65.00, 
          min: 25, 
          max: 15000, 
          description: 'Top Quality Instagram Followers - Premium Service',
          speed: 'Slow (24-72 hours)',
          retention: 'Lifetime Refill'
        },
        { 
          id: 11, 
          name: 'Instagram » Followers [Indians]', 
          rate: 35.00, 
          min: 50, 
          max: 20000, 
          description: 'Instagram Followers from Indian Users Only',
          speed: 'Fast (1-6 hours)',
          retention: '365 Days Refill'
        }
      ],
      likes: [
        { 
          id: 3, 
          name: 'Instagram » Likes', 
          rate: 16.50, 
          min: 50, 
          max: 100000, 
          description: 'High Quality Instagram Likes',
          speed: 'Instant',
          retention: '90 Days Refill'
        },
        { 
          id: 4, 
          name: 'Instagram » Likes [Indians]', 
          rate: 19.00, 
          min: 50, 
          max: 50000, 
          description: 'Instagram Likes from Indian Users',
          speed: 'Fast (1-6 hours)',
          retention: '90 Days Refill'
        }
      ],
      views: [
        { 
          id: 1, 
          name: 'Instagram » Real Views', 
          rate: 13.50, 
          min: 100, 
          max: 100000, 
          description: 'Real Instagram Views - High Quality',
          speed: 'Fast (0-1 hours)',
          retention: '30 Days Refill'
        },
        { 
          id: 2, 
          name: 'Instagram » Real Views [Indians]', 
          rate: 15.50, 
          min: 100, 
          max: 50000, 
          description: 'Real Instagram Views from Indian Users',
          speed: 'Fast (1-6 hours)',
          retention: '30 Days Refill'
        },
        { 
          id: 12, 
          name: 'Instagram » Story Views', 
          rate: 12.80, 
          min: 100, 
          max: 50000, 
          description: 'Instagram Story Views - High Quality',
          speed: 'Fast (0-1 hours)',
          retention: '7 Days Refill'
        }
      ],
      comments: [
        { 
          id: 13, 
          name: 'Instagram » Comments', 
          rate: 75.00, 
          min: 5, 
          max: 5000, 
          description: 'Custom Instagram Comments from Real Users',
          speed: 'Fast (1-6 hours)',
          retention: '365 Days Refill'
        }
      ],
      others: [
        { 
          id: 5, 
          name: 'Instagram » Statistics', 
          rate: 35.00, 
          min: 1, 
          max: 1000, 
          description: 'Instagram Account Statistics Analysis',
          speed: 'Instant',
          retention: 'No Refill'
        },
        { 
          id: 6, 
          name: 'Instagram » Shares » Repost', 
          rate: 25.00, 
          min: 10, 
          max: 10000, 
          description: 'Instagram Post Shares and Reposts',
          speed: 'Fast (1-6 hours)',
          retention: '30 Days Refill'
        },
        { 
          id: 14, 
          name: 'Instagram » Live Stream', 
          rate: 130.00, 
          min: 10, 
          max: 1000, 
          description: 'Instagram Live Stream Viewers',
          speed: 'Instant',
          retention: 'No Refill'
        }
      ]
    },
    tiktok: {
      followers: [
        { 
          id: 15, 
          name: 'TikTok » Followers', 
          rate: 32.00, 
          min: 100, 
          max: 50000, 
          description: 'High Quality TikTok Followers',
          speed: 'Fast (1-6 hours)',
          retention: '365 Days Refill'
        }
      ],
      likes: [
        { 
          id: 16, 
          name: 'TikTok » Likes', 
          rate: 15.50, 
          min: 50, 
          max: 500000, 
          description: 'TikTok Likes from Real Users',
          speed: 'Instant',
          retention: '90 Days Refill'
        }
      ],
      views: [
        { 
          id: 17, 
          name: 'TikTok » Views', 
          rate: 11.50, 
          min: 1000, 
          max: 10000000, 
          description: 'TikTok Video Views - High Quality',
          speed: 'Fast (0-1 hours)',
          retention: '30 Days Refill'
        }
      ]
    },
    youtube: {
      subscribers: [
        { 
          id: 18, 
          name: 'YouTube » Subscribers [No Refill]', 
          rate: 85.00, 
          min: 50, 
          max: 10000, 
          description: 'YouTube Subscribers - No Refill Guarantee',
          speed: 'Slow (24-72 hours)',
          retention: 'No Refill'
        },
        { 
          id: 19, 
          name: 'YouTube » Subscribers [Guaranteed]', 
          rate: 135.00, 
          min: 50, 
          max: 5000, 
          description: 'YouTube Subscribers with Lifetime Guarantee',
          speed: 'Slow (24-72 hours)',
          retention: 'Lifetime Refill'
        }
      ],
      views: [
        { 
          id: 20, 
          name: 'YouTube » Short/Video Views', 
          rate: 22.00, 
          min: 1000, 
          max: 1000000, 
          description: 'YouTube Shorts and Video Views - High Quality',
          speed: 'Fast (1-6 hours)',
          retention: '365 Days Refill'
        }
      ],
      likes: [
        { 
          id: 21, 
          name: 'YouTube » Likes', 
          rate: 45.00, 
          min: 100, 
          max: 100000, 
          description: 'YouTube Video Likes from Real Users',
          speed: 'Fast (1-6 hours)',
          retention: '365 Days Refill'
        }
      ],
      comments: [
        { 
          id: 22, 
          name: 'YouTube » Comments', 
          rate: 95.00, 
          min: 10, 
          max: 5000, 
          description: 'Custom YouTube Comments from Real Users',
          speed: 'Fast (1-6 hours)',
          retention: '365 Days Refill'
        }
      ],
      'watch-time': [
        { 
          id: 23, 
          name: 'YouTube » Watch-Time', 
          rate: 65.00, 
          min: 100, 
          max: 50000, 
          description: 'YouTube Watch Time Hours - Boost Monetization',
          speed: 'Slow (24-72 hours)',
          retention: '365 Days Refill'
        }
      ],
      others: [
        { 
          id: 24, 
          name: 'YouTube » [Indian Services]', 
          rate: 95.00, 
          min: 50, 
          max: 20000, 
          description: 'YouTube Services from Indian Users Only',
          speed: 'Fast (1-6 hours)',
          retention: '365 Days Refill'
        }
      ]
    },
    facebook: {
      followers: [
        { 
          id: 25, 
          name: 'Facebook » Followers', 
          rate: 26.00, 
          min: 100, 
          max: 50000, 
          description: 'High Quality Facebook Page Followers',
          speed: 'Fast (1-6 hours)',
          retention: '365 Days Refill'
        }
      ],
      likes: [
        { 
          id: 26, 
          name: 'Facebook » Likes', 
          rate: 19.50, 
          min: 50, 
          max: 100000, 
          description: 'Facebook Post Likes from Real Users',
          speed: 'Fast (0-1 hours)',
          retention: '90 Days Refill'
        }
      ],
      views: [
        { 
          id: 27, 
          name: 'Facebook » Reel/Video Views', 
          rate: 17.00, 
          min: 1000, 
          max: 1000000, 
          description: 'Facebook Reel and Video Views - High Quality',
          speed: 'Fast (0-1 hours)',
          retention: '30 Days Refill'
        }
      ],
      'live stream': [
        { 
          id: 29, 
          name: 'Facebook » Live Stream', 
          rate: 105.00, 
          min: 10, 
          max: 1000, 
          description: 'Facebook Live Stream Viewers',
          speed: 'Instant',
          retention: 'No Refill'
        }
      ],
      others: [
        { 
          id: 28, 
          name: 'Facebook » Others', 
          rate: 28.00, 
          min: 10, 
          max: 10000, 
          description: 'Facebook Other Services (Comments, Shares, etc.)',
          speed: 'Fast (1-6 hours)',
          retention: '90 Days Refill'
        },
        { 
          id: 30, 
          name: 'Facebook » Monetization Package', 
          rate: 260.00, 
          min: 1, 
          max: 100, 
          description: 'Complete Facebook Page Monetization Setup',
          speed: 'Slow (24-72 hours)',
          retention: 'Lifetime Guarantee'
        }
      ]
    },
    telegram: {
      members: [
        { 
          id: 31, 
          name: 'Telegram » Channel Members', 
          rate: 22.00, 
          min: 100, 
          max: 100000, 
          description: 'High Quality Telegram Channel Members',
          speed: 'Fast (1-6 hours)',
          retention: '365 Days Refill'
        },
        { 
          id: 32, 
          name: 'Telegram » Group Members', 
          rate: 24.50, 
          min: 50, 
          max: 50000, 
          description: 'Active Telegram Group Members',
          speed: 'Fast (1-6 hours)',
          retention: '365 Days Refill'
        }
      ],
      views: [
        { 
          id: 33, 
          name: 'Telegram » Post Views', 
          rate: 13.50, 
          min: 1000, 
          max: 1000000, 
          description: 'Telegram Channel Post Views - High Quality',
          speed: 'Fast (0-1 hours)',
          retention: '30 Days Refill'
        }
      ],
      reactions: [
        { 
          id: 34, 
          name: 'Telegram » Reactions', 
          rate: 17.00, 
          min: 100, 
          max: 50000, 
          description: 'Telegram Post Reactions (👍❤️🔥)',
          speed: 'Fast (0-1 hours)',
          retention: '90 Days Refill'
        }
      ],
      comments: [
        { 
          id: 35, 
          name: 'Telegram » Comments', 
          rate: 45.00, 
          min: 10, 
          max: 5000, 
          description: 'Custom Telegram Comments from Real Users',
          speed: 'Fast (1-6 hours)',
          retention: '365 Days Refill'
        }
      ]
    },
    twitter: {
      followers: [
        { 
          id: 36, 
          name: 'Twitter » Followers', 
          rate: 34.00, 
          min: 100, 
          max: 100000, 
          description: 'High Quality Twitter Followers',
          speed: 'Fast (1-6 hours)',
          retention: '365 Days Refill'
        },
        { 
          id: 37, 
          name: 'Twitter » Followers [Premium]', 
          rate: 65.00, 
          min: 50, 
          max: 50000, 
          description: 'Premium Twitter Followers - Top Quality',
          speed: 'Slow (24-72 hours)',
          retention: 'Lifetime Refill'
        }
      ],
      likes: [
        { 
          id: 38, 
          name: 'Twitter » Likes', 
          rate: 21.50, 
          min: 50, 
          max: 500000, 
          description: 'Twitter Tweet Likes from Real Users',
          speed: 'Fast (0-1 hours)',
          retention: '90 Days Refill'
        }
      ],
      retweets: [
        { 
          id: 39, 
          name: 'Twitter » Retweets', 
          rate: 28.00, 
          min: 25, 
          max: 100000, 
          description: 'Twitter Retweets - Boost Engagement',
          speed: 'Fast (1-6 hours)',
          retention: '90 Days Refill'
        }
      ],
      views: [
        { 
          id: 40, 
          name: 'Twitter » Views', 
          rate: 12.50, 
          min: 1000, 
          max: 10000000, 
          description: 'Twitter Tweet Views - High Quality',
          speed: 'Fast (0-1 hours)',
          retention: '30 Days Refill'
        }
      ],
      others: [
        { 
          id: 41, 
          name: 'Twitter » Comments/Replies', 
          rate: 75.00, 
          min: 5, 
          max: 5000, 
          description: 'Custom Twitter Comments and Replies',
          speed: 'Fast (1-6 hours)',
          retention: '365 Days Refill'
        },
        { 
          id: 42, 
          name: 'Twitter » Bookmarks', 
          rate: 26.00, 
          min: 50, 
          max: 50000, 
          description: 'Twitter Tweet Bookmarks',
          speed: 'Fast (1-6 hours)',
          retention: '90 Days Refill'
        },
        { 
          id: 43, 
          name: 'Twitter » Spaces Listeners', 
          rate: 45.00, 
          min: 10, 
          max: 5000, 
          description: 'Twitter Spaces Live Listeners',
          speed: 'Instant',
          retention: 'No Refill'
        },
        { 
          id: 44, 
          name: 'Twitter » Profile Visits', 
          rate: 15.50, 
          min: 1000, 
          max: 1000000, 
          description: 'Twitter Profile Visits - Boost Visibility',
          speed: 'Fast (0-1 hours)',
          retention: '30 Days Refill'
        },
        { 
          id: 45, 
          name: 'Twitter » Impressions', 
          rate: 11.50, 
          min: 10000, 
          max: 10000000, 
          description: 'Twitter Tweet Impressions - Massive Reach',
          speed: 'Fast (0-1 hours)',
          retention: '30 Days Refill'
        }
      ]
    }
  }

  const findService = (serviceId: string) => {
    for (const category of Object.values(services)) {
      for (const subcategory of Object.values(category)) {
        const service = subcategory.find((s: any) => s.id.toString() === serviceId)
        if (service) return service
      }
    }
    return null
  }

  const calculateCost = (qty: string, rate: number) => {
    const numQty = parseInt(qty) || 0
    const cost = (numQty * rate) / 1000
    setTotalCost(cost)
  }

  const handlePlaceOrder = () => {
    if (!selectedService || !link || !quantity) return
    
    const service = findService(selectedService)
    if (!service) return

    const orderData = {
      service: service.name,
      category: selectedCategory,
      subcategory: selectedSubcategory,
      link: link,
      quantity: parseInt(quantity),
      totalCost: totalCost.toFixed(2)
    }

    // Show loading for 3 seconds
    setIsProcessing(true)
    
    // Reset form
    setSelectedCategory('')
    setSelectedSubcategory('')
    setSelectedService('')
    setLink('')
    setQuantity('')
    setTotalCost(0)
    
    // After 3 seconds, add order and show success popup
    setTimeout(() => {
      addOrder(orderData)
      setIsProcessing(false)
      setShowSuccessPopup(true)
      
      // Hide success popup after 3 more seconds
      setTimeout(() => {
        setShowSuccessPopup(false)
      }, 3000)
    }, 3000)
  }

  const handleQuantityChange = (value: string) => {
    setQuantity(value)
    if (selectedService) {
      const service = findService(selectedService)
      if (service) {
        calculateCost(value, service.rate)
      }
    }
  }

  const handleServiceChange = (serviceId: string) => {
    setSelectedService(serviceId)
    if (quantity) {
      const service = findService(serviceId)
      if (service) {
        calculateCost(quantity, service.rate)
      }
    }
  }

  const selectedServiceData = selectedService ? findService(selectedService) : null

  return (
    <div className="space-y-6">
      {/* Order Form */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Place New Order</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Fields */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value)
                    setSelectedSubcategory('')
                    setSelectedService('')
                    setTotalCost(0)
                  }}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select Category</option>
                  <option value="instagram">📷 Instagram</option>
                  <option value="tiktok">🎵 TikTok</option>
                  <option value="youtube">📺 YouTube</option>
                  <option value="facebook">👥 Facebook</option>
                  <option value="telegram">📱 Telegram</option>
                  <option value="twitter">🐦 Twitter</option>
                  <option value="linkedin">💼 LinkedIn</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subcategory</label>
                <select 
                  value={selectedSubcategory}
                  onChange={(e) => {
                    setSelectedSubcategory(e.target.value)
                    setSelectedService('')
                    setTotalCost(0)
                  }}
                  disabled={!selectedCategory}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
                >
                  <option value="">Select Subcategory</option>
                  {selectedCategory && subcategories[selectedCategory as keyof typeof subcategories]?.map(subcat => (
                    <option key={subcat} value={subcat.toLowerCase()}>
                      {subcat}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                <select 
                  value={selectedService}
                  onChange={(e) => handleServiceChange(e.target.value)}
                  disabled={!selectedSubcategory}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
                >
                  <option value="">Select Service</option>
                  {selectedCategory && selectedSubcategory && services[selectedCategory as keyof typeof services]?.[selectedSubcategory as keyof typeof services[keyof typeof services]]?.map((service: any) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Link</label>
              <input 
                type="url" 
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Enter your profile/post URL"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <input 
                  type="number" 
                  value={quantity}
                  onChange={(e) => handleQuantityChange(e.target.value)}
                  placeholder="Enter quantity"
                  min={selectedServiceData?.min || 1}
                  max={selectedServiceData?.max || 1000000}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                {selectedServiceData && (
                  <p className="text-xs text-gray-500 mt-1">
                    Min: {selectedServiceData.min.toLocaleString()} - Max: {selectedServiceData.max.toLocaleString()}
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Total Cost</label>
                <div className="w-full px-3 py-3 bg-purple-50 border border-purple-200 rounded-lg text-purple-700 font-semibold text-lg">
                  ₹{totalCost.toFixed(2)}
                </div>
              </div>
            </div>

            <button 
              onClick={handlePlaceOrder}
              disabled={!selectedService || !link || !quantity}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Place Order
            </button>
          </div>

          {/* Service Details */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Details</h3>
            
            {selectedServiceData ? (
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">{selectedServiceData.name}</h4>
                  <p className="text-sm text-gray-600">{selectedServiceData.description}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Rate:</span>
                    <span className="text-sm font-medium">₹{selectedServiceData.rate}/1000</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Speed:</span>
                    <span className="text-sm font-medium text-green-600">{selectedServiceData.speed}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Refill:</span>
                    <span className="text-sm font-medium text-blue-600">{selectedServiceData.retention}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Min Order:</span>
                    <span className="text-sm font-medium">{selectedServiceData.min.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Max Order:</span>
                    <span className="text-sm font-medium">{selectedServiceData.max.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-blue-900 mb-2">Important Notes:</h5>
                  <ul className="text-xs text-blue-800 space-y-1">
                    <li>• Profile must be public</li>
                    <li>• No password required</li>
                    <li>• 100% safe and secure</li>
                    <li>• 24/7 customer support</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">📋</div>
                <p className="text-gray-500">Select a service to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Loading Popup */}
      {isProcessing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 shadow-2xl transform animate-slideUp max-w-md mx-4">
            <div className="text-center">
              {/* Loading Spinner */}
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              </div>
              
              {/* Loading Message */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Processing Your Order</h3>
              <p className="text-gray-600 mb-4">Please wait while we process your request...</p>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full animate-pulse" style={{width: '100%', animation: 'progress 3s ease-in-out'}}></div>
              </div>
              
              <p className="text-sm text-gray-500">This may take a few seconds...</p>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 shadow-2xl transform animate-slideUp max-w-md mx-4">
            <div className="text-center">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              
              {/* Success Message */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Order is Being Placed!</h3>
              <p className="text-gray-600 mb-6">Your order has been successfully submitted.</p>
              
              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button 
                  onClick={() => setShowSuccessPopup(false)}
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
                <button 
                  onClick={() => {
                    setShowSuccessPopup(false)
                    // You can add navigation to order history here
                  }}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
                >
                  View Orders
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const OrderHistory = ({ orders }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100'
      case 'processing': return 'text-blue-600 bg-blue-100'
      case 'pending': return 'text-orange-600 bg-orange-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'processing': return <RefreshCw className="w-4 h-4" />
      case 'pending': return <Clock className="w-4 h-4" />
      default: return <AlertCircle className="w-4 h-4" />
    }
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Order History</h2>
      
      {orders.length === 0 ? (
        <div className="text-center py-8">
          <History className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No orders yet. Place your first order!</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Order ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Service</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Quantity</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900">#{order.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{order.service}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{order.quantity.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="capitalize">{order.status}</span>
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">{order.amount}</td>
                  <td className="py-3 px-4 text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('new-order')
  
  const handleLogout = () => {
    localStorage.removeItem('user')
    window.location.href = '/login'
  }
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('userOrders')
    return savedOrders ? JSON.parse(savedOrders) : []
  })

  const addOrder = (orderData) => {
    const newOrder = {
      id: Date.now().toString(),
      ...orderData,
      status: 'pending',
      createdAt: new Date().toISOString(),
      amount: `₹${orderData.totalCost}`
    }
    
    const updatedOrders = [newOrder, ...orders]
    setOrders(updatedOrders)
    localStorage.setItem('userOrders', JSON.stringify(updatedOrders))
  }

  const sidebarItems = [
    { id: 'new-order', name: 'New Order', icon: ShoppingCart },
    { id: 'order-history', name: 'Order History', icon: History },
    { id: 'add-funds', name: 'Add Funds', icon: CreditCard },
    { id: 'settings', name: 'Settings', icon: Settings },
    { id: 'help', name: 'Help & Support', icon: HelpCircle },
  ]







  const renderDashboardContent = () => {
    switch (activeTab) {
      case 'new-order':
        return (
          <NewOrderForm addOrder={addOrder} />
        )
      
      case 'order-history':
        return (
          <OrderHistory orders={orders} />
        )
      
      case 'add-funds':
        return (
          <AddFundsForm />
        )
      
      default:
        return (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">This feature is under development.</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold gradient-text">SocialBoost Pro</span>
          </Link>
          <button 
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <nav className="flex-1 mt-6 px-3 pb-4 overflow-y-auto">
          {sidebarItems.map((item) => {
            const IconComponent = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors mb-2 ${
                  activeTab === item.id
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            )
          })}
        </nav>

        <div className="flex-shrink-0 p-4 border-t border-gray-200">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-between h-16 px-4 lg:px-6">
            <div className="flex items-center space-x-4">
              <button 
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-6 h-6 text-gray-400" />
              </button>
              <h1 className="text-xl font-semibold text-gray-900 capitalize">
                {activeTab.replace('-', ' ')}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-48 lg:w-64"
                />
              </div>
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden md:block">Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6">
          {renderDashboardContent()}
        </main>
      </div>
    </div>
  )
}

export default Dashboard