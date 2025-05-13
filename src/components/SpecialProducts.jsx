import React, { useRef } from 'react';
import { specialProducts } from '../Products';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import Slider from 'react-slick';
import Banners from './Banners';
import { Link } from 'react-router-dom';


const SpecialProducts = () => {

  const sliderRef = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
        autoplay:true,
        autoplaySpeed:3000,
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
          autoplay:true,
          autoplaySpeed:3000,
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
          autoplay:true,
          autoplaySpeed:3000,
          slidesToShow: 1,
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
          autoplay:true,
          autoplaySpeed:3000,
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
    <div className="container mx-auto py-10 sm:px-12 sm:py-24">
      <div className="rounded-2xl sm:h-[600px] h-[400px] bg-[#28221e]">
        <h2 className="text-center text-2xl font-bold text-white py-5">
          تخفیفات ویژه
        </h2>
        <div className="sm:mx-14 mx-2 rounded-t-2xl sm:px-12 bg-white sm:py-8 shadow-amber-100 shadow-2xl">
          <ul className="flex justify-center items-center text-[12px] sm:text-[15px] my-5 gap-2 sm:gap-8">
            <li>
              <a href="#" className="font-bold sm:text-2xl">
                دسته بندی ها
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-medium hover:text-[#9b6846] text-gray-600"
              >
                دانه قهوه
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-medium hover:text-[#9b6846] text-gray-600"
              >
                آسیاب قهوه
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hidden md:block text-medium hover:text-[#9b6846] text-gray-600"
              >
                ابزار باریستا
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hidden md:block text-medium hover:text-[#9b6846] text-gray-600"
              >
                بویلر آب جوش{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hidden md:block text-medium hover:text-[#9b6846] text-gray-600"
              >
                تجهیزات کافه و رستوران
              </a>
            </li>
          </ul>
          <hr className="text-gray-500" />
          <div className="flex justify-center items-center my-4 sm:my-5 sm:gap-8">
            <button className="px-2 py-2 text-[8px] sm:text-xl sm:px-3 
            sm:py-3 bg-[#f2e5da] rounded-2xl cursor-pointer hover:bg-[#28121e] hover:text-white">
              <FaGreaterThan onClick={nextSlide} />
            </button>
            <div className="relative overflow-hidden w-full ">

              <Slider ref={sliderRef} {...settings}>
                {specialProducts.map((spec, index) => (
                  <div key={index} className="px-2 sm:px-4 lg:px-6">
                    <div className="border text-center border-gray-400 sm:px-8 rounded-3xl
                                    hover:bg-orange-200 hover:scale-105 duration-300 ease-in-out">
                      <div className="flex justify-start items-center">
                        <p className="text-center mt-2 mx-2 sm:mt-5 bg-black rounded-full px-3 py-1 text-white ">
                          {spec.discount}٪
                        </p>
                      </div>
                      <Link to={'/Products'}>
                      <img
                        src={spec.image}
                        alt="special products"
                        className="object-fit size-[150px] px-4 py-2 mx-auto md:size-auto "
                      />
                      <h2 className="text-bold text-black tracking-tighter sm:my-4 ">
                        {spec.name}
                      </h2>
                      <div className="flex justify-between items-center px-4">
                        <p className="text-medium font-bold sm:text-[16px] text-[12px] text-gray-600 my-3 line-through">
                          {spec.price}
                        </p>
                        <p className="text-medium text-gray-500 my-3 sm:text-[16px] text-[12px]">
                          {spec.brand}
                        </p>
                      </div>
                      <p className="sm:text-[16px] text-[12px]   font-bold text-orange-800 text-start mb-3 px-4">
                        {spec.specialDiscount}
                      </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <button className="px-2 py-2 text-[8px] hover:bg-[#28121e] hover:text-white
             sm:text-xl sm:px-3 sm:py-3 bg-[#f2e5da] rounded-2xl cursor-pointer">
              <FaLessThan onClick={prevSlide} />
            </button>
          </div>
        </div>
      </div>
      <Banners />
    </div>
  );
};

export default SpecialProducts;