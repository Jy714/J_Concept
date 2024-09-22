import React, { useRef } from 'react'
import { toast } from "react-toastify"
import emailjs from "@emailjs/browser"

const NewsLetterBox = () => {

  const form = useRef();


  const onSubmitHandler = async (e) => { 
    e.preventDefault();

    emailjs
      .sendForm('service_oxwayts', 'template_5qql20z', form.current, {
        publicKey: 'sXmdmQhayhmIHy3ZU',
      })
      .then(
        () => {
          toast.success('THANK YOU!');
          form.current.reset()
        },
        (error) => {
          toast.error('FAILED...', error.text);
        },
      );
  }

  return (
    <div className='text-center'>
      <p className='font-medium text-2xl text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <form onSubmit={onSubmitHandler} ref={form} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" name="user_email" placeholder='Enter your email here' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
