import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { backendUrl } = useContext(ShopContext);

  const getUserInfo = async () => { 
    const token = localStorage.getItem("token");

    if (!token) {
      return null;
    }

    const response = await axios.post(backendUrl + "/api/user/info", {},{headers:{token}});
    
    if (response.data.success) {
      setEmail(JSON.stringify(response.data.data).replaceAll('"',""))
    }
  }

  const onSubmitHandler = async (e) => { 
    e.preventDefault();

    try {
      const response = await axios.post(backendUrl+ "/api/user/edit", {name,email})
      
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message)
      }
      setName("")
      
    } catch (error) {
      console.error(error);
      toast.error(error.message)
      
    }
  }

  useEffect(() => { 
    getUserInfo();
  },[])

  return (
    <div className='w-full flex flex-col items-center text-left'>
      <div className='flex flex-col items-center'>
          <h3 className='text-3xl font-bold text-left'>Profile</h3>
        <p>Change your profile settings</p>
      </div>

      <form onSubmit={onSubmitHandler}>
        <div>
          <p className='my-1'>username</p>
          <input value={name} onChange={(e)=>setName(e.target.value)} className='w-full px-3 py-2 border border-gray-800' type="text" placeholder='enter your name' required />
        </div>

        <div>
          <p className='my-1'>email</p>
          <input className='w-full px-3 py-2 border border-gray-800 bg-gray-300' type="email" disabled defaultValue={email} />
        </div>

        <button type='submit' className='bg-black px-3 py-2 text-white mt-3' >Submit</button>
      </form>
    </div>
  )
}

export default MyProfile
