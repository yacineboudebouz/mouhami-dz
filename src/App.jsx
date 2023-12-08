import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './features/landing/Landing'
import Auth from './features/auth/Auth';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
