import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserProfile from './components/UserProfile'
import MyBookings from './components/MyBookings'
import Home from './components/Home'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashBoard'
import OperatorLogin from './components/OperatorLogin'
import PassengerDetails from './components/PassengerDetails'
import PassengerTicket from './components/PassengerTicket'

function App() {
  return (
    <Routes>
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/' element={<Home />} />
        <Route path='/mybookings' element={<MyBookings />} />
        <Route path='/operatorlogin' element={<OperatorLogin/>}></Route>
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/passengerdetails' element={<PassengerDetails />} />
        <Route path='/passengerticket' element={<PassengerTicket />} />

    </Routes>
  )
}

export default App
