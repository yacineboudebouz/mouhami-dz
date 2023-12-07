import React from 'react'
import Hero from './components/Hero'
import Propos from './components/Propos'
import Services from './components/Services'
import { SectionWrapper } from '../../hoc'
const Landing = () => {
    return (
        <div className=' relative z-50  w-full'>
            <div className=' bg-hero-pattern bg-cover bg-no-repeat '>
                <Hero />
            </div>
            <Propos />
            <Services />
        </div>
    )
}

export default Landing