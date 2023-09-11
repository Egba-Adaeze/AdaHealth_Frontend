import React from 'react'
import Home from "../pages/Home.jsx"
import Contact from "../pages/Contact.jsx"
import Login from "../pages/Login.jsx"
import Doctors from "../pages/Doctors/Doctors.jsx"
import DoctorsDetails from "../pages/Doctors/bookAppointment.jsx"
import Signup from "../pages/Signup.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notifications from '../pages/Notifications.jsx'
import BookAppointment from '../pages/Doctors/bookAppointment.jsx'
import Paystack from '../pages/paystack.jsx'

const routers = () => {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Doctors" element={<Doctors/>} />
      <Route path="/bookAppointment" element={<BookAppointment/>} />
      <Route path="/register" element={<Signup/>}/>
      <Route path="/Notifications" element={<Notifications/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/paystack" element= {<Paystack/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default routers