import React from 'react';
import { useState } from 'react';

function PassengerDetails() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    state: '',
    email: '',
    phone: '',
    hasGST: false,
    gstin: '',
    businessName: '',
    businessAddress: '',
    businessEmail: '',
    sendUpdates: false,
    assuranceOption: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-5xl mx-auto bg-white shadow-sm">
        <div className="border-b p-4">
          <div className="flex items-center gap-4">
            <button 
              className="text-gray-600 text-2xl" 
              onClick={() => window.history.back()}
            >
              ←
            </button>
            <div>
              <h1 className="text-2xl font-semibold">Passenger Details</h1>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Passenger Details</span>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Passenger Details Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-sm text-gray-600">passenger 1 | seat 10</p>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-md border-0 focus:ring-2 focus:ring-blue-500"
              />
              <div>
                <p className="text-sm text-gray-600 mb-2">Gender</p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={handleChange}
                      className="text-blue-500 w-4 h-4"
                    />
                    <span>Male</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === 'female'}
                      onChange={handleChange}
                      className="text-blue-500 w-4 h-4"
                    />
                    <span>Female</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Age</p>
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded-md border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="state"
                  placeholder="State of residence*"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded-md border-0 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <h2 className="text-lg font-medium">Contact details</h2>
              </div>
              <div className="bg-yellow-100 p-3 text-sm">
                Your ticket will be sent to these details
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-md border-0 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-4 pt-8">
              <div className="flex gap-3">
                <select className="p-3 bg-gray-100 rounded-md border-0 focus:ring-2 focus:ring-blue-500 w-24">
                  <option>+91</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 p-3 bg-gray-100 rounded-md border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* GST Section */}
          <div className="space-y-4">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                name="hasGST"
                checked={formData.hasGST}
                onChange={handleChange}
                className="rounded text-blue-500 w-4 h-4"
              />
              <span>I have GST Number (optional)?</span>
            </label>

            {formData.hasGST && (
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    name="gstin"
                    placeholder="GSTIN"
                    value={formData.gstin}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-100 rounded-md border-0 focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="businessName"
                    placeholder="Business Name"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-100 rounded-md border-0 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="businessAddress"
                    placeholder="Business Address"
                    value={formData.businessAddress}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-100 rounded-md border-0 focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="businessEmail"
                    placeholder="Business Email"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-100 rounded-md border-0 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* WhatsApp Updates */}
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="sendUpdates"
              checked={formData.sendUpdates}
              onChange={handleChange}
              className="rounded text-blue-500 w-4 h-4"
            />
            <span>Send booking details and trip updates on whatsapp</span>
          </label>

          {/* Travel Assurance */}
          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-lg font-medium">TRADEL ASSURANCE</p>
                <p className="text-sm text-gray-600">Secure your trip just at ₹19 per passenger</p>
              </div>
              <a href="#" className="text-blue-600 text-sm">T&C apply</a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                <input
                  type="radio"
                  name="assuranceOption"
                  value="bus"
                  checked={formData.assuranceOption === 'bus'}
                  onChange={handleChange}
                  className="text-blue-500 w-4 h-4"
                />
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 16v1a2 2 0 002 2h8a2 2 0 002-2v-1M4 16V4a2 2 0 012-2h8a2 2 0 012 2v12M4 16h16" />
                  </svg>
                  <span>Bus Protection</span>
                </div>
              </label>
              
              <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                <input
                  type="radio"
                  name="assuranceOption"
                  value="complete"
                  checked={formData.assuranceOption === 'complete'}
                  onChange={handleChange}
                  className="text-blue-500 w-4 h-4"
                />
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <span>Complete Protection</span>
                </div>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="sticky bottom-0 bg-white p-4 border-t mt-6">
            <button
              type="submit"
              className="w-full bg-purple-900 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassengerDetails;