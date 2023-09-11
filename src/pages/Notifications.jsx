import React from 'react'
import {useState, useEffect } from 'react';
import axios from 'axios';


const Notifications = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const responseData = async () => {
      try {
        await axios
          .get("http://localhost:8000/api/appointment/getallappointments", bookings)
          .then((res) => {
            console.log(res.data);
      
          });
      } catch (err) {
        console.log(err);
        // setLoading(false);
      }
    }
    responseData();
  }, []);
  
    

  return (
    <div className='bg-teal-50 pt-12'>
        <p className='text-[2rem] font-serif text-center'>Notifications</p>
    <table className=' border-collapse w-full  bg-teal-50'>
       <thead> 
            <tr className= 'w-full h-24 rounded bg-teal-50 font-serif ' >
                 
                    <th>Doctor</th>
                    <th>Patient</th>
                    <th>Appointment Date</th>
                    <th>Appointment Time</th>
                    <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {bookings.map((booking, index) => (
              <tr>
                
                <td>{booking.userId.firstname} {booking.userId.lastname}</td>

                <td>{booking.doctorId.firstname} {booking.doctorId.lastname}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.status}</td>

                </tr>
                ))}
            </tbody>
           
    </table>
      </div>
  )
}
export default Notifications;
