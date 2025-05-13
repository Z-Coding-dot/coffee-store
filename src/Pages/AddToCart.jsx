import React from 'react'
import Navbar from '../components/Navbar'
import { FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementItem, decrementItem } from '../CartSlice';
import { Link } from 'react-router-dom';

const AddToCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementItem(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  return (
    <div>
      <Navbar />
       <div className="container mx-auto px-4 py-8 lg:px-32 lg:py-16">
      <h2 className="text-2xl font-bold mb-5 text-center">سبد خرید</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 shadow-md bg-white p-6 text-center">
          {cartItems.length === 0 ? (
            <div>
              <p className='text-xl font-semibold mb-12'>که هیچ محصولی در سبد خرید شما وجود ندارد.</p>
               <Link to={'/Products'}><p className='text-blue-700 font-bold underline'>بازگشت به صفحه اصلی</p></Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 py-4 border-b">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 rounded-lg object-cover hidden lg:block"
                />
                <div className="flex-1">
                  <p className="text-gray-600">{item.name}</p>
                  <div className="flex gap-4 items-center mt-5">
                    <button
                      className="text-gray-600 px-2 py-1 font-bold rounded-lg hover:bg-blue-600 hover:text-white"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                    <span className="font-bold mx-4">{item.quantity || 1}</span>
                    <button
                      className="text-gray-600 font-bold px-2 py-1 rounded-lg hover:bg-red-600 hover:text-white"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button>
                    <div
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                      onClick={() => handleRemove(item.id)}
                    >
                      <FaTrash size={20} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold">{item.price} تومان</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="shadow-md rounded-lg p-8 bg-white">
            <h3 className="text-xl font-semibold mb-5">خلاصه سفارش</h3>
            <div className="space-y-2 mb-3">
              <div className="flex justify-between mb-3">
                <span>جمع کل</span>
                <span>{cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0)} تومان</span>
              </div>
              <div className="flex justify-between mb-3">
                <span>هزینه ارسال</span>
                <span>رایگان</span>
              </div>
              <div className="flex justify-between my-3 font-bold">
                <span>مبلغ قابل پرداخت</span>
                <span>{cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0)} تومان</span>
              </div>
              <button className="w-full bg-blue-700 text-white px-4 py-2 rounded-lg my-4 cursor-pointer hover:bg-blue-800">
              پرداخت و ادامه سفارش
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AddToCart
