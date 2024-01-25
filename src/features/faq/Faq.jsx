import React from 'react'
import Navbar from './../../common/Navbar'
import Footer from "./../../common/Footer"
import faqData from '../../constants/faq'
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { useState } from 'react';

const Faq = () => {
    const [faqStates, setFaqStates] = useState(Array(faqData.length).fill(true));
    const toggleFaq = (index) => {
        setFaqStates((prevStates) =>
          prevStates.map((state, i) => (i === index ? !state : state))
        );
      };
    return (
        <div className=' flex flex-col relative '>
            <Navbar />
            <div className='flex flex-col gap-10 text-zinc-950 py-12 items-center'>
                <p className='text-2xl md:text-3xl'>Decouvrir dz mouhami</p>
                <div className='flex flex-col gap-4'>
                    {faqData.map((faq , index)=>{
                        return(
                            <div key={index} className='shadow-md flex flex-col gap-6 bg-white p-6 w-[65vw] '>
                                <div className='flex flex-row items-center justify-between gap-12'>
                                    <span className='flex justify-end'>{faq.faqQuestion}</span>
                                    {faqStates[index] ? <ExpandMoreIcon className='h-6 w-6 cursor-pointer' onClick={() => toggleFaq(index)} /> : <ExpandLessIcon className='h-6 w-6 cursor-pointer' onClick={() => toggleFaq(index)}/>}
                                </div>
                                {!faqStates[index] && <p className='text-zinc-500 w-9/12 md:w-[500px]'>{faq.faqReponse}</p>}
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Faq ;