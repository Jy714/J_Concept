import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [box, setBox] = useState("desc");
  const [chartOpen, setChartOpen] = useState(false);

  const fetchProductData = async () => { 
    products.map((item) => { 
      if (item._id == productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => { 
    fetchProductData();
  },[productId,products])

  return productData ?  (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 relative'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index) => (
                <img onClick={()=>setImage(item)} src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="" className='w-full h-auto' />
          </div>
        </div>

        {/* Product Information  */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_dull_icon} alt="" className='w-3.5' />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          {/* Size chart */}
          <div className='hidden md:flex mt-3  gap-1 aligns-center cursor-pointer' onClick={() => { setChartOpen(true)}}>
            <img src={assets.sizeChart} alt="size" className='w-6' />
            <p className='text-blue-700 underline'>Size Chart</p>
          </div>

          <div className='flex flex-col gap-4 my-4'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=> setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item == size ? "border-orange-500 bg-gray-300" : ""}`} key={index}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=> addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & Return */}
      <div className='mt-20'>
        <div className='flex cursor-pointer'>
          <p className={`border px-5 py-3 text-sm font-semibold ${box === "desc"? "bg-gray-200 text-black" : ""}`} onClick={() => setBox("desc")}>Description</p>
          <p className={`border px-5 py-3 text-sm font-semibold ${box === "returns"? "bg-gray-200 text-black" : ""}`} onClick={()=> setBox("returns")}>Returns</p>
        </div>
        <div className='border px-6 py-6 text-sm text-gray-500'>
          {
            box === "desc" ? 
              <div className='flex flex-col gap-4'>
                <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
                <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
              </div>
              :
              <div className='flex flex-col gap-4'>
                <p>If you are not completely satisfied with your purchase, you may return the item to us for an exchange in its original condition complete with the box and accessories (if any) within 7 days of receiving your order, subject to eligibility.</p>
                <p>For more information, <a href="#" className='underline text-gray-700'>click here</a> </p>
              </div>
          }
        </div>
      </div>

      {/* Display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} id={productData._id} />
      
      {/* Size chart */}
      {
        chartOpen ? 
          <div className=' absolute w-[50%] bg-gray-500 top-10 right-[50%] translate-x-[50%] h-[430px] xl:w-[600px] xl:h-[500px]'>
            <div className='p-4'>
              <div className='flex justify-between text-3xl text-white items-center'>
              <h1 className='font-semibold'>Size guides</h1>
              <p onClick={()=>setChartOpen(false)} className='cursor-pointer hover:bg-slate-100/[0.4] py-1 px-2 rounded'>X</p>
              </div>
              <hr className='my-2' />
              <img src={assets.nikeChart} alt="" className='rounded-2xl mt-6 h-[90%]' />
            </div>
          </div>
          : ""
          }
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
