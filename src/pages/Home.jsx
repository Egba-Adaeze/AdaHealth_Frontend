import React from 'react';
import doctor2 from '../../src/assets/Images/doctor2.png';
import Doctor2 from '../../src/assets/Images/Doctor2.jpg';
import doctor3 from '../../src/assets/Images/doctor3.png';
import icon01 from '../../src/assets/Images/icon01.png';
import icon02 from '../../src/assets/Images/icon02.png';
import icon03 from '../../src/assets/Images/icon03.png';
import Doctors from './Doctors/Doctors.jsx';

const Home = () => {
  return (
    <>
      <header className="header flex items-center bg-teal-50 font-serif">
        <div className="container mt-4">
          <div className="flex items-center justify-between">
            {/* ****** logo ****** */}
            <div>{/* <img src={} alt="" className='w-[10rem]'/> */}</div>

            {/* ******* menu ****** */}
            <div className="navigation">
              <ul className="menu flex gap-[2.7rem]">
                <li>
                  <a href="/"> Home</a>
                </li>
                <li>
                  <a href="/Doctors"> Find a doctor</a>
                </li>
                <li>
                  <a href="/Notifications">Notifications</a>
                </li>
                <li>
                  <button className="text-white bg-blue-500 border px-2 rounded">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-teal-50 pl-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mt-6">
            <p className="text-2xl md:text-4xl font-bold mt-2 md:mt-6">
              Your Health, <br /> Our Responsibility
            </p>
            <p className="mt-2 md:mt-4">
              We provide accessibility, convenience, real-time availability,
              <br /> patients can take control of their healthcare journey.
            </p>
            <button className="border bg-blue-600 py-2 px-6 rounded-full text-white mt-4 md:mt-6 font-medium">
              <a href="/Doctors">Request an Appointment</a>
            </button>
            <div className="mt-4 md:mt-6">
              <ul className="flex">
                <li className="mx-4 md:mx-6 font-bold text-xl md:text-3xl">
                  30+{' '}
                </li>
                <li className="mx-4 md:mx-6 font-bold text-xl md:text-3xl">
                  15+{' '}
                </li>
                <li className="mx-4 md:mx-6 font-bold text-xl md:text-3xl">
                  100+
                </li>
              </ul>
            </div>
            <div className="mt-4 md:mt-6">
              <ul className="flex">
                <li className="mx-2 md:mx-4">Years of Experience </li>
                <li className="mx-2 md:mx-4">Clinical Location </li>
                <li className="mx-6 md:mx-12">Patient Satisfaction</li>
              </ul>
            </div>
          </div>

    <div className='md:w-1/2 flex justify-center mt-[3rem]'> 
    <img src={Doctor2} alt="" className='w-[20rem] h-[55vh] mx-[1rem] h-auto md:w-[55vh]'/>
    <span className='grid mx-[2rem] w-[10rem]'>  <img src={doctor2} alt="" className='' />
    <img src={doctor3} alt="" className=' mt-[1rem]' /></span>
   
    </div>
        </div>
        <div className="text-2xl md:text-4xl mt-6 md:mt-12 text-center font-bold">
          Providing the best medical Services
        </div>
        <p className="text-center mt-4 md:mt-8">
          We provide accessibility, convenience, real-time availability,
          <br />
          patients can take control of their healthcare journey.
        </p>
      <div className='flex flex-wrap justify-center items-center mt-5 md:mt-6'>
          <div className='m-2 md:m-4 lg:m-6 text-center'>
            <img src={icon01} alt="" />
            <p>Find a doctor</p>
          </div>
          <div className='m-2 md:m-4 lg:m-6 text-center'>
            <img src={icon02} alt="" />
            <p>Find a Location</p>
          </div>
          <div className='m-2 md:m-4 lg:m-6 text-center'>
            <img src={icon03} alt="" />
            <p className='md:mx-4 lg:mx-[6rem]'>Book an appointment</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
