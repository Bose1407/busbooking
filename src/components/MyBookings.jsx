import React, { useState } from "react";
import { Calendar, Clock, Users, Hash, MapPin, ArrowRight, X } from "lucide-react";
import { Bus, User, HelpCircle, Globe, ChevronDown, ChevronUp, Gift, Tag } from 'lucide-react';

function MyBookings() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sample data - replace with your actual data from API/database
  const bookings = {
    upcoming: [
      { 
        id: 1, 
        from: 'Madurai', 
        to: 'Trichy', 
        date: '2024-02-01', 
        time: '10:00 AM', 
        seats: 2, 
        price: 'Rs 100',
        busType: 'AC Sleeper',
        busNumber: 'TN 58 F 5264',
        boardingPoint: 'Mattuthavani Bus Stand',
        dropPoint: 'Central Bus Stand',
        duration: '2h 30m',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop'
      },
      { 
        id: 2, 
        from: 'Melur', 
        to: 'Madurai', 
        date: '2024-02-05', 
        time: '2:30 PM', 
        seats: 1, 
        price: 'Rs 30',
        busType: 'Non-AC Seater',
        busNumber: 'TN 58 F 1234',
        boardingPoint: 'Melur Bus Stand',
        dropPoint: 'Periyar Bus Stand',
        duration: '45m',
        image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop'
      },
    ],
    completed: [
      { 
        id: 3, 
        from: 'Ooty', 
        to: 'Kochin', 
        date: '2024-01-15', 
        time: '9:00 AM', 
        seats: 3, 
        price: 'Rs 200',
        busType: 'AC Sleeper',
        busNumber: 'KL 07 CB 7890',
        boardingPoint: 'Ooty Bus Terminal',
        dropPoint: 'Ernakulam Bus Stand',
        duration: '6h 15m',
        image: 'https://images.unsplash.com/photo-1564694202883-46e7448c1b26?q=80&w=2187&auto=format&fit=crop'
      },
      { 
        id: 4, 
        from: 'Kochin', 
        to: 'Ooty', 
        date: '2024-01-20', 
        time: '11:30 AM', 
        seats: 2, 
        price: 'Rs 200',
        busType: 'AC Sleeper',
        busNumber: 'KL 07 CB 7890',
        boardingPoint: 'Ernakulam Bus Stand',
        dropPoint: 'Ooty Bus Terminal',
        duration: '6h 30m',
        image: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?q=80&w=2069&auto=format&fit=crop'
      },
    ],
    cancelled: [
      { 
        id: 5, 
        from: 'Madurai', 
        to: 'Coorg', 
        date: '2024-01-10', 
        time: '8:00 AM', 
        seats: 1, 
        price: 'Rs 900',
        busType: 'AC Sleeper',
        busNumber: 'KA 12 M 4567',
        boardingPoint: 'Mattuthavani Bus Stand',
        dropPoint: 'Madikeri Bus Stand',
        duration: '10h 45m',
        image: 'https://images.unsplash.com/photo-1590075865003-e48277faa558?q=80&w=2070&auto=format&fit=crop'
      },
    ],
  };

  const openModal = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBooking(null);
  };

  const TabButton = ({ tab, label }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-6 py-3 ${
        activeTab === tab
          ? 'bg-purple-900 text-white font-medium shadow-md'
          : 'bg-white text-gray-700 hover:bg-gray-50'
      } rounded-md transition-all duration-200 ease-in-out`}
    >
      {label}
    </button>
  );

  const BookingCard = ({ booking }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <MapPin className="text-purple-900 w-5 h-5 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            {booking.from}
            <ArrowRight className="inline mx-2 text-gray-400 w-4 h-4" />
            {booking.to}
          </h3>
        </div>
        <span className="text-purple-900 font-semibold bg-indigo-50 px-3 py-1 rounded-full text-sm">
          {booking.price}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center text-gray-700">
          <Calendar className="w-4 h-4 text-purple-900 mr-2" />
          <span className="font-medium mr-2">Date:</span>
          {booking.date}
        </div>
        <div className="flex items-center text-gray-700">
          <Clock className="w-4 h-4 text-purple-900 mr-2" />
          <span className="font-medium mr-2">Time:</span>
          {booking.time}
        </div>
        <div className="flex items-center text-gray-700">
          <Users className="w-4 h-4 text-purple-900 mr-2" />
          <span className="font-medium mr-2">Seats:</span>
          {booking.seats}
        </div>
        <div className="flex items-center text-gray-700">
          <Hash className="w-4 h-4 text-purple-900 mr-2" />
          <span className="font-medium mr-2">Booking ID:</span>
          #{booking.id}
        </div>
      </div>
      
      {activeTab === 'upcoming' && (
        <div className="mt-4 flex justify-end space-x-3">
          <button className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors">
            Cancel
          </button>
          <button 
            onClick={() => openModal(booking)}
            className="px-4 py-2 text-sm bg-purple-900 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            View Details
          </button>
        </div>
      )}
      
      {activeTab === 'completed' && (
        <div className="mt-4 flex justify-end">
          <button className="px-4 py-2 text-sm bg-purple-900 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Book Again
          </button>
        </div>
      )}
    </div>
  );

  const BookingDetailsModal = ({ booking, onClose }) => {
    if (!booking) return null;
    
    return (
      <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white-500 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img 
              src={booking.image} 
              alt={`${booking.from} to ${booking.to} journey`} 
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-white p-1 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  {booking.from} to {booking.to}
                </h2>
                <p className="text-gray-600">{booking.date} • {booking.time}</p>
              </div>
              <span className="text-purple-900 font-bold bg-indigo-50 px-4 py-2 rounded-full text-lg">
                {booking.price}
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Journey Details</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-28 text-gray-600">Bus Type</div>
                    <div className="font-medium text-gray-900">{booking.busType}</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-28 text-gray-600">Bus Number</div>
                    <div className="font-medium text-gray-900">{booking.busNumber}</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-28 text-gray-600">Duration</div>
                    <div className="font-medium text-gray-900">{booking.duration}</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-28 text-gray-600">Seats</div>
                    <div className="font-medium text-gray-900">{booking.seats}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Boarding & Drop</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-28 text-gray-600">Boarding</div>
                    <div className="font-medium text-gray-900">{booking.boardingPoint}</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-28 text-gray-600">Drop</div>
                    <div className="font-medium text-gray-900">{booking.dropPoint}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-sm">Booking ID: #{booking.id}</p>
                </div>
                {activeTab === 'upcoming' && (
                  <button className="px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                    Cancel Booking
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
    <header className="bg-white shadow-lg sticky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-purple-900 font-bold text-3xl mr-8">Tradel</div>
              <div className="bg-purple-900 text-white px-4 py-2 rounded-md flex items-center hover:bg-purple-800 transition-all duration-200">
                <Bus className="w-5 h-5 mr-2" />
                <span>Bus Tickets</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-lg">
              <a href="#" className="text-gray-600 hover:text-purple-900 flex items-center transition-all duration-200">
                <Bus className="w-5 h-5 mr-1" />
                Track Ticket
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-900 flex items-center transition-all duration-200">
                <HelpCircle className="w-5 h-5 mr-1" />
                Help
              </a>
              <div className="flex items-center cursor-pointer text-gray-600 hover:text-purple-900 transition-all duration-200">
                <Globe className="w-5 h-5 mr-1" />
                <span>English</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
              <div className="flex items-center cursor-pointer text-gray-600 hover:text-purple-900 transition-all duration-200">
                <User className="w-5 h-5 mr-1" />
                <span>Account</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </header>
    <div className="min-h-screen bg-gray-150">
      <div className="max-w-4xl mx-auto p-6">
        <header className="mb-8 pt-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600">View and manage all your bus bookings</p>
        </header>
        
        {/* Tabs */}
        <div className="bg-gray-100 p-1 rounded-lg inline-flex mb-6">
          <TabButton tab="upcoming" label="Upcoming" />
          <TabButton tab="completed" label="Completed" />
          <TabButton tab="cancelled" label="Cancelled" />
        </div>

        {/* Booking Lists */}
        <div className="space-y-4">
          {bookings[activeTab].length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-lg">No {activeTab} bookings found</p>
              {activeTab !== 'upcoming' && (
                <button className="mt-4 px-6 py-2 bg-purple-900 text-white rounded-md hover:bg-indigo-700 transition-colors">
                  Book a Trip
                </button>
              )}
            </div>
          ) : (
            <div className="transition-all duration-200 ease-in-out space-y-4">
              {bookings[activeTab].map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Modal */}
      {showModal && selectedBooking && (
        <BookingDetailsModal booking={selectedBooking} onClose={closeModal} />
      )}
    </div>
    </>
  );
}

export default MyBookings;