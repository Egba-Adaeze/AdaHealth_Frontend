import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";

const BookAppointment = ({  ele }) => {
  const [formDetails, setFormDetails] = useState({
    date: "",
    time: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const bookAppointment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await toast.promise(
        axios.post(
          "http://localhost:8000/api/appointment/bookappointment",
          {
            doctorId: ele?.userId?._id,
            date: formDetails.date,
            time: formDetails.time,
            doctorname: `${ele?.userId?.firstname} ${ele?.userId?.lastname}`,
          },
          ),
        {
          success: "Appointment booked successfully",
          error: "Unable to book appointment",
          loading: "Booking appointment...",
        }
      );
      
    } catch (error) {
      return error;
    }
  };

  return (
    <>
    <div className="w-full">
      <div className="w-full ">
        <div className="border bg-indigo-950 w-[35%] h-[50vh] mt-[5rem] ml-[25rem] rounded-[10px]">
          <h2 className="text-[23px] font-semibold font-serif text-white text-center mt-4">Book Appointment</h2>
      
     
          <div >
            <form >
              <input
                type="date"
                name="date"
                className="p-2 bg-teal-50 ml-[8rem] w-[13rem]"
                value={formDetails.date}
                onChange={inputChange}

              />
              <br/><br/>
              <input
                type="time"
                name="time"
                className="p-2 bg-teal-50 ml-[8rem] w-[13rem] rounded-[5px]"
                value={formDetails.time}
                onChange={inputChange}
              />
              <br/> <br/>
              <button
                type="submit"
                className="border bg-blue-600 p-2 text-white w-[13rem] ml-[8rem] rounded-[5px] font-semibold"
                >
                Click to pay
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default BookAppointment;