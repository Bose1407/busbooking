import React, { useState } from 'react';
import { Bus, User, Bell, HelpCircle, Globe, ChevronDown, PenSquare } from 'lucide-react';
import Logo from "./Tradel-logo.png"



function App() {
  const [formData, setFormData] = useState({
    name: 'Bose B',
    email: 'bosebeast2@gmail.com',
    gender: 'Male',
    mobile: '+91 7094511720',
    dob: '14.07.2005'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold text-purple-900 mr-6"><a href="/">Tradel</a></h1>
              <div className="bg-purple-900 text-white px-4 py-2 rounded-md flex items-center">
                <Bus className="w-4 h-4 mr-2" />
                <span>Bus Tickets</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                <Bus className="w-5 h-5 mr-1" />
                Track Ticket
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                <HelpCircle className="w-5 h-5 mr-1" />
                Help
              </a>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-1" />
                <span>English</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-1" />
                <span>Account</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-purple-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <a href="/" className="hover:underline">Home</a>
            <span>/</span>
            <a href="/profile" className="hover:underline">My Account</a>
            <span>/</span>
            <span>Profile</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64">
            <nav className="space-y-1">
              <a href="/mybookings" className="flex items-center px-4 py-3 text-gray-600 hover:bg-purple-50 hover:text-purple-900 rounded-md">
                <Bus className="w-5 h-5 mr-3" />
                My Bookings
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-white bg-purple-900 rounded-md">
                <User className="w-5 h-5 mr-3" />
                Profile
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-purple-50 hover:text-purple-900 rounded-md">
                <Bell className="w-5 h-5 mr-3" />
                Notification
              </a>
            </nav>
          </div>

          {/* Profile Form */}
          <div className="flex-1 bg-white rounded-lg shadow p-8">
            <h2 className="text-xl font-semibold mb-6">Profile Info</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                  <input
                    type="text"
                    
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                    readOnly
                  />
                  <PenSquare className="absolute right-3 top-9 w-4 h-4 text-gray-400 cursor-pointer" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Gender</label>
                  <input
                    type="text"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter your gender"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-900 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                    readOnly
                  />
                  <PenSquare className="absolute right-3 top-9 w-4 h-4 text-gray-400 cursor-pointer" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">DOB</label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-purple-900 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition-colors"
              >
                Save
              </button>

              {/* UPI Details Section */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Enter UPI details</h3>
                <p className="text-sm text-gray-600 mb-4">UPI payment/Instant Transfer</p>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter UPI ID"
                />
                <button
                type="submit"
                className="mt-4 bg-purple-900 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition-colors"
              >
                Update UPI details
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-12 py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-1">
              <div className="mr-8"><img src={Logo} alt="" /></div>
              <p className="text-sm text-gray-600">
                Tradel is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About Tradel</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-900">About us</a></li>
                <li><a href="#" className="hover:text-purple-900">Contact us</a></li>
                <li><a href="#" className="hover:text-purple-900">Mobile version</a></li>
                <li><a href="#" className="hover:text-purple-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Info</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-900">T&C</a></li>
                <li><a href="#" className="hover:text-purple-900">Privacy policy</a></li>
                <li><a href="#" className="hover:text-purple-900">FAQ</a></li>
                <li><a href="#" className="hover:text-purple-900">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Global Sites</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-900">India</a></li>
                <li><a href="#" className="hover:text-purple-900">Singapore</a></li>
                <li><a href="#" className="hover:text-purple-900">Malaysia</a></li>
                <li><a href="#" className="hover:text-purple-900">Indonesia</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Our Partners</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-900">Goibibo Bus</a></li>
                <li><a href="#" className="hover:text-purple-900">Goibibo Hotels</a></li>
                <li><a href="#" className="hover:text-purple-900">Makemytrip Hotels</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-sm text-gray-600">
            © 2024 Tradel India Pvt Ltd. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;