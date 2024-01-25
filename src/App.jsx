import React from 'react'
import { useState } from 'react';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './features/landing/Landing'
import Avocat from './features/avocat/avocat';
import './app/localization/i18n'
import Faq from './features/faq/faq';
import Blog from './features/blog/Blog';
import FindAvocat from './features/filter/FindAvocat';
import CompareAvocats from './features/comparing/CompareAvocats';
import SignUpAvocat from './features/Authentification/SignUpAvocat';
import SignUpAdmin from './features/Authentification/SignUpAdmin';
import LoginAdmin from './features/Authentification/LoginAdmin';
import LoginAvocat from './features/Authentification/LoginAvocat';



const App = () => {

  const [sharedData, setSharedData] = useState('');

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/avocat' element={<Avocat />} />
        <Route path='/faq' element={<Faq></Faq>} />
        <Route path='/blog/:id' element={<Blog></Blog>} />
        
        {/*we need to add this route for avocat profile instead of the previous one*/}
        <Route path='/avocat/:id' element={<Avocat />} />
        <Route path='/find-avocat' element={<FindAvocat getData={(data) => setSharedData(data)}></FindAvocat>} />
        <Route path='/compare-avocat' element={<CompareAvocats setData={sharedData}></CompareAvocats>} />
        <Route path='/sign-up-avocat' element={<SignUpAvocat></SignUpAvocat>} />
        <Route path='/sign-up-admin' element={<SignUpAdmin></SignUpAdmin>} />
        <Route path='/login-admin' element={<LoginAdmin></LoginAdmin>} />
        <Route path='/login-avocat' element={<LoginAvocat></LoginAvocat>} />
        <Route path='*' element={<h1>404</h1>} />

      </Routes>

    </BrowserRouter>



  )
}

export default App
