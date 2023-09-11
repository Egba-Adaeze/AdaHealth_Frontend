import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Gif from '../assets/Images/signup.gif'

export default function Signup() {
  // const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    firstname: "",
    lastname: "",
    gender: "",
    picture: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();
 
  const onChangeHandler = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      await axios
        .post("http://localhost:8000/api/user/register", inputs)
        .then((res) => {
          console.log(res.data);
          navigate("/login");
          //setLoading(false);
          alert("User registered successfully!!");
        });
    } catch (err) {
      console.log(err);
      // setLoading(false);
    }
  };

  return (

    <div className='pt-16 font-serif w-full bg-teal-50  '> 
    <p className='text-center text-[25px] text-indigo-950 ml-[17rem]'> Create Account</p> 
    <div className="mx-[15rem] gap-10 w-full register-container flex flex-row text-sm ">
     <img src={Gif} alt='' className='w-[30%] h-[26rem] mt-8' />
     <form onSubmit={onSubmit} className="register-form flex flex-col  mt-7 w-full">
   
          <input
            type="text"
            name="firstname"
            placeholder="Enter your firstname"
            value={inputs.firstname}
            id= "firstname"
            onChange={onChangeHandler}
            className="h-5 w-[50%] border-b-2 border-indigo-950 rounded-[5px] outline-none px-6 bg-teal-50 "
          /><br/><br/>

          <input
            type="text"
            name="lastname"
            placeholder="Enter your last name"
            value={inputs.lastname}
            id= "lastname"
            onChange={onChangeHandler}
            className='h-5 w-[50%] border-b-2 border-indigo-950 rounded-[5px] outline-none px-6 bg-teal-50 '
         
          /><br/><br/>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={inputs.email}
            id= "email"
            onChange={onChangeHandler}
            className="h-5 w-[50%] border-b-2 border-indigo-950 rounded-[5px] outline-none px-6 bg-teal-50 "
            
          /><br/><br/>
          <span className='flex flex-row bg-teal-50 w-full'>
          <input
          type="file"
          name="profile-pic"
          value={inputs['profile-pic']}
          id="profile-pic"
          onChange={onChangeHandler}
          className="form-input"
/>

<select id="gender" name="gender" onChange={onChangeHandler} className='bg-teal-50 mb-2'>
  <option value="" disabled defaultValue>Select</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select> </span>
<br/><br/>

<input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={onChangeHandler}
            value={inputs.password}
            id= "password"
            className="h-5 w-[50%] border-b-2 border-indigo-950 rounded-[5px] outline-none px-2 bg-teal-50 "
            
          /><br/><br/>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
             value={inputs.confirmPassword}
            id= "confirmPassword"
            onChange={onChangeHandler}
            className="h-5 w-[50%] border-b-2 border-indigo-950 rounded-[5px] outline-none px-6 bg-teal-50 "
          /><br/><br/>

          <button
            type="submit"
            className="bg-indigo-950 text-white rounded-full py-2  w-[50%]  font-serif font-semibold "
         
          >
            sign up
          </button>
        </form>
        </div>
        <a
          href="/login"
          className=" text-indigo-950 flex justify-center  ml-[30rem]"
        >
          Registered? Login here
    
        </a>
    </div>
  )
};

