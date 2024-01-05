import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import AvocatProfile from './components/AvocatProfile'
import RateFrom from './components/RateFrom'
import Blogs from './components/Blogs'
import HireAvocatForm from './components/HireAvocatForm'

function Avocat() {
    return (
        <div className='  relative w-full '>
            <Navbar />
            <div className=' flex flex-col md:p-48 gap-10'>
                <AvocatProfile />
                <RateFrom />
                <Blogs />
                <HireAvocatForm />
            </div>
            <Footer />
        </div>
    )
}

export default Avocat