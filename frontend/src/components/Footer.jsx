import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo} alt="logo" className='mb-5 w-40' />
          <p className='w-full md:w-2/3 text-gray-600'>
            

In a vibrant neighborhood, J_CONCEPT opened in 2020, quickly becoming a hub for sneaker lovers. One rainy afternoon, a young girl named Alise stepped in, captivated by the colorful kicks on display. The friendly staff helped her find the perfect pair, sparking a sense of belonging in a community that celebrated individuality. From that day on, J_CONCEPT became Alise's favorite spot to connect and dream, one step at a time.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+60 12-345-6789</li>
            <li>Jy714@J_CONCEPT.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright text */}
      <div>
        <hr />
        <p className='py-5 text-md text-center'>Copyright {new Date().getFullYear() }&copy; J_CONCEPT.com - All Right Reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer
