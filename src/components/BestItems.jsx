import React from 'react'
import vector from '../assets/images/Vector.png';
import BestPro from './BestPro';

const BestItems = () => {
  return (
    <div className="container mx-auto">
      <div className="sm:rounded-full rounded-xl border border-gray-400 flex sm:justify-center flex-col md:flex-row md:flex-r items-center p-2">
        <div className="flex flex-col md:flex-row items-center text-start flex-1 sm:px-6 sm:py-2">
          <img src={vector} className="sm:size-[40px] size-10 mx-4" />
          <div>
            <h2 className="sm:text-2xl my-2 font-bold mb-2 text-center">پرفروش ترین ها</h2>
            <p className="text-sm text-center mb-4 sm:mb-0 text-gray-600 font-semibold">
              پرفروش ترین محصولات اریک کافه
            </p>
          </div>
        </div>
        <div className='rounded-xl bg-gray-300 px-2 py-2 sm:py-4 sm:px-4 sm:ml-12'>
          <ul className="flex justify-center items-center gap-4 sm:gap-4 sm:ml-24">
            <li className='bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 rounded-lg'>
              <a href="#" className='font-bold text-[12px] sm:text-xl'>همه دسته بندی ها</a>
            </li>
            <li>
              <a href="#" className='text-[12px] sm:text-[16px]'>آسیاب قهوه</a>
            </li>
            <li>
              <a href="#" className='text-[12px] sm:text-[16px]'>ابزار باریستا</a>
            </li>
            <li className='hidden sm:block'>
              <a href="#">بویلر آب جوش</a>
            </li>
            <li className='hidden sm:block'>
              <a href="#">بویلر آب جوش</a>
            </li>
            <li className='hidden sm:block'>
              <a href="#">تجهیزات کافه و رستوران</a>
            </li>
            <li className='hidden sm:block'>
              <a href="#">شو کیک</a>
            </li>
          </ul>
        </div>
      </div>
      <BestPro/>
    </div>
  );
}

export default BestItems
