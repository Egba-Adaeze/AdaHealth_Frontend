import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/doctor/getalldoctors');
      setDoctors(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleDoctorSelect = (doctor) => {
    navigate('/bookAppointment', { state: { doctor } });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Our Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-teal-50 py-2 px-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">{doctor.firstname} {doctor.lastname}</h2>
            <p className="text-gray-700 mb-2">Specialization: {doctor.specialization}</p>
            <p className="text-gray-700 mb-2">Experience: {doctor.experience} yrs</p>
            <p className="text-gray-700 mb-2">Fees per consultation: N{doctor.fees}</p>
            <p className="text-gray-700 mb-2">Phone: {doctor.phone}</p>
            <button
              onClick={() => handleDoctorSelect(doctor)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
