import React from "react"
import logo from "./Tradel_logo123.png"

const OperatorLogin = () => {
  return (
    <div className="h-screen flex overflow-hidden font-sans justify-center items-center">
      <div className="flex w-1/2 h-800 bg-purple-900 text-white justify-center items-center p-4">
        <img src={logo} alt="Tradel Logo" className="max-w-[90%] h-auto" />
      </div>

      <div className="flex flex-col w-1/2 justify-center items-center p-8 bg-white">
        <h2 className="text-2xl font-bold text-purple-900 text-center mb-4">
          Empower your operations – Login to take control with confidence.
        </h2>

        <div className="w-full max-w-md mb-10">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-lg"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md text-lg"
          />
          <button
            type="button"
            className="w-full p-3 bg-purple-900 text-white text-lg font-medium rounded-full hover:bg-purple-600 transition"
          >
            Login as Operator
          </button>

          <div className="text-center text-sm text-gray-600 mt-4">
            By Logging, you agree to our
            <a href="#" className="text-gray-500 underline"> Terms & Conditions</a> and
            <a href="#" className="text-gray-500 underline"> Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorLogin;