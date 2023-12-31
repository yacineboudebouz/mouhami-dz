import React from 'react'
import { hammer, algeria, blog } from '../../../assets'
import { animate, motion } from 'framer-motion'
import { textVariant, fadeIn, slideIn, littleFadeIn } from '../../../utils/motion'
import { SectionWrapper } from '../../../hoc'
import { Tilt } from 'react-tilt'

import { fakeAvocat, fakeRates } from '../../../constants/fake_data'
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { changeRate, rateIdx } from '../landingSlice'
import { useDispatch, useSelector } from 'react-redux'
import blogData from "../../../constants/blogData"
import { NavLink } from 'react-router-dom/dist'




const Avocats = () => {
    const list = fakeRates
    const dispatch = useDispatch()
    const idx = useSelector(rateIdx)


    const handleNext = () => {
        if (idx === list.length - 1) {
            dispatch(changeRate(0))
        }
        else {
            dispatch(changeRate(idx + 1))
        }
    }
    const handleBack = () => {
        if (idx === 0) {
            dispatch(changeRate(list.length - 1))
        }
        else {
            dispatch(changeRate(idx - 1))
        }
    }
    let avocats = [fakeAvocat, fakeAvocat, fakeAvocat]
    const StarRating = ({ rating }) => {
        return (
            <div className=' flex flex-row'>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label key={i} >
                            <FaStar color={ratingValue <= rating ? "#C89D66" : "#333642"} />
                        </label>
                    );
                })}
            </div>
        );
    };

    const AvocatCard = ({ fakeAvocat, index }) => {

        return (
            <Tilt options={{ max: 25, scale: 1.05, perspective: 1000, speed: 300, transition: true }}>

                <div className=' flex flex-col justify-center items-center gap-5 w-[250px] h-[250px]  border-primary border  bg-secondary shadow-lg p-5'>
                    <div className='w-20 h-20 rounded-full flex justify-center items-center'>
                        <img src={fakeAvocat.img} className=' h-20 w-20 rounded-full' />
                    </div>
                    <div className=' flex flex-row items-center justify-center gap-1 text-white'>
                        <p>{fakeAvocat.surname}</p>
                        <p>{fakeAvocat.name}</p>
                        <p>{fakeAvocat.wilaya}</p>
                    </div>
                    <p className=' text-primary font-semibold'>{fakeAvocat.speciality}</p>
                    <StarRating rating={fakeAvocat.rating} />

                </div>

            </Tilt>
        )
    }
    const ClientRateCard = ({ fakeRate }) => {
        return (<div className=' flex flex-col justify-evenly items-center  shadow-xl min-h-[250px] md:min-w-[450px] min-w-[200px] rounded-xl p-5'>
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} className=' font-semibold text-[25px]'>{fakeRate.name}</motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>{fakeRate.opinion}</motion.p>
            <StarRating rating={fakeRate.rate} />
        </div>)
    }


    return (
        <main className='  w-full   items-center flex flex-col'>
            <section className=' bg-avocats-pattern bg-no-repeat w-full bg-cover items-center flex flex-col py-4 md:h-screen justify-between' id='avocats'>
                <div className=' flex flex-row gap-1 items-center'>
                    <motion.h1 variants={textVariant()} className=' font-bold text-primary text-[30px] my-4'>Nos Avocats Émérites</motion.h1>
                    <motion.img src={hammer} />
                </div>
                <div className=' flex flex-row gap-5 items-center justify-center top flex-wrap'>
                    {avocats.map((avocat, i) => {
                        return (
                            <motion.div variants={fadeIn('left', {}, i * 0.25)} className=' flex' >
                                <AvocatCard fakeAvocat={avocat} index={i} key={i} />
                            </motion.div>
                        )
                    })}
                </div>
                <div></div>

            </section>
            <section className=' flex flex-col justify-center items-center'>
                <div className=' flex flex-row gap-1 items-center'>
                    <h1 className=' font-bold text-primary md:text-[30px] text-[20px] my-4'>Trouver Avocat par wilaya</h1>
                    <mg src={hammer} className=' md:h-full h-[20px]' />
                </div>
                <img src={algeria} className=' md:p-24  p-12' />
            </section>
            <section className=' flex flex-col justify-center items-center'>

                <div className=' flex flex-row gap-1 items-center'>
                    <motion.h1 variants={slideIn('left')} whileInView='show' inherit={false} className=' font-bold text-primary md:text-[30px] text-[20px] my-4'>Avis de nos Clients</motion.h1>
                    <motion.img src={hammer} className=' md:h-full h-[20px]' />
                </div>
                <motion.div variants={textVariant()} className=' flex flex-col gap-5 items-center justify-center top flex-wrap '>
                    <ClientRateCard fakeRate={list[idx]} />
                    <div className=' flex flex-row gap-10 justify-center items-center'>
                        <button onClick={() => { handleBack() }}>
                            <FaArrowLeft className=' text-white text-[30px] bg-secondary rounded-full p-1 cursor-pointer' />
                        </button>
                        <button onClick={() => { handleNext() }}>
                            <FaArrowRight className=' text-white text-[30px] bg-secondary rounded-full p-1 cursor-pointer' />
                        </button>
                    </div>
                </motion.div>

            </section>
            {/*this one is supposed to be a multiple blogs but*/}
            <section id='blogs' className='  flex flex-col justify-center items-center mt-5' >
                <div className=' flex flex-row gap-1 items-center'>
                    <motion.h1 variants={slideIn('left')} whileInView='show' inherit={false} className=' font-bold text-primary md:text-[30px] text-[20px] my-4'>Chroniques Juridiques</motion.h1>
                    <motion.img src={hammer} className=' md:h-full h-[20px]' />
                </div>
                <div className=" sm:flex-row flex flex-col justify-between items-center my-10" >
                    <motion.div variants={littleFadeIn()} className=' relative h-[300px] w-[300px]  bg-cover '>
                        <img src={blog} className=' absolute w-full h-full cover-fill   border-firstBgColor border-4' />
                    </motion.div>
                    <div className=" text-start mx-4 w-2/4 flex flex-col justify-between h-full">
                        <motion.p variants={textVariant()} className="max-w-2xl md:my-8 my-2 font-bold text-[20px] md:text-[30px]">{blogData[0].blogTitle}</motion.p>
                        <motion.p variants={slideIn('left')} className="max-w-2xl my-8 text-[15px] md:text-[20px] w-full ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ..</motion.p>
                        <NavLink to={`blog/${blogData[0].blogID}`}>
                            <motion.button variants={littleFadeIn()} className=' bg-primary flex items-center p-3 justify-center cursor-pointer text-white hover:bg-amber-800 transition duration-300 max-w-xs'>Voir plus</motion.button>
                        </NavLink>
                        
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SectionWrapper(Avocats, "")