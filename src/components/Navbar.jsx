import React, { useState } from 'react'
import {  FaBars, FaInstagram, FaShoppingBag } from 'react-icons/fa'
import logo from '../assets/images/Logo.png';
import vector from '../assets/images/Vector.png';
import MobileNavbar from './MobileNavbar';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from 'react-redux';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const cartItems = useSelector((state) => state.cart.items);
    const itemCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <nav className="container mx-auto px-4 lg:px-12">
      <>
        {/* Upper Navbar  */}
        <div className="flex justify-between items-center mt-[34px] lg:mx-12">
             <div className="bg-[#d7d2d0] rounded-full p-2 md:hidden lg:hidden">
                        <FaBars
                          onClick={() => setOpen(true)}
                          className={` ${open ? "hidden" : "block"} w-6 h-6
                            cursor-pointer text-[#28221e] md:hidden`}
                        />
                      </div>
          <div className=" hidden lg:flex items-center justify-center">
            <div>
              <p className="text-[#9e624c] text-[22px] font-bold text-left">
                -۰۲۱
              </p>
              <p className="text-[18px] font-semibold text-[#28121e]">
                123232434
              </p>
            </div>
            <div className="bg-orange-100 rounded-full p-3 mr-3">
              <img
                src={vector}
                alt="vector image"
                className="w-[25px] h-[25px]"
              />
            </div>
          </div>
          <Link to='/'>
          <div>
            <img src={logo} alt="logo" className="w-[145px] h-[50px]" />
          </div>
          </Link>

          <div className="flex items-center">
            <Link to={'/login'}>
            <button className="hidden md:block rounded-full px-2.5
             py-2 border cursor-pointe hover:bg-[#28121e] hover:text-white cursor-pointer">
              ورود / ثبت نام
            </button>
            </Link >
            <Link to={'/AddToCart'}>
            <div className="relative bg-[#9e624c] rounded-full p-3 mr-3">
              <FaShoppingBag className="bg-rounded-full text-white" />
              <span className="absolute -top-5 left-8 rounded-full bg-[#9e624c] px-2  text-white font-bold">{itemCount}</span>
            </div>
            </Link>
          </div>
        </div>

        {/* Lower Navbar  */}

        <div className="hidden lg:flex justify-between items-center px-8 mt-5 bg-[#28221e] rounded-full h-[68px]">
          <ul className="flex items-center justify-center gap-8">
            <li>
              <a href="#" className="text-[16px] text-white">
                {" "}
                ●صفحه اصلی
              </a>
            </li>
            <select className="text-[16px] text-white rtl text-right">
              <option className="bg-stone-900 text-white">لیست محصولات</option>
              <option className="bg-stone-900 text-white"> قیمت ها</option>
              <option className="bg-stone-900 text-white">قهوهای محبوب</option>
            </select>
            <li>
              <a href="#" className="text-[16px] text-white">خدمات</a>
            </li>
            <li>
              <a href="#" className="text-[16px] text-white">آموزش ها</a>
            </li>
            <li>
              <a href="#" className="text-[16px] text-white">درباره ما</a>
            </li>
            <li>
              <a href="#" className="text-[16px] text-white">تماس با ما</a>
            </li>
          </ul>

          <div className="flex items-center justify-center rounded-full bg-stone-600 px-4 py-2 cursor-pointer">
            <p className="text-16px text-white font-semibold">Erick.Cafe</p>
            <FaInstagram className="w-[24px] h-[24px] mr-2 text-white" />
          </div>
        </div>

        <MobileNavbar open={open} setOpen={setOpen} />
      </>
    </nav>
  );
}

export default Navbar
