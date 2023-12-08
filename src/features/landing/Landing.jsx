import React from 'react'
import Hero from './components/Hero'
import Propos from './components/Propos'
import Avocats from './components/Avocats'
import Footer from './components/Footer'


const Landing = () => {
    return (
        <div className=' relative   w-full'>
            <Hero />
            <Propos />
            <Avocats />
            <Footer />
        </div>
    )
}

export default Landing