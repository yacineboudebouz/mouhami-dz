import React from 'react'
import { motion } from 'framer-motion'

import { logo, facebook, telegram, linkedin } from './../assets/index'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className=' bg-avocats-pattern bg-cover bg-no-repeat w-full h-full'>
            <div className=' flex md:flex-row flex-col justify-between items-center p-20'>
                <div className=' flex flex-col gap-4 '>
                    <div className=' flex flex-row items-center justify-center'>
                        <NavLink to='/sign-up-admin'>
                            <motion.img drag whileDrag={{ rotate: [0, 45, 0, -45, 0], transition: { duration: 1.5, repeat: Infinity, repeatType: 'loop' } }} whileHover={{ scale: 1.1 }} src={logo} className='h-[35px] w-[35px]' />
                        </NavLink>
                        <p className=' flex items-center  font-bold text-[20px] px-3 text-white'><span className=' text-primary font-bold text-[20px] px-3 '>DZ</span>Mouhami</p>
                    </div>
                    <div className=' flex flex-row gap-4 items-center justify-center '>
                        <img src={facebook} className=' cursor-pointer' />
                        <img src={telegram} className=' cursor-pointer' />
                        <img src={linkedin} className=' cursor-pointer' />
                    </div>
                </div>
                <div className=' flex md:flex-row flex-col md:mt-0 mt-5  gap-10'>
                    <div className=' flex flex-col text-white'>
                        <h1 className=' font-bold text-[25px] text-white'>Nos services</h1>
                        <p>conflits familiaux</p>
                        <p>constitutionnel</p>
                        <p>Travail</p>
                        <p>administratif</p>
                    </div>
                    <div className=' flex flex-col text-white'>
                        <h1 className=' font-bold text-[25px] text-white'>Resources</h1>
                        <a href='#cons' className=' hover:text-primary transition duration-200'>Conseils juridiques</a>
                        <a href='#blogs' className=' hover:text-primary transition duration-200'>Blogs</a>
                        <a>FAQ</a>

                    </div>
                    <div className=' flex flex-col text-white'>
                        <h1 className=' font-bold text-[25px] text-white'>DZ Mouhami</h1>
                        <a href='#propos' className=' hover:text-primary transition duration-200'>a propos de nous</a>
                        <a href='#avocats' className=' hover:text-primary transition duration-200'>Nos avocats</a>
                        <a href='#services' className=' hover:text-primary transition duration-200'>Nos services</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer


