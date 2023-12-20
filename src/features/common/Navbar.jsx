import React from 'react'
import { motion } from 'framer-motion'
import { logo, menu, close } from '../../assets'

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className=' flex flex-row justify-between  top-0 left-0 p-5  bg-secondary w-full '>
            <div className=' flex flex-row items-center'>
                <motion.img drag whileDrag={{ rotate: [0, 45, 0, -45, 0], transition: { duration: 1.5, repeat: Infinity, repeatType: 'loop' } }} whileHover={{ scale: 1.1 }} src={logo} className='h-[35px] w-[35px]' />
                <p className=' flex items-center  font-bold text-[20px] px-3 text-white'><span className=' text-primary font-bold text-[20px] px-3 '>DZ</span>Mouhami</p>
            </div>
            <div className=' flex flex-row justify-evenly items-center'>
                <ul className=' flex-row  md:flex hidden'>
                    <motion.li whileHover={{ scale: 1.1, transition: { ease: "easeOut" } }} className=' text-white font-light mx-5 cursor-pointer hover:text-primary transition duration-500 '>Decouvrir dz mouhami </motion.li>
                    <Link to='/auth'>
                        <motion.li whileHover={{ scale: 1.1, transition: { ease: "easeOut" } }} className=' text-white font-light mx-5 cursor-pointer hover:text-primary transition duration-500 '>Se connecter</motion.li>
                    </Link>

                </ul>
                {/* <div className=' h-[30px] w-[30px] bg-red-900 md:hidden '>

                    </div> */}
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer duration-200 hover:rotate-90'
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${toggle ? 'flex' : 'hidden'} p-6  bg-slate-500  absolute top-10 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl  x`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            <motion.li whileHover={{ scale: 1.1, transition: { ease: "easeOut" } }} className=' text-white font-light mx-5 cursor-pointer hover:text-primary transition duration-500 '>Decouvrir dz mouhami </motion.li>
                            <motion.li whileHover={{ scale: 1.1, transition: { ease: "easeOut" } }} className=' text-white font-light mx-5 cursor-pointer hover:text-primary transition duration-500 '>Se connecter</motion.li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar