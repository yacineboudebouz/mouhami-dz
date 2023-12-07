import React from 'react'
import { useState } from 'react'
import { meet } from '../../../assets'
import { motion } from 'framer-motion'
import { littleFadeIn, littleFadeInX, slideIn, textVariant } from '../../../utils/motion'
import { SectionWrapper } from '../../../hoc'

const Propos = () => {
    const [problem, setProblem] = useState('')
    const [location, setLocation] = useState('')
    const handleProblemChange = (e) => {
        setProblem(e.target.value)
    }
    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    }
    return (
        <main className=' flex flex-col items-center  w-full  mt-24' id='propos'>
            <div className=' flex flex-row justify-center w-full px-24 gap-2'>
                <motion.input variants={littleFadeInX()} onChange={handleProblemChange} type='text' placeholder='Problème juridique' className=' outline-2 p-3 shadow-lg outline-primary' value={problem} />
                <motion.input variants={textVariant()} onChange={handleLocationChange} type='text' placeholder='Wilaya, code postal  . . .' className=' outline-2 p-3 shadow-lg outline-primary' value={location} />
                <motion.button variants={littleFadeIn()} className=' bg-primary flex items-center p-3 cursor-pointer text-white hover:bg-amber-800 transition duration-300'>Trouver Un Avocat</motion.button>
            </div>
            <div className=" sm:flex-row flex flex-col justify-between items-center my-10" >
                <div className=" text-start mx-4 w-2/4 flex flex-col justify-between h-full">
                    <motion.p variants={textVariant()} className="max-w-2xl my-8 font-bold text-[30px]">A propos de nous</motion.p>
                    <motion.p variants={slideIn('left')} className="max-w-2xl my-8 text-[20px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</motion.p>
                </div>
                <motion.div variants={littleFadeIn()} className=' relative h-[300px] w-[300px]  bg-cover '>
                    <img src={meet} className=' absolute w-full h-full cover-fill   border-firstBgColor border-4' />
                </motion.div>
            </div>
        </main>
    )
}

export default SectionWrapper(Propos, 'propos')