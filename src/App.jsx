import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './features/landing/Landing'
import Auth from './features/auth/Auth';
import Navbar from './features/common/Navbar';
const App = () => {
  return (

    <BrowserRouter>
      {/* <div className=' fixed w-full z-50'>
        <Navbar />
      </div> */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>

    </BrowserRouter>


  )
}

export default App
