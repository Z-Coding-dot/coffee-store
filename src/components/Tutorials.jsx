import React from 'react'
import tutorials1 from '../assets/images/tutorials-img1.png';
import tutorials2 from '../assets/images/tutorials-img2.png';
import tutorials3 from '../assets/images/tutorials-img3.png';
import { FaArrowLeft } from 'react-icons/fa';

const Tutorials = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1, // Default for mobile
    //     slidesToScroll: 1,
    //     mobileFirst: true,
    //     responsive: [
    //       {
    //         breakpoint: 768, // Screens equal to or wider than 768px
    //         settings: "unslick", // Destroys slick on larger screens
    //       },
    //     ],
    //   };
      
  return (
    <div className="h-screen">
      <div className="container flex justify-center items-center px-2 py-2 md:px-4 md:py-4">
        <div className="bg-[#28221e] rounded-3xl sm:h-[320px] h-[250px] md:w-[1300px] px-3">
          <div className="flex justify-center items-center py-4">
            <h2 className="text-center md:text-2xl text-white font-bold">
              آموزش های اریک کافه
            </h2>
          </div>
          <div className="flex md:justify-evenly justify-center items-center mx-auto ">
            <div
              className="bg-amber-50 rounded-t-2xl  lg:max-w-[330px] md:px-3 px-5 py-2 
               hover:bg-orange-200 hover:scale-105 duration-300 ease-in-out md:py-3 shadow-lg shadow-amber-50"
            >
              <img
                src={tutorials1}
                className="md:w-[320px]  w-auto rounded-2xl"
              />
              <h3 className="text-start text-[14px] py-2 md:text-[16px] tracking-tighter">
                لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن
                متن تستی مینویسند!
              </h3>
              <div className="flex justify-between items-center my-3">
                <button className="flex justify-center items-center text-orange-950 text-[12px] sm:text-sm">
                  مشاهده بیشتر
                  <FaArrowLeft className="mx-4" />
                </button>
                <p className="text-[12px] sm:text-sm px-2 text-gray-500 tracking-tighter">
                  ۱۹ اردیبهشت ۱۴۰۳
                </p>
              </div>
            </div>
            <div
              className="hidden sm:block bg-white rounded-2xl  max-w-[330px]
               hover:bg-orange-200 hover:scale-105 duration-300 ease-in-out md:px-3 md:py-3 shadow-lg shadow-amber-50"
            >
              <img src={tutorials2} className="md:w-[320px] rounded-2xl" />
              <h3 className="text-start py-2 md:text-[16px]">
                لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن
                متن تستی مینویسند!
              </h3>
              <div className="flex justify-between items-center my-3">
                <button className="flex justify-center items-center text-orange-950 text-sm">
                  مشاهده بیشتر
                  <FaArrowLeft className="mx-4" />
                </button>
                <p className="text-sm px-2 text-gray-500 tracking-tighter">
                  ۱۹ اردیبهشت ۱۴۰۳
                </p>
              </div>
            </div>
            <div
              className="hidden sm:block bg-white rounded-2xl  max-w-[330px]
               hover:bg-orange-200 hover:scale-105 duration-300 ease-in-out  md:px-3 md:py-3 shadow-lg shadow-amber-50"
            >
              <img src={tutorials3} className="md:w-[320px] rounded-2xl" />
              <h3 className="text-start py-2 md:text-[16px]">
                لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن
                متن تستی مینویسند!
              </h3>
              <div className="flex justify-between items-center my-3">
                <button className="flex justify-center items-center text-orange-950 text-sm">
                  مشاهده بیشتر
                  <FaArrowLeft className="mx-4" />
                </button>
                <p className="text-sm px-2 text-gray-500 tracking-tighter">
                  ۱۹ اردیبهشت ۱۴۰۳
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <div
              className="flex justify-between items-center px-4 py-2 md:px-8 md:py-3 rounded-full
                     text-white bg-[#9e624c] hover:bg-amber-950 cursor-pointer"
            >
              <button className="md:ml-10 ml-5 text-[14px] md:text-xl">
                مشاهده بیشتر
              </button>
              <FaArrowLeft />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorials
