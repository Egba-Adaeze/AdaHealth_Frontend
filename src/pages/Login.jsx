import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EmojiPicker from 'emoji-picker-react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email: email,
      password: password,
    };

    try {
      await axios
        .post("http://localhost:8000/api/user/login", data)
        .then((res) => {
          console.log(res.data);
          

          navigate("/");
          setLoading(false);
          alert("Login successful!!");
        });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    
    <div className='box-border  pt-[8rem] pl-[20rem] pr-[25rem] bg-teal-50 pb-[5rem]'> 
    
    <div className='w-full bg-gray-50 py-[5rem] shadow-2xl shadow-indigo-500/40 rounded-[2rem]'>
    <p className='pl-[9rem] pb-8 font-serif text-[23px]'> Hello!, Welcome back</p>
         <form onSubmit={onSubmit} className=""> 
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={onChangeEmail}
             className="h-5 w-[50%] border-b-2 bg-gray-50 border-indigo-950 rounded-[5px] outline-none px-6 bg-teal-50 ml-[7rem]"/><br/><br/>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={onChangePassword}
            className="h-5 w-[50%] border-b-2 bg-gray-50 border-indigo-950 rounded-[5px] outline-none px-2 bg-teal-50 ml-[7rem]"
            
          /><br/><br/>
          <button className='border bg-indigo-950 text-white py-2 w-[50%] ml-[7rem] rounded'> Login</button>
          </form>
    </div>
    </div>
  )
}

export default Login