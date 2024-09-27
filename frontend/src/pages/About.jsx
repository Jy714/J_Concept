import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title header={"ABOUT"} desc={"US"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] md:max-h-[460px]' src={assets.about_img} alt="about" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to J_CONCEPT, your ultimate sneaker destination since 2020! More than just a store, we’re a community of sneaker enthusiasts dedicated to bringing you the latest styles, exclusive releases, and timeless classics. Our curated selection ranges from high-performance athletic footwear to trendy streetwear staples, ensuring something for everyone. </p>
          <p>With a knowledgeable staff ready to help you find the perfect pair, and regular events like sneaker swaps and workshops to connect with fellow sneakerheads, J_CONCEPT is where style meets function, and every sneaker tells a story. Your next favorite pair awaits!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at J_CONCEPT is to inspire and connect sneaker enthusiasts by providing an exceptional selection of footwear that blends style, comfort, and performance. Through personalized service, engaging events, and a commitment to quality, we aim to celebrate the culture of sneakers and foster a love for this timeless form of expression.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title header={"WHY"} desc={"CHOOSE US"} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About
