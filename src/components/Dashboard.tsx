import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Home, ShoppingCart, History, CreditCard, Settings, HelpCircle, 
  LogOut, Menu, X, Zap, User, Bell, Search, Plus, TrendingUp,
  Clock, CheckCircle, AlertCircle, RefreshCw
} from 'lucide-react'

const NewOrderForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [link, setLink] = useState('')
  const [quantity, setQuantity] = useState('')
  const [totalCost, setTotalCost] = useState(0)

  const services = {
    instagram: [
      { 
        id: 1, 
        name: 'Instagram » Real Views', 
        rate: 0.80, 
        min: 100, 
        max: 100000, 
        description: 'Real Instagram Views - High Quality',
        speed: 'Fast (0-1 hours)',
        retention: '30 Days Refill'
      },
      { 
        id: 2, 
        name: 'Instagram » Real Views [Indians]', 
        rate: 1.20, 
        min: 100, 
        max: 50000, 
        description: 'Real Instagram Views from Indian Users',
        speed: 'Fast (1-6 hours)',
        retention: '30 Days Refill'
      },
      { 
        id: 3, 
        name: 'Instagram » Likes', 
        rate: 1.50, 
        min: 50, 
        max: 100000, 
        description: 'High Quality Instagram Likes',
        speed: 'Instant',
        retention: '90 Days Refill'
      },
      { 
        id: 4, 
        name: 'Instagram » Likes [Indians]', 
        rate: 2.00, 
        min: 50, 
        max: 50000, 
        description: 'Instagram Likes from Indian Users',
        speed: 'Fast (1-6 hours)',
        retention: '90 Days Refill'
      },
      { 
        id: 5, 
        name: 'Instagram » Statistics', 
        rate: 5.00, 
        min: 1, 
        max: 1000, 
        description: 'Instagram Account Statistics Analysis',
        speed: 'Instant',
        retention: 'No Refill'
      },
      { 
        id: 6, 
        name: 'Instagram » Shares » Repost', 
        rate: 3.50, 
        min: 10, 
        max: 10000, 
        description: 'Instagram Post Shares and Reposts',
        speed: 'Fast (1-6 hours)',
        retention: '30 Days Refill'
      },
      { 
        id: 7, 
        name: 'Instagram » Followers [No Refill]', 
        rate: 1.80, 
        min: 100, 
        max: 100000, 
        description: 'Instagram Followers - No Refill Guarantee',
        speed: 'Fast (1-6 hours)',
        retention: 'No Refill'
      },
      { 
        id: 8, 
        name: 'Instagram » Followers [100% Refill]', 
        rate: 4.50, 
        min: 100, 
        max: 50000, 
        description: 'Instagram Followers with 100% Refill Guarantee',
        speed: 'Fast (1-6 hours)',
        retention: '365 Days Refill'
      },
      { 
        id: 9, 
        name: 'Instagram » Followers [Lifetime]', 
        rate: 8.00, 
        min: 50, 
        max: 25000, 
        description: 'Instagram Followers - Lifetime Guarantee',
        speed: 'Slow (24-72 hours)',
        retention: 'Lifetime Refill'
      }
    ],
    tiktok: [
      { 
        id: 4, 
        name: 'TikTok Followers [Real Users]', 
        rate: 4.00, 
        min: 100, 
        max: 25000, 
        description: 'Real Active TikTok Users',
        speed: 'Fast (1-6 hours)',
        retention: '365 Days Refill'
      },
      { 
        id: 5, 
        name: 'TikTok Likes [High Quality]', 
        rate: 1.50, 
        min: 100, 
        max: 500000, 
        description: 'High Quality Likes from Real Accounts',
        speed: 'Instant',
        retention: '90 Days Refill'
      }
    ],
    youtube: [
      { 
        id: 6, 
        name: 'YouTube Subscribers [Real]', 
        rate: 25.00, 
        min: 50, 
        max: 10000, 
        description: 'Real YouTube Subscribers',
        speed: 'Slow (24-72 hours)',
        retention: '365 Days Refill'
      },
      { 
        id: 7, 
        name: 'YouTube Views [High Retention]', 
        rate: 3.50, 
        min: 1000, 
        max: 1000000, 
        description: 'High Retention YouTube Views',
        speed: 'Fast (1-6 hours)',
        retention: '365 Days Refill'
      }
    ]
  }

  const calculateCost = (qty: string, rate: number) => {
    const numQty = parseInt(qty) || 0
    const cost = (numQty * rate) / 1000
    setTotalCost(cost)
  }

  const handleQuantityChange = (value: string) => {
    setQuantity(value)
    if (selectedService) {
      const service = Object.values(services).flat().find(s => s.id.toString() === selectedService)
      if (service) {
        calculateCost(value, service.rate)
      }
    }
  }

  const handleServiceChange = (serviceId: string) => {
    setSelectedService(serviceId)
    if (quantity) {
      const service = Object.values(services).flat().find(s => s.id.toString() === serviceId)
      if (service) {
        calculateCost(quantity, service.rate)
      }
    }
  }

  const selectedServiceData = selectedService ? 
    Object.values(services).flat().find(s => s.id.toString() === selectedService) : null

  return (
    <div className="space-y-6">
      {/* Order Form */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Place New Order</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Fields */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value)
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
                  <option value="twitter">🐦 Twitter</option>
                  <option value="linkedin">💼 LinkedIn</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                <select 
                  value={selectedService}
                  onChange={(e) => handleServiceChange(e.target.value)}
                  disabled={!selectedCategory}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
                >
                  <option value="">Select Service</option>
                  {selectedCategory && services[selectedCategory as keyof typeof services]?.map(service => (
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
    </div>
  )
}

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')

  const sidebarItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'new-order', name: 'New Order', icon: ShoppingCart },
    { id: 'order-history', name: 'Order History', icon: History },
    { id: 'add-funds', name: 'Add Funds', icon: CreditCard },
    { id: 'settings', name: 'Settings', icon: Settings },
    { id: 'help', name: 'Help & Support', icon: HelpCircle },
  ]

  const recentOrders = [
    { id: '12345', service: 'Instagram Followers', quantity: '1000', status: 'completed', amount: '₹50' },
    { id: '12346', service: 'TikTok Likes', quantity: '5000', status: 'processing', amount: '₹100' },
    { id: '12347', service: 'YouTube Views', quantity: '10000', status: 'pending', amount: '₹200' },
    { id: '12348', service: 'Facebook Likes', quantity: '2000', status: 'completed', amount: '₹40' },
  ]

  const quickServices = [
    { name: 'Instagram Followers', price: '₹2/100', icon: '📷', popular: true },
    { name: 'TikTok Likes', price: '₹1/1000', icon: '🎵', popular: false },
    { name: 'YouTube Views', price: '₹5/1000', icon: '📺', popular: true },
    { name: 'Facebook Likes', price: '₹2/100', icon: '👥', popular: false },
  ]

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
      case 'processing': return <RefreshCw className="w-4 h-4 animate-spin" />
      case 'pending': return <Clock className="w-4 h-4" />
      default: return <AlertCircle className="w-4 h-4" />
    }
  }

  const renderDashboardContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Orders</p>
                    <p className="text-2xl font-bold text-gray-900">1,234</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-500">+12%</span>
                  <span className="text-gray-500 ml-1">from last month</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Spent</p>
                    <p className="text-2xl font-bold text-gray-900">₹45,678</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-500">+8%</span>
                  <span className="text-gray-500 ml-1">from last month</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Orders</p>
                    <p className="text-2xl font-bold text-gray-900">23</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-orange-500">Processing</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Wallet Balance</p>
                    <p className="text-2xl font-bold text-gray-900">₹2,500</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                    Add Funds
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Services */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Quick Order</h2>
                <Link to="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                  View All Services
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickServices.map((service, index) => (
                  <div key={index} className="relative border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors cursor-pointer">
                    {service.popular && (
                      <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                    <div className="text-2xl mb-2">{service.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{service.price}</p>
                    <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                      Order Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
                <Link to="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                  View All
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Order ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Service</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Quantity</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-900">#{order.id}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{order.service}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{order.quantity}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {getStatusIcon(order.status)}
                            <span className="capitalize">{order.status}</span>
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm font-medium text-gray-900">{order.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
      
      case 'new-order':
        return (
          <NewOrderForm />
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
          <button className="w-full flex items-center space-x-3 px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
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
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="hidden md:block">
                  <div className="text-sm font-medium text-gray-900">John Doe</div>
                  <div className="text-xs text-gray-500">john@example.com</div>
                </div>
              </div>
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