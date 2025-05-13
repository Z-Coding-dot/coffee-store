import React from 'react'
import leaf from "../assets/images/leaf.png"; 
import { FaFacebook, FaInstagram, FaLocationArrow, FaPhone, FaWhatsapp } from 'react-icons/fa';
import footerLog1 from '../assets/images/footerLog1.png';
import footerLog2 from '../assets/images/footerLog2.png';


const Footer = () => {
  return (
    <footer>
    <div className='bg-[#28221e] md:h-[390px] text-white'>
      <div className="container mx-auto px-2 py-2 md:px-4 md:py-4 md:w-3/4">
        <div className="flex justify-center items-center my-5">
          <h1 className="text-3xl lg:text-4xl font-bold text-white -tracking-tight">
            اریک کافه
          </h1>
          <span className="mb-5">
            <img src={leaf} className="w-8 lg:w-8" alt="leaf decoration" />
          </span>
        </div>
        <h3 className="text-center text-[12px] font-bold md:text-xl tracking-tight text-white my-5">
          لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از <br />
          آن متن تستی مینویسند!
        </h3>
        <ul className="my-8 flex flex-wrap justify-center items-center gap-8  md:gap-12">
          <li>
            <a href="#">●دسته بندی کلی یک </a>
          </li>
          <li>
            <a href="#">●دسته بندی کلی یک </a>
          </li>
          <li>
            <a href="#">●دسته بندی کلی یک </a>
          </li>
          <li>
            <a href="#">●دسته بندی کلی یک </a>
          </li>
          <li>
            <a href="#">●دسته بندی کلی یک </a>
          </li>
          <li>
            <a href="#">●دسته بندی کلی یک </a>
          </li>
        </ul>
        <hr className="text-gray-600 hidden md:block " />
        <div className="flex md:justify-between justify-center items-center flex-wrap my-5">
          <div>
            <div className="flex justify-center items-center ">
              <div className="rounded-full px-2 py-2 bg-[#3f3c39] mx-4">
                <FaPhone className="size-4 " />
              </div>
              <p className="flex justify-center items-center md:text-xl font-bold">
                123232434
                <span className="text-orange-900 font-bold text-xl">-۰۲۱</span>
              </p>
            </div>
            <div className="flex my-4">
              <div className="rounded-full px-2 py-2 bg-[#3f3c39] mx-4">
                <FaLocationArrow className="size-4 " />
              </div>
              <p className="flex justify-center items-center text-[12px] md:text-[16px] font-semibold">
              تهران خیابان تهرانی کوچه تهران پلاک ۱۲
              </p>
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center gap-4 my-5'>
                <img src={footerLog1} />
                <img src={footerLog2} />
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="flex sm:justify-between flex-col-reverse sm:flex-row items-center px-2 md:px-6 py-4  text-white bg-[#1a1613] md:h-[60px]">
            <p className='text-[13px] my-3'><span className='sm:text-[16px] text-[12px]'>&copy; </span>تمام حقوق این وب سایت متعلق به قهوه اریک میباشد</p>
            <div className='flex sm:justify-center items-center gap-4 text-xl'>
                <FaFacebook/>
                <FaWhatsapp/>
                <FaInstagram/>
            </div>
      </div>
    </footer>
  );
}

export default Footer
