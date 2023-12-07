import React from 'react'
import { hammer, meet } from '../../../assets'
import { motion } from 'framer-motion'
import { useState } from 'react'
import contentLits from '../../../constants/landing'
import { SectionWrapper } from '../../../hoc'
import { fadeIn, littleFadeIn, littleFadeInX, slideIn, textVariant } from '../../../utils/motion'
const Services = () => {

    const [selected, setSelected] = useState('Travail')
    const [title, setTitle] = useState('Travail')
    const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam')
    const list = ["Travail", "Constitutionnel", "Administratif", "Famille"]


    const Card = ({ name, selected }) => {
        return (
            <motion.button whileHover={{ scale: 1.1 }} onClick={() => {
                setSelected(name)
                setTitle(contentLits[name].title)
                setDescription(contentLits[name].description)
            }} className={`${name === selected ? ' bg-primary text-white' : ' bg-white text-black'} shadow-lg py-2 px-3  `}>
                <p className=' font-light text-[20px]'>{name}</p>
            </motion.button>
        )
    }


    return (
        <main className=' flex flex-col justify-center items-center w-full'>
            <div className=' flex gap-2 flex-row'>
                <p className=' font-bold text-primary text-[30px]'>Nos Services</p>
                <motion.img whileHover={{ scale: 1.1 }} src={hammer} className='h-[35px] w-[35px]' />
            </div>
            <ul className=' flex flex-row gap-3 py-2 transition duration-200 '>
                {list.map((item, index) => {
                    return (
                        <motion.div variants={fadeIn('left', {}, index * 0.25)}>
                            <Card name={item} selected={selected} />
                        </motion.div>
                    )
                })}
            </ul>
            <div className=" sm:flex-row flex flex-col justify-between items-center my-10">
                <div className=" text-start mx-4 w-2/4 flex flex-col justify-between h-full">
                    <motion.p variants={textVariant()} className="max-w-2xl my-8 font-bold text-[30px]">{title}</motion.p>
                    <motion.p variants={littleFadeIn()} className="max-w-2xl my-8 text-[20px] ">{description}</motion.p>
                </div>
                <motion.div variants={littleFadeInX()} className=' relative h-[300px] w-[300px]  bg-cover '>
                    <div className=' absolute top-[30px] right-[30px]  h-[300px] w-[300px] bg-secondBgColor'></div>
                    <img src={meet} className=' absolute w-full h-full cover-fill   border-firstBgColor border-4' />
                </motion.div>

            </div>
        </main>
    )
}









export default SectionWrapper(Services, 'services')