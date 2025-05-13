import React from 'react'
import { motion } from "framer-motion";

const Banners = () => {
  return (
    <div className="container mx-auto px-4 py-5 lg:py-10 mt-34">
      <div className="grid grid-cols-12 gap-4">
        <motion.div
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 50}}
          transition={{duration: 1, ease: 'linear'}}
           className="col-span-12 md:col-span-3 bg-[#28221e] lg:w-[270px] lg:h-[150px] 
           hover:bg-amber-900 hover:scale-105 duration-300 ease-in-out h-30 rounded-2xl flex justify-center items-center">
          <h2 className="text-white md:text-3xl text-xl font-bold">جایگاه بنر</h2>
        </motion.div>
        <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 50}}
          transition={{duration: 1, ease: 'linear'}}
           className="col-span-6  md:col-span-3 bg-[#28221e] lg:w-[270px] lg:h-[150px] 
           hover:bg-amber-900 hover:scale-105 duration-300 ease-in-out h-30 rounded-2xl flex justify-center items-center">
          <h2 className="text-white md:text-3xl text-xl font-bold">جایگاه بنر</h2>
        </motion.div>
        <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -50}}
          transition={{duration: 1, ease: 'linear'}}
           className="col-span-6 md:col-span-3 bg-[#28221e] lg:w-[270px] lg:h-[150px] 
           hover:bg-amber-900 hover:scale-105 duration-300 ease-in-out h-30 rounded-2xl flex justify-center items-center">
          <h2 className="text-white md:text-3xl text-xl font-bold">جایگاه بنر</h2>
        </motion.div>
        <motion.div
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 50}}
          transition={{duration: 1, ease: 'linear'}}
           className="col-span-12 md:col-span-3 bg-[#28221e] lg:w-[270px] lg:h-[150px] 
           hover:bg-amber-900 hover:scale-105 duration-300 ease-in-out h-30 rounded-2xl flex justify-center items-center">
          <h2 className="text-white md:text-3xl text-xl font-bold">جایگاه بنر</h2>
        </motion.div>
      </div>
    </div>
  );
}

export default Banners
