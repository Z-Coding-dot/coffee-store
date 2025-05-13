import React from "react";
import vector from "../assets/images/Vector.png";
import logo from "../assets/images/Logo.png";
import { FaPhone } from "react-icons/fa";
import footerImg from '../assets/images/loginfooter.png'
import {Link} from "react-router-dom";

const Verify = () => {
    return (
        <div>
          <nav className="flex md:justify-between items-center justify-center mt-[34px] lg:mx-12 md:px-24">
            <Link to='/'>
            <div className=" flex justify-center md:justify-start items-center">
              <img
                src={logo}
                alt="logo"
                className=" md:w-[145px] md:h-[50px] w-[110px]"/>
            </div>
            </Link>
            <div className="hidden md:flex items-center justify-center">
              <div>
                <p className="text-[#9e624c] text-[22px] font-bold text-left">
                  -۰۲۱
                </p>
                <p className="text-[18px] font-semibold text-[#28121e]">
                  123232434
                </p>
              </div>
              <div className=" bg-orange-100 rounded-full p-3 mr-3">
                <img
                  src={vector}
                  alt="vector image"
                  className="w-[25px] h-[25px]"
                />
              </div>
            </div>
          </nav>
          <div className="flex justify-center items-center mt-24 ">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-[#f2e5da] md:px-6 px-4 md:py-6 py-4 mb-8">
                <img src={vector} className="size-10" />
              </div>
              <h2 className="text-center md:text-3xl text-xl font-semibold mb-6">
                ثبت نام / ورود
              </h2>
              <p className="text-center md:text-[16px] text-[12px] font-medium mb-10 text-gray-500">
              کد ارسال شده به شماره ۰۹۱۲۲۴۵۳۳۴۳ را وارد کنید </p>
              <form className="flex flex-col gap-4">
                <label
                  htmlFor="phone"
                  className="md:text-[14px] text-[12px] tracking-tight text-gray-800 font-bold "
                >
                   ورود کد
                </label>
                <div className="flex justify-center items-center gap-2">
                <input pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" min={0} max={1}
                  type="tel" required className="rounded-lg border text-2xl
                 border-orange-800 focus:outline-none px-4 py-2 w-[50px] h-[50px]"/>
                <input pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" min={0} max={1}
                  type="tel" required className="rounded-lg border text-2xl
                 border-orange-800 focus:outline-none px-4 py-2 w-[50px] h-[50px]"/>
                <input pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" min={0} max={1}
                  type="tel" required className="rounded-lg border text-2xl
                 border-orange-800 focus:outline-none px-4 py-2 w-[50px] h-[50px]"/>
                <input pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" min={0} max={1}
                  type="tel" required className="rounded-lg border text-2xl
                 border-orange-800 focus:outline-none px-4 py-2 w-[50px] h-[50px]"/>
                <input pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" min={0} max={1}
                  type="tel" required className="rounded-lg border text-2xl
                 border-orange-800 focus:outline-none px-4 py-2 w-[50px] h-[50px]"/>
                </div>
                <p className="text-center text-[12px] text-gray-500 font-semibold">ارسال مجدد کد (۳۰ثانیه)</p>
                  <button
                    className="bg-[#9e624c] px-4 py-2 rounded-lg w-full
                 text-white hover:bg-[#7f4e4a] cursor-pointer"> تایید و ورود</button>
              </form>
            </div>
          </div>
          <div className="flex flex-row-reverse mt-30 sm:mt-auto">
            <img src={footerImg} />
          </div>
        </div>
      );
}

export default Verify
