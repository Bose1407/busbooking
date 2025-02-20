import React from "react";

function Card({ booking, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Ticket Details</h2>
        <div className="space-y-2">
          <div>
            <span className="font-medium">Route:</span> {booking.route}
          </div>
          <div>
            <span className="font-medium">Date:</span> {booking.date}
          </div>
          <div>
            <span className="font-medium">Status:</span> {booking.status}
          </div>
          <div>
            <span className="font-medium">Amount Paid:</span> ${booking.amount}
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Card;
