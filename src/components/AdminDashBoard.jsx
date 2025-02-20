import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Bus, 
  Users, 
  Calendar,
  TicketIcon,
  Settings,
  LogOut,
  Wrench,
  Car
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Total Bookings', value: '1,234', icon: TicketIcon },
    { title: 'Active Buses', value: '45', icon: Bus },
    { title: 'Total Users', value: '892', icon: Users },
    { title: 'Today\'s Trips', value: '28', icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-60 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-purple-900" style={{display:'flex',alignContent:'center',justifySelf:'center'}}>Tradel</h1>
        </div>
        <nav className="mt-6">
          {[
            { name: 'Overview', icon: LayoutDashboard, id: 'overview' },
            { name: 'Buses', icon: Bus, id: 'buses' },
            { name: 'Passengers', icon: Users, id: 'passengers' },
            { name: 'Schedules', icon: Calendar, id: 'schedules' },
            { name: 'Car Pooling', icon: Car, id: 'car' },
            { name: 'Rentals', icon: Wrench, id: 'wrench' },
            { name: 'Settings', icon: Settings, id: 'settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <button className="w-full flex items-center px-6 py-3 text-left text-gray-600 hover:bg-gray-50">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Bookings Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Recent Bookings</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Booking ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Passenger
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Route
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    id: 'BK001',
                    passenger: 'Bose',
                    route: 'Madurai - Puddukottai',
                    date: '2024-03-15',
                    status: 'Confirmed',
                  },
                  {
                    id: 'BK002',
                    passenger: 'Madhu',
                    route: 'Madurai - Sivagangai',
                    date: '2024-03-16',
                    status: 'Pending',
                  },
                  // Add more dummy data as needed
                ].map((booking, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.passenger}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.route}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        booking.status === 'Confirmed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;