import React, { useRef } from 'react'
import vector from '../assets/images/Vector.png'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import { products } from '../Products';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SpecialProducts from './SpecialProducts';

const Products = () => {

  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 9,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
            autoplay: true,
            autoplaySpeed: 3000,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const nextSlide = () =>{
    sliderRef.current.slickNext()
  }
  const prevSlide = () => {
    sliderRef.current.slickPrev()
  }


  return (
    <div className="container mx-auto px-4 mt-5 py-8 lg:px-16">
      <div className="flex justify-between items-center">
        <img src={vector} alt="vector image" className="w-8 h-8" />
        <div className="flex flex-col flex-1 mx-2">
          <h3 className="font-bold text-xl tracking-tighter">
            دسته بندی محصولات
          </h3>
          <p className="font-medium text-[10px] lg:text-[14px] tracking-tighter">
            از میان بهترین ها ، بهترین هارا برای شما فراهم کرده ایم!
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={nextSlide}
            className="px-4 py-3 bg-[#f2e5da] rounded-2xl cursor-pointer hover:bg-[#28121e] hover:text-white"
          >
            <FaGreaterThan className="w-3 h-4 text-sm" />
          </button>
          <button
            onClick={prevSlide}
            className="px-4 py-3 bg-[#f2e5da] rounded-2xl cursor-pointer hover:bg-[#28121e] hover:text-white"
          >
            <FaLessThan className="w-3 h-4 text-sm" />
          </button>
        </div>
      </div>

      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {products.map((product, index) => (
            <div key={index} className="px-2">
              <div className="flex flex-col items-center lg:hover:bg-orange-200 hover:scale-105 rounded-2xl duration-300 ease-in-out my-5">
                <div className="flex flex-col items-center my-8">
                  <img
                    src={product.image}
                    alt="coffee bean"
                    className="w-14 h-18 lg:w-24 lg:h-28 "
                  />
                  <p className="-tracking-tighter text-sm">{product.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <SpecialProducts />
    </div>
  );
}

export default Products
