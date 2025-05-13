import React from 'react'
import Home from './Pages/Home'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/Login';
import Verify from './Pages/Verify';
import Products from './Pages/Products';
import AddToCart from './Pages/AddToCart';
const App = () => {
  return (
    <div className='bg-[#fff8f5'>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Verify' element={<Verify/>}/>
        <Route path='/Products' element={<Products/>} />
        <Route path='/AddToCart' element={<AddToCart/>}/>
        </Routes> 
       </BrowserRouter>
    </div>
  )
}

export default App

