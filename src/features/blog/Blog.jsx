import React, { useEffect } from 'react'
import Navbar from './../../common/Navbar'
import Footer from "./../../common/Footer"
import { useParams } from 'react-router-dom/dist'
import blogData from '../../constants/blogData'

const Blog = () => {
    const blog_id = useParams().id
    useEffect(()=>{
        fetchBlog()
    },[])
    const fetchBlog = ()=>{

    }
    return (
        <div className=' flex flex-col relative '>
            <Navbar />
            <div className='flex flex-col items-center text-zinc-950 py-6 gap-6'>
                <div className='flex flex-col items-start gap-5'>
                    <p className='text-2xl md:text-3xl'>{blogData[0].blogTitle}</p>
                    <p className='text-xl md:text-2xl'>{blogData[0].blogSubTitle}</p>
                    <img src={blogData[0].blogImg} alt='blog_img' className='w-[40vw] h-[350px]'></img>
                    <span className='rounded-xl bg-neutral-200 flex flex-row gap-4 p-3'>
                        <img src={blogData[0].blogAvocatImg} alt='avocat_img' className='rounded-full h-10 w-10'></img>
                        <div className='flex flex-col '>
                            <p className='text-sm'>{blogData[0].blogAvocatName}</p>
                            <p className='text-primary text-xs'>{blogData[0].blogAvocatSpeciality}</p>
                        </div>
                    </span>
                </div>
                <span className='w-[90vw] h-[1px] bg-neutral-200'></span>
                <div className='flex flex-col gap-4'>
                    <p className='w-[60vw]'>{blogData[0].blogContent}</p>
                    <p className='text-neutral-200'>{blogData[0].created_At}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Blog ;