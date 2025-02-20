import React, { useState } from "react";
import { Bus, User, HelpCircle, Globe, ChevronDown } from "lucide-react";

function MyBookings() {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Sample data - replace with your actual data from API/database
  const bookings = {
    upcoming: [
      { id: 1, from: 'Madurai', to: 'Trichy', date: '2024-02-01', time: '10:00 AM', seats: 2, price: 'Rs 100' },
      { id: 2, from: 'Melur', to: 'Madurai', date: '2024-02-05', time: '2:30 PM', seats: 1, price: 'Rs 30' },
    ],
    completed: [
      { id: 3, from: 'Ooty', to: 'kochin', date: '2024-01-15', time: '9:00 AM', seats: 3, price: 'Rs 200' },
      { id: 4, from: 'kochin', to: 'Ooty', date: '2024-01-20', time: '11:30 AM', seats: 2, price: 'Rs 200' },
    ],
    cancelled: [
      { id: 5, from: 'Madurai', to: 'Coorg', date: '2024-01-10', time: '8:00 AM', seats: 1, price: 'Rs 900' },
    ],
  };

  const TabButton = ({ tab, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-2 ${
        activeTab === tab
          ? 'bg-purple-900 text-white shadow-lg'
          : 'bg-purple-50 text-black hover:bg-purple-100'
      } rounded-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105`}
    >
      {label}
    </button>
  );

  const BookingCard = ({ booking }) => (
    <div className="bg-white-200 backdrop-blur-sm p-6 rounded-xl shadow-md mb-4 border border-purple-100 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-black">
          <span className="text-white">{booking.from}</span>
          <span className="mx-2 text-gray-400">→</span>
          <span className="text-white">{booking.to}</span>
        </h3>
        <span className="text-black font-bold bg-purple-50 px-3 py-1 rounded-full">
          {booking.price}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-purple-50/80 backdrop-blur-sm p-2 rounded-lg">
          <span className="font-medium text-black">Date:</span>
          <span className="text-black ml-2">{booking.date}</span>
        </div>
        <div className="bg-purple-50/80 backdrop-blur-sm p-2 rounded-lg">
          <span className="font-medium text-black">Time:</span>
          <span className="text-black ml-2">{booking.time}</span>
        </div>
        <div className="bg-purple-50/80 backdrop-blur-sm p-2 rounded-lg">
          <span className="font-medium text-black">Seats:</span>
          <span className="text-black ml-2">{booking.seats}</span>
        </div>
        <div className="bg-purple-50/80 backdrop-blur-sm p-2 rounded-lg">
          <span className="font-medium text-black">Booking ID:</span>
          <span className="text-black ml-2">#{booking.id}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(149, 110, 179, 0.8), rgba(59, 21, 92, 0.9)), url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop')`
      }}
    >
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center pt-8">
          <span className="bg-clip-text text-transparent bg-white">
            My Bookings
          </span>
        </h1>
        
        {/* Tabs */}
        <div className="mb-8">
          <div className="flex gap-4 mb-6 justify-center">
            <TabButton tab="upcoming" label="Upcoming" />
            <TabButton tab="completed" label="Completed" />
            <TabButton tab="cancelled" label="Cancelled" />
          </div>

          {/* Booking Lists */}
          <div className="space-y-4">
            {bookings[activeTab].length === 0 ? (
              <div className="text-center text-black py-12 bg-purple-50/80 backdrop-blur-sm rounded-xl">
                <p className="text-lg">No {activeTab} bookings found</p>
              </div>
            ) : (
              <div className="transition-all duration-300 ease-in-out">
                {bookings[activeTab].map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBookings;