import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './features/landing/Landing'
import Auth from './features/auth/Auth';
import Avocat from './features/avocat/avocat';
import './app/localization/i18n'

const App = () => {
  return (

    <BrowserRouter>
      {/* <div className=' fixed w-full z-50'>
        <Navbar />
      </div> */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/avocat' element={<Avocat />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>

    </BrowserRouter>


  )
}

export default App
