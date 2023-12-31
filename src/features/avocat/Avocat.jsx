import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import AvocatProfile from './components/AvocatProfile'

function Avocat() {
    return (
        <div className='  relative w-full  '>
            <Navbar />
            <AvocatProfile />
            <Footer />
        </div>
    )
}

export default Avocat