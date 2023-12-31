import React from 'react'
import Hero from './components/Hero'
import Propos from './components/Propos'
import Avocats from './components/Avocats'
import Footer from '../../common/Footer'
import Navbar from '../../common/Navbar'


const Landing = () => {


    return (
        <div className=' relative w-full'>
            <div className=' fixed w-full z-50'>
                <Navbar />
            </div>
            <Hero />
            <Propos />
            <Avocats />
            <Footer />
        </div>
    )
}

export default Landing