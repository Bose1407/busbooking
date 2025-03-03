import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-700 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <h1 className="text-center text-yellow-300 font-bold text-5xl mb-8 tracking-tight">
          <span className="inline-block transform hover:scale-105 transition-transform duration-300">Tradel</span>
          <span className="block text-2xl mt-2 text-yellow-200 font-medium">Navigation Portal</span>
        </h1>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-yellow-400/30 shadow-2xl p-8 hover:shadow-yellow-400/20 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { to: '/home', icon: '🏠', label: 'Home Page', color: 'bg-blue-600' },
              { to: '/profile', icon: '🧔', label: 'Profile Page', color: 'bg-green-600' },
              { to: '/operatorlogin', icon: '🧑‍🏫', label: 'Operator Login', color: 'bg-red-600' },
              { to: '/mybookings', icon: '📔', label: 'My Bookings', color: 'bg-yellow-600' },
              { to: '/admindashboard', icon: '💨', label: 'Admin Dashboard', color: 'bg-purple-600' },
              { to: '/passengerdetails', icon: '🧑‍🎨', label: 'Passenger Details', color: 'bg-indigo-600' },
              { to: '/passengerticket', icon: '🎫', label: 'Passenger Ticket', color: 'bg-pink-600' },
            ].map((item, index) => (
              <Link 
                key={index}
                to={item.to}
                className={`${item.color} hover:bg-opacity-90 text-white rounded-lg p-4 flex items-center transform hover:scale-105 transition-all duration-300 shadow-md`}
              >
                <span className="text-2xl mr-3">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-yellow-200 opacity-80">
          <p className="text-sm">© 2025 Tradel</p>
        </div>
      </div>
    </div>
  )
}

export default Index