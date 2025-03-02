import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, Shield, AlertCircle, CheckCircle, ChevronRight } from 'lucide-react';
import { Bus, User, HelpCircle, Globe, ChevronDown, ChevronUp, Gift, Tag } from 'lucide-react';

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
    sendUpdates: true,
    assuranceOption: 'complete'
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
    // Here you would typically send the data to your backend
  };

  return (
    <>
    <header className="bg-white shadow-lg">
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
    <div className="min-h-screen bg-gray-50">
      {/* <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center">
          <button 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors mr-3" 
            onClick={() => window.history.back()}
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Passenger Details</h1>
            <p className="text-sm text-gray-500">Complete your booking information</p>
          </div>
        </div>
      </header> */}

      <main className="max-w-5xl mx-auto my-6 px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <form onSubmit={handleSubmit} className="divide-y divide-gray-100">
            {/* Passenger Details Section */}
            <section className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Passenger Information</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      Please ensure passenger details match government ID proof for verification.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Passenger Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="text-xs absolute top-0 right-0 bg-gray-100 text-gray-600 px-2 py-1 rounded-bl-md rounded-tr-md">
                        Seat 10
                      </span>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={formData.gender === 'male'}
                          onChange={handleChange}
                          required
                          className="text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                        />
                        <span className="text-gray-700">Male</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={formData.gender === 'female'}
                          onChange={handleChange}
                          className="text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                        />
                        <span className="text-gray-700">Female</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                      Age <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="age"
                      type="number"
                      name="age"
                      placeholder="Enter age"
                      min="1"
                      max="120"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State of Residence <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="" disabled>Select state</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Details Section */}
            <section className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="h-5 w-5 text-indigo-600" />
                <h2 className="text-lg font-medium text-gray-900">Contact Details</h2>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 p-4 mb-6 rounded-md flex items-start">
                <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-800 ml-3">
                  Your ticket and important updates will be sent to these contact details
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 p-3 bg-gray-50 rounded-md border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <select className="h-full py-3 px-3 bg-gray-50 text-gray-500 border border-r-0 border-gray-200 rounded-l-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                        <option>+91</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>
                    </div>
                    <div className="relative flex-grow">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 p-3 bg-gray-50 rounded-r-md border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="sendUpdates"
                    checked={formData.sendUpdates}
                    onChange={handleChange}
                    className="rounded text-indigo-600 focus:ring-indigo-500 h-5 w-5"
                  />
                  <span className="text-gray-700">Send booking details and trip updates on WhatsApp</span>
                </label>
              </div>
            </section>

            {/* GST Section */}
            <section className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">GST Information (Optional)</h2>
                <label className="inline-flex items-center cursor-pointer">
                  <span className="mr-3 text-sm text-gray-700">I have a GST number</span>
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      name="hasGST"
                      checked={formData.hasGST}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </div>
                </label>
              </div>

              {formData.hasGST && (
                <div className="bg-white border border-gray-200 rounded-md p-5 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="gstin" className="block text-sm font-medium text-gray-700 mb-1">
                        GSTIN
                      </label>
                      <input
                        id="gstin"
                        type="text"
                        name="gstin"
                        placeholder="Enter GSTIN"
                        value={formData.gstin}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Name
                      </label>
                      <input
                        id="businessName"
                        type="text"
                        name="businessName"
                        placeholder="Enter business name"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Address
                      </label>
                      <input
                        id="businessAddress"
                        type="text"
                        name="businessAddress"
                        placeholder="Enter business address"
                        value={formData.businessAddress}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Email
                      </label>
                      <input
                        id="businessEmail"
                        type="email"
                        name="businessEmail"
                        placeholder="Enter business email"
                        value={formData.businessEmail}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Travel Assurance */}
            <section className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">TRAVEL ASSURANCE</h2>
                  <p className="text-sm text-gray-600">Secure your trip for just ₹19 per passenger</p>
                </div>
                <a href="#" className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors">
                  View T&C
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                  formData.assuranceOption === 'bus' 
                    ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200' 
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                }`}>
                  <input
                    type="radio"
                    name="assuranceOption"
                    value="bus"
                    checked={formData.assuranceOption === 'bus'}
                    onChange={handleChange}
                    className="text-indigo-600 focus:ring-indigo-500 mt-1 h-4 w-4"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Shield className="h-5 w-5 text-indigo-600" />
                      <span className="font-medium text-gray-900">Bus Protection</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Coverage for bus-related issues including breakdowns and delays
                    </p>
                    <p className="text-xs text-indigo-600 font-medium mt-2">₹19 per passenger</p>
                  </div>
                </label>
                
                <label className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                  formData.assuranceOption === 'complete' 
                    ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200' 
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                }`}>
                  <input
                    type="radio"
                    name="assuranceOption"
                    value="complete"
                    checked={formData.assuranceOption === 'complete'}
                    onChange={handleChange}
                    className="text-indigo-600 focus:ring-indigo-500 mt-1 h-4 w-4"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Shield className="h-5 w-5 text-indigo-600" />
                      <span className="font-medium text-gray-900">Complete Protection</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Recommended</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Full coverage including bus issues, personal accidents, and baggage loss
                    </p>
                    <p className="text-xs text-indigo-600 font-medium mt-2">₹19 per passenger</p>
                  </div>
                </label>
              </div>
            </section>

            {/* Submit Button */}
            <div className="sticky bottom-0 bg-white p-4 shadow-md border-t border-gray-100">
              <div className="max-w-5xl mx-auto flex justify-between items-center">
                <div className="text-gray-700">
                  <p className="font-medium">Total: ₹1,249</p>
                  <p className="text-xs text-gray-500">Includes ₹19 travel assurance</p>
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-purple-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span>Continue to Payment</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
    </>
  );
}

export default PassengerDetails;