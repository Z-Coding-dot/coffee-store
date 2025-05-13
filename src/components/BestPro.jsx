import React from 'react'
import { specialProducts } from '../Products'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BestPro = () => {
  return (
    <div className="container mx-auto py-2 px-2 mt-12">
      <div className="grid grid-cols-12 gap-4">
        {specialProducts.map((product, index) => (
          <div
            key={index}
            className="lg:col-span-3 col-span-6 
         rounded-xl border border-gray-400 md:px-6 md:py-4 md:hover-shadow-lg md:hover:bg-orange-200 md:hover:transition-all md:duration-300 ease-in-out md:hover:scale-105"
          >
            <div className="hidden sm:flex justify-end ">
              <p className="md:px-4 md:py-2 bg-gray-900 rounded-full text-white text-[14px] font-medium">
                {product.discount}%
              </p>
            </div>
            <Link to={'/Products'}>
            <img
              src={product.image}
              className="md:w-[140px] md:h-[190px] w-[90px] h-[110px] my-3 md:mr-20 md:my-5 mx-auto"/>
            <h2 className="text-start font-semibold md:text-[18px] mx-2 text-[14px] tracking-tighter">
              {product.name}
            </h2>
            <div className="flex justify-between items-center my-3">
              <p className="text-start md:text-[14px] font-medium text-gray-600 hidden sm:block">
                {product.brand}
              </p>
              <p className="text-start md:text-[14px] font-medium text-gray-600 line-through hidden sm:block">
                {product.price}
              </p>
            </div>
            </Link>
            <p className="text-end font-bold md:text-[16px] mx-3 my-2 text-orange-900">
              {product.specialDiscount}
            </p>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center my-12'>
        <div className='flex justify-between items-center px-4 py-2 md:px-8 md:py-3 rounded-full
         text-white bg-[#9e624c] hover:bg-amber-950 cursor-pointer'>
        <button className='md:ml-10 ml-5 text-[14px] md:text-xl'>مشاهده بیشتر</button>
        <FaArrowLeft/>
        </div>
      </div>
    </div>
  );
}

export default BestPro
