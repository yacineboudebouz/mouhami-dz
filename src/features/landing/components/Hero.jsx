import React from 'react'
import { logo } from '../../../assets'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../../../hoc'
import { littleFadeIn, slideIn } from '../../../utils/motion'
const Hero = () => {
    return (
        <main className=' flex flex-col w-full h-screen p-5 justify-between'>
            <nav className=' flex flex-row justify-between relative top-0 left-0'>
                <div className=' flex flex-row items-center'>
                    <motion.img whileHover={{ scale: 1.1 }} src={logo} className='h-[35px] w-[35px]' />
                    <p className=' flex items-center  font-bold text-[20px] px-3 text-white'><span className=' text-primary font-bold text-[20px] px-3 '>DZ</span>Mouhami</p>
                </div>
                <div className=' flex flex-row justify-evenly items-center'>
                    <ul className=' flex-row flex'>
                        <motion.li whileHover={{ scale: 1.1, transition: { ease: "easeOut" } }} className=' text-white font-light mx-5 cursor-pointer hover:bg-white-50 transition duration-100 '>Decouvrir dz mouhami </motion.li>
                        <motion.li whileHover={{ scale: 1.1, transition: { ease: "easeOut" } }} className=' text-white font-light mx-5 cursor-pointer hover:shadow-md transition duration-100 '>Se connecter</motion.li>
                    </ul>


                </div>
            </nav>
            <section className=' flex flex-col px-24'>
                <motion.h2 variants={slideIn('left')} className=' text-white text-[60px] text-9xlt-'>Avocats experts, votre recours parfait</motion.h2>
                <motion.p variants={littleFadeIn()} className=' text-[25px] font-light text-white'>Des avocats dévoués pour protéger vos droits, une défense légale forte à chaque étape</motion.p>
            </section>
            <a href='#propos'>
                <div className=' flex justify-center w-full' >
                    <motion.svg className=' relative bottom-3 cursor-pointer' animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} width="65" height="46" viewBox="0 0 65 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.68869 19.1085C7.48194 18.5472 8.76806 18.5472 9.56131 19.1085L32.5 35.3421L55.4387 19.1085C56.2319 18.5472 57.5181 18.5472 58.3113 19.1085C59.1046 19.6699 59.1046 20.5801 58.3113 21.1415L33.9363 38.3915C33.1431 38.9528 31.8569 38.9528 31.0637 38.3915L6.68869 21.1415C5.89544 20.5801 5.89544 19.6699 6.68869 19.1085Z" fill="white" fill-opacity="0.6" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.68869 7.60853C7.48194 7.04716 8.76806 7.04716 9.56131 7.60853L32.5 23.8421L55.4387 7.60853C56.2319 7.04716 57.5181 7.04716 58.3113 7.60853C59.1046 8.16991 59.1046 9.08009 58.3113 9.64147L33.9363 26.8915C33.1431 27.4528 31.8569 27.4528 31.0637 26.8915L6.68869 9.64147C5.89544 9.08009 5.89544 8.16991 6.68869 7.60853Z" fill="white" fill-opacity="0.6" />
                    </motion.svg>
                </div>
            </a>

        </main>
    )
}

export default SectionWrapper(Hero, 'hero')