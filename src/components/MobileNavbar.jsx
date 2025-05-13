import React from 'react'
import { FaTimes } from 'react-icons/fa'
import logo from '../assets/images/Logo.png';

const MobileNavbar = ({ open, setOpen }) => {
  return (
    <nav className="">
      <div className={`md:hidden ${ open ? "px-4 bg-stone-300 z-10 min-h-screen fixed w-full top-0 bottom-0 right-0"  : "hidden"}
       rounded transition-all duration-1000 ease-in-out`} >
           
        <div className='flex justify-between items-center py-5 px-8'>
          <img src={logo} alt="logo" className="w-[120px] h-[45px]" />
          <FaTimes onClick={() => setOpen(false)} className='text-xl cursor-pointer text-black'/>
        </div> <hr />

        <ul className="flex py-5 px-8 flex-col gap-4">
          <li className='hover:bg-amber-50 rounded-full p-4'>
            <a href="#" className="text-[16px] text-black">
              {" "}
              ●صفحه اصلی
            </a>
          </li>
          <select className="text-[16px] text-black  text-right">
            <option className=" text-black">لیست محصولات</option>
            <option className=" text-black"> قیمت ها</option>
            <option className=" text-black">قهوهای محبوب</option>
          </select>
          <li className='hover:bg-amber-50 rounded-full p-4'>
            <a href="#" className="text-[16px] text-black">
              خدمات
            </a>
          </li>
          <li className='hover:bg-amber-50 rounded-full p-4'>
            <a href="#" className="text-[16px] text-black">
              آموزش ها
            </a>
          </li>
          <li className='hover:bg-amber-50 rounded-full p-4'>
            <a href="#" className="text-[16px] text-black">
              درباره ما
            </a>
          </li>
          <li className='hover:bg-amber-50 rounded-full p-4'>
            <a href="#" className="text-[16px] text-black">
              تماس با ما
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileNavbar
