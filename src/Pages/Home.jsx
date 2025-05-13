import React from 'react'
import leaf from '../assets/images/leaf.png'
import handImage  from '../assets/images/home-image-hand.png'
import { FaArrowLeft } from 'react-icons/fa';
import img from '../assets/images/img.png';
import Products from '../components/Products';
import BestItems from '../components/BestItems';
import Tutorials from '../components/Tutorials';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {motion} from 'motion/react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          {/* First Column */}
          <div className="col-span-1 bg-[#28221e] h-auto lg:h-[400px] rounded-xl relative">
            <div className="text-white p-6 lg:p-12 flex flex-col items-center lg:items-start">
              <p className="text-lg lg:text-xl mb-4 lg:mb-6">Erick Coffee</p>
              <div className="relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  اریک کافه
                </h1>
                <span className="absolute -top-0 lg:-top-4 -left-9">
                  <img
                    src={leaf}
                    className="w-8 lg:w-14"
                    alt="leaf decoration"
                  />
                </span>
              </div>
              <h3 className="text-sm md:text-base lg:text-lg my-4 lg:my-6 text-center lg:text-right">
                کامل ترین تجهیزات کافه و رستوران در ایران
              </h3>
              <Link to={"/products"}>
                <button className="flex justify-center items-center px-6 py-3 lg:px-8 lg:py-4 bg-[#716c68] text-white rounded-full font-semibold hover:bg-[#5a5552] transition-colors">
                  مشاهده محصولات{" "}
                  <FaArrowLeft className="mr-2 lg:mr-5 w-4 lg:w-6" />
                </button>
              </Link>
            </div>

            {/* Second Column - Inside First Column on Mobile */}
            <div className="lg:hidden relative h-[150px] bg-gradient-to-l from-[#847669] to-[#c7c0bb] rounded-xl overflow-hidden my-8 mx-4">
              <div className="text-white p-6">
                <h3 className="text-2xl font-bold">کـــافـــــه از تــــــو</h3>
                <p className="text-lg">تجهیزات با ما</p>
                <FaArrowLeft className="w-8 mt-4 lg:w-12 cursor-pointer" />
              </div>
              <div className="absolute -bottom-4 left-0">
                <img
                  src={handImage}
                  className="w-full max-w-[400px] h-auto object-contain"
                  alt="hand holding coffee"
                />
              </div>
            </div>
          </div>

          {/* Second Column - Only visible on Desktop */}
          <div className="hidden lg:block relative col-span-2 h-[400px] bg-gradient-to-l from-[#847669] to-[#c7c0bb] rounded-xl overflow-hidden">
            <div className="text-white p-12 lg:my-12 lg:mr-5">
              <h3 className="text-4xl font-bold">کـــافـــــه از تــــــو</h3>
              <p className="text-2xl">تجهیزات با ما</p>
              <FaArrowLeft className="w-12 mt-6" />
            </div>
            <div className="absolute -top-12 lg:top-2 left-0">
              <img
                src={handImage}
                className="w-full max-w-[600px] h-auto object-contain"
                alt="hand holding coffee"
              />
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 10, x: 10 }}
          animate={{ opacity: 10, x: 200 }}
          transition={{
            duration: 3.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="mt-10 lg:mt-20 bg-[#f2e5da] 
        h-10 overflow-x-hidden rounded-4xl bg-repeat-x"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "auto 50%",
            backgroundPosition: "0 50%, 10% 50%",
          }}
        ></motion.div>
        <Products />
        <BestItems />
        <Tutorials />
      </div>
      <Footer />
    </div>
  );
}

export default Home
