import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
  
  const { currency } = useContext(ShopContext);
  
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img src={image[0]} alt="" className='hover:scale-110 transition ease-in-out' />
      </div>
      <div className='flex flex-col items-center'>
        {/* Can adding brand of shoes in this field */}
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium text-gray-400'>{currency} { price}</p>
      </div>
      
    </Link>
  )
}

export default ProductItem
