import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([])
  const [expandProduct,setExpandProduct] = useState(false)
  const productNum = expandProduct ? 20 : 10
  
  useEffect(() => {
    setLatestProducts(products.slice(0, productNum));
  }, [productNum,products])
  
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title header={"LATEST"} desc={"COLLECTION"} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
        </p>
      </div>

      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
      gap-4 gap-y-6'>
        {
          latestProducts.map((item,index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>

      {/* <div className='mt-6 p-1 bg-black text-white w-20 m-auto text-center rounded-xl cursor-pointer' onClick={() => { setExpandProduct(prev => !prev) }}>{expandProduct ? "Less" : "More"}</div> */}
      
      <div className='mt-6 flex justify-around' >
        <button className='px-6 py-2 bg-black text-white text-center rounded-xl cursor-pointer' onClick={() => { setExpandProduct(prev => !prev) }}>
          {expandProduct ? "Less" : "More"}
        </button>
      </div>
    </div>
  )
}

export default LatestCollection
