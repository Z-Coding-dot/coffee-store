import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import special1 from '../assets/images/special3.png'
import { FaCarSide, FaCube, FaEllipsisH, FaExpand, FaHeadphones, FaMoneyBill, FaPhone, } from 'react-icons/fa'
import ProductsDescriptions from '../components/ProductsDescriptions'
import { productImage } from '../Products'
import { useDispatch } from 'react-redux'
import { addToCart,} from '../CartSlice'
import { specialProducts } from '../Products'
import Footer from '../components/Footer'

const Products = () => {

  const [imagesId, setImagesId] = useState(special1)
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(0)

  const handleAddToCart = () => {
    const product = specialProducts[0]
    dispatch(addToCart(product))
  }
  const handleIncrement =() =>{
    setQuantity(qua => qua + 1)
  }
  const handleDecrement =() =>{
    setQuantity(qua => qua - 1)
  }

  return (
    <div>
      <Navbar />
      <div className="overflow-hidden mx-auto my-5 md:px-6 lg:px-8 py-5 ">
        <div className="grid md:grid-cols-3 gap-4 lg:gap-10">
          {/* First Column  */}
          <div className="mx-auto">
            <div
              className="relative flex justify-center items-center rounded-xl
             md:w-[466px] md:h-[466px] w-[280px] h-[350px] mx-auto
             border border-gray-500">
              <p className="absolute top-4 left-4 rounded-full px-4 py-1 font-bold text-white bg-[#28221e]">
                20%
              </p>
              <img src={imagesId} className='lg:w-[150px] lg:h-[300px]' />
              <FaExpand className="absolute bottom-4 right-4 size-6 cursor-pointer" />
            </div>

            <div className="flex justify-items-center gap-2">
              <div className=" md:w-[78px] md:h-[75px] w-[40px] h-[56px] rounded-xl lg:border my-5 border-gray-300 hover:border-[#28221e] cursor-pointer">
                <FaEllipsisH className="w-6 h-7 mx-auto mt-4 text-gray-400 " />
              </div>
              {productImage.map((img, index) =>(
              <div key={index} className="md:w-[78px] md:h-[75px] size-[52px] rounded-xl border my-5 border-gray-500 hover:border-[#28221e] cursor-pointer">
                <img
                  src={img.image}
                  className="md:w-[30px] h-[40px] mx-auto mt-2"
                  onClick={() => setImagesId(img.image)}
                />
              </div>
              ))}
            </div>
          </div>
          {/* Second Column */}
          <div className="mx-auto sm:mx-12 px-6">
            <div>
              <h2 className="text-[24px] font-semibold">
                دانه قهوه باکسی برند Boxilian
              </h2>
              <p className="text-gray-500 text-xl my-4">دانه قهوه | برند : Boxilian</p>
              <h3 className="text-xl font-bold tracking-tight mt-8">
                ویژگی های محصول
              </h3>
              <ul className="my-5 tracking-tight">
                <li className="text-gray-500 text-xl my-3">
                  &gt; جنس محصول:{" "}
                  <span className="text-black">آلومینوم خالص ۱۰۰٪</span>
                </li>
                <li className="text-gray-500 text-xl my-3">
                  &gt; کارایی: <span className="text-black"> استفاده روزمره</span>
                </li>
                <li className="text-gray-500 text-xl my-3">
                  &gt; اندازه:<span className="text-black"> ۵۰۰ گرم </span>
                </li>
                <li className="text-gray-500 text-xl my-3">
                  &gt; نوع محصول:<span className="text-black"> روبوستا</span>
                </li>
                <li className="text-gray-500 text-xl my-3">
                  &gt;نوع بسته بندی: <span className="text-black">کاغذی</span>
                </li>
              </ul>
              <div>
                <h3 className="text-[16px] font-bold tracking-tight">
                  یک گزینه را انتخاب کنید:
                </h3>
                <div className="flex justify-start items-center gap-3 mx-auto">
                  <p className="text-xl text-gray-400">مقدار:</p>
                  <select
                    name="quantity"
                    className="w-[207px] h-[50px] text-xl my-5 border border-gray-400 px-4 rounded-lg focus:outline-none"
                  >
                    <option value="1">۱ کیلوگرم</option>
                    <option value="2"> ۲ کیلوگرم</option>
                    <option value="3"> ۳ کیلوگرم</option>
                    <option value="4"> ۴ کیلوگرم</option>
                  </select>
                </div>
              </div>
              <div className="my-5 md:w-[570px] md:h-[97px] w-[340px] h-[150px]
                   sm:flex-row sm:justify-between flex flex-col-reverse gap-8 sm:gap-0 items-center
               bg-[#fff8f5] rounded-lg">
                <div className="flex justify-center items-center">
                  <button 
                    className="bg-[#9e624c] text-white py-3 px-8 mx-4 my-2 rounded-full font-bold text-[14px] cursor-pointer hover:bg-[#2d251d]"
                    onClick={handleAddToCart}
                  >
                    افزودن به سبد خرید
                  </button>
                  <p onClick={handleIncrement} className="text-center font-bold bg-[#F2E5DA] rounded-full text-[18px] w-[32px] h-[32px] cursor-pointer hover:bg-[#a99b8f]">
                    +
                  </p>
                  <p className="mx-3 text-center font-bold text-xl">{quantity}</p>
                  <p onClick={handleDecrement} className="text-center font-bold bg-[#F2E5DA] rounded-full text-[18px] w-[32px] h-[32px] cursor-pointer hover:bg-[#a99b8f]">
                    -
                  </p>
                </div>
                <div className="flex md:justify-end justify-between gap-8 sm:mx-6 items-center">
                  <p className="md:hidden text-[14px] text-gray-500 font-medium ml-12 md:ml-0">
                    قیمت:
                  </p>
                  <p className="text-[#9E624C] text-[16px] mr-10 md:mr-0">
                    تومان
                    <span className="text-[#9E624C] text-[34px] font-bold">
                      ۲۴۰٫۰۰۰
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Third Column */}
          <div className=" md:mr-30 flex md:flex-col flex-col-reverse items-center gap-4">
            <div className="space-y-4 flex md:flex-col gap-4">
              <div className="flex justify-start items-center md:w-[317px] md:h-[77px] w-[170px] h-[71px] rounded-xl bg-[#E9E9E8] px-3 py-2">
                <FaCarSide className="size-8 text-gray-500 cursor-pointer" />
                <div className="flex flex-col mx-4">
                  <h3 className="md:text-[16px] text-[12px] font-bold">
                    شرایط ارسال
                  </h3>
                  <p className="md:text-[14px] text-[11px] text-gray-500 tracking-tight">
                    حدود ۲ الی ۶ روز کاری
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center md:w-[317px] md:h-[77px] w-[170px] h-[71px] rounded-xl bg-[#E9E9E8] px-3 md: py-2">
                <FaCube className="size-8 text-gray-500 cursor-pointer" />
                <div className="flex flex-col mx-4">
                  <h3 className="md:text-[16px] text-[12px] font-bold">
                    ضمانت کالا
                  </h3>
                  <p className="md:text-[14px] text-[11px] text-gray-500">
                    تا ۷ روز ضمانت عودت کالا
                  </p>
                </div>
              </div>
              <div className="hidden md:flex justify-start items-center md:w-[317px] md:h-[77px] w-[186px] h-[71px] rounded-xl bg-[#E9E9E8] px-3 md: py-2">
                <FaHeadphones className="size-8 text-gray-500 cursor-pointer" />
                <div className="flex flex-col mx-4">
                  <h3 className="md:text-[16px] text-[12px] font-bold">
                    پشتیبانی
                  </h3>
                  <p className="md:text-[14px] text-[11px] text-gray-500">
                    پشتیبانی ۲۴ ساعته از تلگرام
                  </p>
                </div>
              </div>
              <div className="hidden md:flex justify-start items-center md:w-[317px] md:h-[77px] w-[186px] h-[71px] rounded-xl bg-[#E9E9E8] px-3 md: py-2">
                <FaMoneyBill className="size-8 text-gray-500 cursor-pointer" />
                <div className="flex flex-col mx-4">
                  <h3 className="md:text-[16px] text-[12px] font-bold">
                    پرداخت
                  </h3>
                  <p className="md:text-[14px] text-[11px] text-gray-500">
                    پرداخت امن از درگاه مطمئن
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex md:flex-col justify-center items-center gap-3 w-[351px] md:w-[317px] h-[77px] md:h-[191px] border border-gray-300 rounded-xl">
                <span className="relative md:w-[60px] md:h-[60px] w-[49px] h-[49px] bg-[#F2E5DA] rounded-full my-3">
                  <FaPhone className="absolute top-4 left-5 size-6 text-[#9E624C]" />
                </span>
                <div className="flex flex-col mx-4 md:mx-0">
                  <p className="text-[14px] font-medium">
                    نیاز به مشاوره دارید؟
                  </p>
                  <p className="text-[19px]">
                    123232434{" "}
                    <span className="text-[24px] text-[#9E624C] font-bold">
                      -۰۲۱
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F2E5DA] h-[59px] w-full flex sm:justify-between items-center px-4 md:px-10 lg:px-18">
        <h2 className="sm:text-[18px] font-bold text-[#9E624C]">
          جایگاهی برای نمایش ایونت یا تبلیغ یا اسلوگان
        </h2>
        <p className="w-[27px] h-[27px] bg-[#9E624C] rounded-full"></p>
      </div>
      <ProductsDescriptions/>
      <Footer/>
    </div>
  );
}

export default Products
