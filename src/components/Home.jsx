import React, { useState, useEffect } from 'react';
import { Bus, User, HelpCircle, Globe, ChevronDown, ChevronUp, Gift, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { OfferSkeleton, FAQSkeleton } from './Skeleton';

function Home() {
  const [loading, setLoading] = useState(true);
  const [trendingOffers, setTrendingOffers] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I book a bus ticket on Tradel?',
      answer:
        'Booking a ticket on Tradel is simple: Select your departure and arrival cities, choose your travel date, pick your preferred bus and seat, fill in passenger details, and complete the payment. Your e-ticket will be sent to your email immediately after booking.',
    },
    {
      question: 'What payment methods are accepted?',
      answer:
        'We accept all major credit/debit cards, net banking, UPI, and popular digital wallets. All payments are processed through secure payment gateways to ensure your financial information is protected.',
    },
    {
      question: 'Can I cancel my ticket?',
      answer:
        'Yes, you can cancel your ticket up to 6 hours before departure. The refund amount will depend on the cancellation policy of the bus operator and how early you cancel. Refunds are typically processed within 5-7 business days.',
    },
    {
      question: 'How can I get my bus ticket?',
      answer:
        'Once your booking is confirmed, an e-ticket will be sent to your registered email address. You can also download the ticket from your Tradel account. Show this e-ticket along with a valid ID proof while boarding.',
    },
    {
      question: 'Is seat selection available?',
      answer:
        'Yes, you can select your preferred seat from the available options during the booking process. The seating layout will show you which seats are available, booked, or reserved for ladies.',
    },
    {
      question: 'What happens if my bus is delayed or cancelled?',
      answer:
        'In case of delays, we\'ll keep you updated via SMS and email. If your bus is cancelled by the operator, you\'ll receive a full refund automatically. You can also choose to book an alternative bus if available.',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setTrendingOffers([
        { title: 'Save up to Rs 250 on bus ticket', color: 'bg-blue-600', icon: <Gift className="w-6 h-6 mb-2" /> },
        { title: 'Save up to Rs 500 on AC buses', color: 'bg-teal-600', icon: <Tag className="w-6 h-6 mb-2" /> },
        { title: 'Save up to Rs 300 on Sleeper Bus', color: 'bg-red-800', icon: <Gift className="w-6 h-6 mb-2" /> },
        { title: 'Save up to Rs 200 on bus ticket', color: 'bg-green-600', icon: <Tag className="w-6 h-6 mb-2" /> },
        { title: 'Save up to Rs 250 on bus ticket', color: 'bg-blue-600', icon: <Gift className="w-6 h-6 mb-2" /> },
        { title: 'Save up to Rs 500 on AC buses', color: 'bg-teal-600', icon: <Tag className="w-6 h-6 mb-2" /> },
        { title: 'Save up to Rs 300 on Sleeper Bus', color: 'bg-red-800', icon: <Gift className="w-6 h-6 mb-2" /> },
        { title: 'Save up to Rs 200 on bus ticket', color: 'bg-green-600', icon: <Tag className="w-6 h-6 mb-2" /> },

      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-montserrat">
      {/* Header */}
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

      {/* Hero Section */}
      <div className="bg-purple-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-white text-center text-4xl font-bold mb-8">India's No. 1 Online Bus Ticket Booking Site</h1>
          {/* Search Box */}
          <div className="bg-white rounded-lg p-4 shadow-lg max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="From"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="To"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="date"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <motion.button
              className="w-full bg-purple-900 text-white py-3 rounded-md hover:bg-purple-800 transition-all duration-200 text-lg"
            >
              Search Buses
            </motion.button>
          </div>
        </div>
      </div>

      {/* Trending Offers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">TRENDING OFFERS</h2>
            <a href="#" className="text-purple-900 hover:text-purple-800 font-semibold">
              View All
            </a>
          </div>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {Array(4).fill(0).map((_, index) => (
                <OfferSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className="relative">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
               
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {trendingOffers.map((offer, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${offer.color} text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex flex-col items-center h-full`}
                    >
                      {offer.icon}
                      <p className="font-medium mb-4 text-center text-lg">{offer.title}</p>
                      <button className="bg-white text-gray-800 px-4 py-2 rounded-md text-base hover:bg-gray-100 transition-all duration-200">
                        View Details
                      </button>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>

        {/* Download App Section */}
        <div className="bg-purple-900 rounded-lg overflow-hidden mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Download Tradel App</h2>
              <p className="text-white text-lg mb-6">
                Book tickets, track your bus, and get exclusive offers right from your phone!
              </p>
              <div className="flex space-x-4">
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-16 cursor-pointer hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800"
                alt="Mobile App"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Bus className="w-8 h-8 text-purple-900" />
              <h1 className="text-4xl font-bold text-gray-900">Tradel FAQs</h1>
            </div>
            <div className="space-y-4">
              {loading ? (
                Array(6).fill(0).map((_, index) => (
                  <FAQSkeleton key={index} />
                ))
              ) : (
                faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="text-xl font-medium text-gray-800">{faq.question}</span>
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-purple-900" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    <div
                      className={`px-6 transition-all duration-200 ease-in-out ${
                        openIndex === index ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1">
              <div className="text-purple-900 font-bold text-2xl mb-4">Tradel</div>
              <p className="text-base text-gray-600">
                Tradel is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">About Tradel</h3>
              <ul className="space-y-2 text-base text-gray-600">
                <li><a href="#" className="hover:text-purple-900">About us</a></li>
                <li><a href="#" className="hover:text-purple-900">Contact us</a></li>
                <li><a href="#" className="hover:text-purple-900">Mobile version</a></li>
                <li><a href="#" className="hover:text-purple-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Info</h3>
              <ul className="space-y-2 text-base text-gray-600">
                <li><a href="#" className="hover:text-purple-900">T&C</a></li>
                <li><a href="#" className="hover:text-purple-900">Privacy policy</a></li>
                <li><a href="#" className="hover:text-purple-900">FAQ</a></li>
                <li><a href="#" className="hover:text-purple-900">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Global Sites</h3>
              <ul className="space-y-2 text-base text-gray-600">
                <li><a href="#" className="hover:text-purple-900">India</a></li>
                <li><a href="#" className="hover:text-purple-900">USA</a></li>
                <li><a href="#" className="hover:text-purple-900">UK</a></li>
                <li><a href="#" className="hover:text-purple-900">Russia</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Our Partners</h3>
              <ul className="space-y-2 text-base text-gray-600">
                <li><a href="#" className="hover:text-purple-900">Imperium Bus</a></li>
                <li><a href="#" className="hover:text-purple-900">Imperium Hotels</a></li>
                <li><a href="#" className="hover:text-purple-900">Rockfort Hotels</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-base text-gray-600 text-center">
            © 2025 Tradel India Pvt Ltd. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

