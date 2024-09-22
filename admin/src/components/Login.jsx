import React, { useState } from 'react'
import axios from "axios"
import { backendUrl } from '../App.jsx';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets.js';

const Login = ({setToken}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmitHandler = async (e) => { 
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {email,password});
      if (response.data.success) {
        setToken(response.data.token);
        toast.success("Welcome Home");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${assets?.backgroundImage})`}}>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
      <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
      <form onSubmit={onSubmitHandler}>
        <div className='mb-3 min-w-72'>
          <p className='text-sm font-medium text-gray-700 mb-2'>Email Address </p> 
          <input className='rounded w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='your@email.com' required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className='mb-3 min-w-72'> 
          <p className='text-sm font-medium text-gray-700 mb-2'>Password </p> 
          <input className='rounded w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Enter your password' required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='w-full bg-black text-white text-sm px-4 py-2 rounded-md mt-2' type='submit'> Login </button>
      </form>
    </div>
    </div>
  )
}

export default Login
