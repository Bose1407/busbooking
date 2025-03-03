import React from 'react'
import { Link } from 'react-router-dom'
function Index() {
  return (
    <div>
      <div className='bg-purple-900 h-500'>
            <h1 className='text-center text-yellow-400 font-bold text-3xl p-5'>Tradel - Pages</h1>
            <div className='border-4 border-yellow-500 w-100 ml-110 p-4 mt-20'>
                <Link to='/home'><p className='text-center text-white mt-3'>🏠Click Here To Visit Home Page</p></Link>
                <Link to='/profile'><p className='text-center text-white mt-3'>🧔Click Here To Visit Profile Page</p></Link>
                <Link to='/operatorlogin'><p className='text-center text-white mt-3'>🧑‍🏫Click Here To Operator Login Page</p></Link>
                <Link to='/mybookings'><p className='text-center text-white mt-3'>📔Click Here To Visit Booking Page</p></Link>
                <Link to='/admindashboard'><p className='text-center text-white mt-3'>💨Click Here To Admin DashBoard Page</p></Link>
                <Link to='/passengerdetails'><p className='text-center text-white mt-3'>🧑‍🎨Click Here To Visity Passenger Detail Page</p></Link>
                <Link to='/passengerticket'><p className='text-center text-white mt-3'>🎫Click Here To Visity Passenger Ticket Page</p></Link>
            </div>
      </div>
    </div>
  )
}

export default Index
