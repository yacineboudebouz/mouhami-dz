import React from 'react'
import { useState } from 'react'
import { meet } from '../../../assets'
import { hammer, services } from '../../../assets'
import { useDispatch, useSelector } from "react-redux";
import { changeIndex, id } from '../landingSlice';
import { motion } from 'framer-motion'
import { littleFadeIn, littleFadeInX, slideIn, textVariant } from '../../../utils/motion'
import { SectionWrapper } from '../../../hoc'
import contentLits from '../../../constants/landing'

const Propos = () => {

    const dispatch = useDispatch()
    const sel = useSelector(id)


    const Card = ({ index }) => {
        return (
            <motion.button whileHover={{ scale: 1.1 }} onClick={() => {
                dispatch(changeIndex(index))
            }} className={`${index === sel ? ' bg-primary text-white' : ' bg-white text-black'} shadow-lg py-2 px-2 w-[200px] flex justify-center items-center `}>
                <p className=' font-light text-[20px]'>{contentLits[index].id}</p>
            </motion.button>
        )
    }

    const AnimatedTextCards = ({ title, description }) => {
        return (
            <div className=" text-start mx-4 w-2/4 flex flex-col justify-between h-full">
                <motion.p variants={littleFadeIn()} animate={{ opacity: 1, transition: { duration: 0.5 } }} className="max-w-2xl my-4 font-bold  text-[20px] md:text-[30px]">{title}</motion.p>
                <motion.p variants={littleFadeIn()} animate={{ opacity: 1, transition: { duration: 0.5 } }} className="max-w-2xl mb-2  text-[15px] md:text-[20px]  ">{description}</motion.p>
            </div>
        )
    }

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
            <div className=' flex md:flex-row flex-col justify-center w-full px-24 gap-2'>
                <motion.input variants={littleFadeInX()} onChange={handleProblemChange} type='text' placeholder='Problème juridique' className=' outline-2 p-3 shadow-lg outline-primary' value={problem} />
                <motion.input variants={textVariant()} onChange={handleLocationChange} type='text' placeholder='Wilaya, code postal  . . .' className=' outline-2 p-3 shadow-lg outline-primary' value={location} />
                <motion.button variants={littleFadeIn()} className=' bg-primary flex items-center p-3 justify-center cursor-pointer text-white hover:bg-amber-800 transition duration-300'>Trouver Un Avocat</motion.button>
            </div>
            <div className=" sm:flex-row flex flex-col justify-between items-center my-10" >
                <div className=" text-start mx-4 w-2/4 flex flex-col justify-between h-full">
                    <motion.p variants={textVariant()} className="max-w-2xl md:my-8 my-2 font-bold text-[20px] md:text-[30px]">A propos de nous</motion.p>
                    <motion.p variants={slideIn('left')} className="max-w-2xl my-8 text-[15px] md:text-[20px] w-full ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</motion.p>
                </div>
                <motion.div variants={littleFadeIn()} className=' relative h-[300px] w-[300px]  bg-cover '>
                    <img src={meet} className=' absolute w-full h-full cover-fill   border-firstBgColor border-4' />
                </motion.div>
            </div>
            <div className=' flex gap-2 flex-row' id='services'>
                <p className=' font-bold text-primary text-[30px]'>Nos Services</p>
                <motion.img whileHover={{ scale: 1.1 }} src={hammer} drag className='h-[35px] w-[35px]' />
            </div>
            <ul className=' flex flex-row gap-3 py-2 transition flex-wrap justify-center px-10 duration-200 '>
                {contentLits.map((item, index) => {
                    return (
                        <motion.div variants={textVariant(index * 0.25)}>
                            <Card index={index} />
                        </motion.div>
                    )
                })}
            </ul>
            <div className=" sm:flex-row flex flex-col justify-between items-center my-10">
                <AnimatedTextCards title={contentLits[sel].title} description={contentLits[sel].description} key={contentLits[sel].title} />
                <motion.div variants={littleFadeInX()} className=' relative h-[300px] w-[300px]  bg-cover '>
                    <img src={services} className=' absolute w-full h-full cover-fill   ' />
                </motion.div>

            </div>


        </main>
    )
}

export default SectionWrapper(Propos, 'propos')