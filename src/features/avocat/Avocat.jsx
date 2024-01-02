import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import AvocatProfile from './components/AvocatProfile'
import RateFrom from './components/RateFrom'

function Avocat() {
    return (
        <div className='  relative w-full '>
            <Navbar />
            <div className=' flex flex-col md:p-48'>
                <AvocatProfile />
                <RateFrom />
            </div>
            <Footer />
        </div>
    )
}

export default Avocat