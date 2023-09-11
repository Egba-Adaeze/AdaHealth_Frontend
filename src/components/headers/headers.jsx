import React from 'react'
import { useEffect, useRef } from 'react';
// import logo from "../../assets/Images/logo.png"



const headers = () => {
  return (
    <header className='header flex items-center bg-teal-50 font-serif '>
    <div className='container mt-4'>
      <div className='flex itmes-center justify-between'>
        {/* ****** logo ****** */}
        <div>
          {/* <img src={} alt="" className='w-[10rem]'/> */}
        </div>

        {/* ******* menu ****** */}
        <div className='navigation'>
          <ul className='menu flex  gap-[2.7rem]'>
            <li> <a
          href="/"> Home</a></li>
            <li><a
          href="/Doctors"> Find a doctor</a></li>
           <li><a
          href="/Notifications">Notifications</a></li>
            <li><button className=' text-white bg-blue-500 border px-2 rounded'> Logout </button></li>
          </ul>
        </div>  
      </div>
      
       
    </div>
    </header>
  )
}

export default headers