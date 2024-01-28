import React, { useEffect, useState } from 'react'
import Navbar from './../../common/Navbar'
import Footer from "./../../common/Footer"
import { useParams } from 'react-router-dom/dist'
import blogData from '../../constants/blogData'
import axios from 'axios'
const Blog = () => {
    const blog_id = useParams().id
    const [blogData, setBlogData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        fetchBlog()
    }, [])
    const fetchBlog = async () => {
        setIsLoading(true)
        await new Promise(r => setTimeout(r, 1000))
        const res = await axios.get(`http://localhost:3000/blogs/${blog_id}`)
        if (res.status === 200) {
            setBlogData(res.data)
        } else {
            console.log("error")
        }
        setIsLoading(false)
    }
    return (
        <div className=' flex flex-col relative'>
            <Navbar />
            {isLoading && <div className=' min-h-screen'></div>}
            {blogData != null &&
                <div className='flex flex-col items-center  text-zinc-950 py-6 gap-6'>
                    <div className='flex flex-col items-center gap-5'>
                        <p className='text-2xl md:text-3xl'>{blogData.blogTitle}</p>
                        <p className='text-xl md:text-2xl'>{blogData.blogSubTitle}</p>
                        <img src={blogData.blogImg} alt='blog_img' className='w-[40vw] h-[350px]'></img>
                        <span className='rounded-xl bg-neutral-200 flex flex-row gap-4 p-3'>

                        </span>
                    </div>
                    <span className='w-[90vw] h-[1px] bg-neutral-200'></span>
                    <div className='flex flex-col gap-4'>
                        <p className='w-[60vw]'>{blogData.blogContent}</p>

                    </div>
                </div>}
            {isLoading && <div className=' fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center '>
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
            </div>}

            <Footer></Footer>
        </div>
    )
}

export default Blog;