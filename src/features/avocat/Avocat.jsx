import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import AvocatProfile from './components/AvocatProfile'

function Avocat() {
    return (
        <div className=' flex flex-col relative '>
            <Navbar />
            <AvocatProfile />
            <Footer />
        </div>
    )
}

export default Avocat