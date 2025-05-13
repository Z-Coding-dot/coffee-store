import React, { useState } from 'react'
import productdescriptionmage1 from '../assets/images/productDescriptionImage-1.png';
import productdescriptimage2 from '../assets/images/productDescriptionImage-2.png';
import vector from '../assets/images/Vector.png'
import { useRef } from 'react';
import { specialProducts } from '../Products';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { tabs } from '../Products';

const ProductsDescriptions = () => {
      const [activeTab, setActiveTab] = useState(0);
     const sliderRef = useRef(null);
    
      var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3, // Default to 3 visible columns on larger screens
        slidesToScroll: 1,
        initialSlide: 0,
        rows: 1, // Ensure it's always a single row
        slidesPerRow: 1, // Each slide occupies one cell
        vertical: false, // Ensure horizontal sliding
        verticalSwiping: false, // Disable vertical swiping
        responsive: [
          {
            breakpoint: 1024, // Large screens (and up)
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              rows: 1,
              slidesPerRow: 1,
              vertical: false,
              verticalSwiping: false,
            },
          },
          {
            breakpoint: 768, // Medium screens (adjust as needed)
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              rows: 1,
              slidesPerRow: 1,
              vertical: false,
              verticalSwiping: false,
            },
          },
          {
            breakpoint: 480, // Small screens (and down)
            settings: {
              autoplay: true,
              autoplaySpeed: 3000,
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 1,
              slidesPerRow: 1,
              vertical: false,
              verticalSwiping: false,
            },
          },
        ],
      };
    
      const nextSlide = () =>{sliderRef.current.slickNext();}
      const prevSlide = () =>{sliderRef.current.slickPrev();}

  return (  
        <div className='lg:px-10 mx-auto px-4 py-5'>
        <div className='mx-auto px-5 py-5 lg:px-12 lg:py-10 lg:my-10 w-[320px] lg:w-[1161px] lg:h-[921px] rounded-xl border border-gray-300'>
            <ul className='lg:mx-8 lg:my-4 flex gap-4 items-center lg:gap-8 cursor-pointer'>
            {tabs.map((tab, index) => (
                <li key={index} 
                onClick={() => setActiveTab(index)} 
                className={` lg:text-lg font-bold text-xs tracking-tight ${ activeTab === index 
                  ? 'text-amber-900 border-b-2 border-0'
                   : 'text-gray-500'}`} >{tab.label}</li>
              ))}
            </ul>
             <hr className='text-[#9E624C] my-5' />

             {/* section content */}
            <div className='lg:w-[1100px] lg:h-[256px] mx-auto'>
              <p className='text-sm leading-7'>{tabs[activeTab].descriptions}</p>
                <div className='flex flex-col lg:flex-row gap-5 lg:justify-evenly items-center my-12 '>
                    <img src={tabs[activeTab].image} className='lg:w-[486px] lg:h-[254px] rounded-lg'  />
                </div>
                 <div>
                    <h2 className='text-xl font-semibold mb-4'> <span className='text-[#9E624C]'>●</span> توضیحات محصول</h2>
                    <p className='text-sm leading-7'>{tabs[activeTab].additionalDescriptions}</p>
                 </div>
            </div>

        </div>
        {/* items section */}
            <div className='flex items-center lg:my-8 px-4 py-5'>
                <img src={vector} className='size-[50px] lg:ml-8' />
                <div>
                    <h2 className='text-2xl font-semibold'>پیشنهاد ها</h2>
                    <p className='text-[16px] text-gray-700'>محصولات مشابه دیگر را ببینید ...</p>
                </div>
            </div>
            <div className="flex justify-center items-center my-4 sm:my-5 sm:gap-8 mb-12">
            <button className="hidden lg:block mr-2 px-2 py-2 text-[8px] sm:text-xl sm:px-3 
            sm:py-3 bg-[#f2e5da] rounded-2xl cursor-pointer hover:bg-[#28121e] hover:text-white">
              <FaGreaterThan onClick={nextSlide} />
            </button>
            <div className="relative overflow-hidden">
              <Slider ref={sliderRef} {...settings}>
                {specialProducts.map((spec, index) => (
                  <div key={index} className="lg:px-6 mx-auto px-3">
                    <div className="border mx-auto text-center border-gray-400 lg:px-8 lg:mx-12 rounded-xl lg:w-[310px] lg:h-[400px]
                           px-4 w-[270px] h-[280px] hover:bg-orange-200 hover:scale-105 duration-300 ease-in-out">
                      <div className="hidden lg:flex justify-start items-center">
                        <p className="text-center mt-2 mx-2 sm:mt-5 bg-black rounded-full px-3 py-1 text-white ">
                          {spec.discount}٪
                        </p>
                      </div>
                      <Link to={'/Products'}>
                      <img
                        src={spec.image}
                        alt="special products"
                        className=" lg:w-[149px] lg:h-[210px] w-[160px] px-4 py-2 mx-auto my-3 "
                      />
                      <h2 className="text-bold text-xl text-end text-black tracking-tighter mx-2 my-3">
                        {spec.name}
                      </h2>
                      <div className="hidden lg:flex justify-between items-center px-2">
                        <p className="text-medium font-bold sm:text-[16px] text-[12px] text-gray-600 my-3 line-through">
                          {spec.price}
                        </p>
                        <p className="text-medium text-gray-500 my-2 sm:text-[16px] text-[12px]">
                          {spec.brand}
                        </p>
                      </div>
                      <p className="sm:text-[16px] text-[14px] font-bold text-orange-800 text-start mb-3 px-4">
                        {spec.specialDiscount}
                      </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <button className="hidden lg:block px-2 ml-2 py-2 text-[8px] hover:bg-[#28121e] hover:text-white
             sm:text-xl sm:px-3 sm:py-3 bg-[#f2e5da] rounded-2xl cursor-pointer">
              <FaLessThan onClick={prevSlide} />
            </button>
          </div>
      </div>
  )
}

export default ProductsDescriptions
