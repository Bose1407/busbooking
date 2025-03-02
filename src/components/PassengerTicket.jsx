import { useState } from 'react'

function PassengerTicket() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl h-full max-h-[800px] mx-4 flex flex-col bg-white shadow-sm rounded-lg overflow-hidden">
        {/* Header */}
        <div className="border-b p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <button className="text-gray-600 text-2xl">←</button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold">16343 Amritha Exp</h1>
              </div>
              <p className="text-sm text-gray-600">Booking ID: TEX60469969</p>
            </div>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Train Details Card */}
          <div className="p-6 bg-purple-900 text-white shrink-0">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg">16343 Amritha Exp</h2>
              <span className="text-sm">SL - GN</span>
            </div>

            <div className="flex justify-between h-30 relative py-6">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-white mb-2"></div>
                <div>
                  <p className="font-semibold">CHN</p>
                  <p className="text-sm">Chennai</p>
                </div>
                <p className="text-sm mt-1">9:10 PM</p>
                <p className="text-sm">Sun, 25 Jan</p>
              </div>

              <div className="text-center text-sm mt-6">
                -------- 12h 50m --------
              </div>

              <div className="relative text-right">
                <div className="w-3 h-3 rounded-full bg-white mb-2 ml-auto"></div>
                <div>
                  <p className="font-semibold">MDU</p>
                  <p className="text-sm">Madurai</p>
                </div>
                <p className="text-sm mt-1">10:00 AM</p>
                <p className="text-sm">Mon, 26 Jan</p>
              </div>
            </div>
          </div>

          {/* Booking Details */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">PNR: 4712984187</span>
                <button className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                    <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-500">Chart not prepared - 0 min(s) ago</p>
            </div>

            {/* Passengers */}
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Passenger X</p>
                  <p className="text-sm text-green-600">Confirmed</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">S10-59</p>
                  <p className="text-sm text-gray-500">Upper Berth</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Passenger Y</p>
                  <p className="text-sm text-green-600">Confirmed</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">S10-62</p>
                  <p className="text-sm text-gray-500">Upper Berth</p>
                </div>
              </div>
            </div>
          </div>

          {/* Refresh Status Button */}
          <div className="p-6 shrink-0">
            <button className="w-full py-3 flex items-center justify-center gap-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              Refresh Status
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PassengerTicket