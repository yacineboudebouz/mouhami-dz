import React from 'react'
import { hammer, meet } from '../../../assets'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { changeIndex, id } from '../landingSlice';
import contentLits from '../../../constants/landing'
import { SectionWrapper } from '../../../hoc'
import { fadeIn, littleFadeIn, littleFadeInX, textVariant } from '../../../utils/motion'
const Services = () => {

    const dispatch = useDispatch()
    const sel = useSelector(id)


    const Card = ({ index }) => {
        return (
            <motion.button whileHover={{ scale: 1.1 }} onClick={() => {
                dispatch(changeIndex(index))
            }} className={`${index === sel ? ' bg-primary text-white' : ' bg-white text-black'} shadow-lg py-2 px-3 w-[150px]  flex justify-center items-center `}>
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


    return (
        <main className=' flex flex-col justify-center items-center w-full'>
            <div className=' flex gap-2 flex-row'>
                <p className=' font-bold text-primary text-[30px]'>Nos Services</p>
                <motion.img whileHover={{ scale: 1.1 }} src={hammer} drag className='h-[35px] w-[35px]' />
            </div>
            <ul className=' flex flex-row gap-3 py-2 transition flex-wrap justify-center px-10 duration-200 '>
                {contentLits.map((item, index) => {
                    return (
                        <motion.div variants={fadeIn('left', {}, index * 0.25)}>
                            <Card index={index} />
                        </motion.div>
                    )
                })}
            </ul>
            <div className=" sm:flex-row flex flex-col justify-between items-center my-10">
                <AnimatedTextCards title={contentLits[sel].title} description={contentLits[sel].description} key={contentLits[sel].title} />
                <motion.div variants={littleFadeInX()} className=' relative h-[300px] w-[300px]  bg-cover '>

                    <img src={meet} className=' absolute w-full h-full cover-fill   border-firstBgColor border-4' />
                </motion.div>

            </div>
        </main>
    )
}









export default SectionWrapper(Services, 'services')