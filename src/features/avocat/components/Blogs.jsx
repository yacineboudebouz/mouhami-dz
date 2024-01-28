import React, { useState, useEffect } from 'react'
import blogData from '../../../constants/blogData'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Blogs({ avocatId }) {
    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        fetchBlogs()
    }, [])
    const fetchBlogs = async () => {
        setIsLoading(true)
        const res = await axios.get(`http://localhost:3000/blogs`)
        if (res.status === 200) {
            const filtredBlogs = res.data.filter(blog => blog.avocatId === avocatId)
            setBlogs(filtredBlogs)
        }
        else {
            console.log("error")
        }
        setIsLoading(false)
    }
    return (
        <div className=' flex flex-col p-5'>
            <h1 className=' text-[30px] mb-10'>Blogs</h1>

            <div className=' flex flex-row flex-wrap mx-6 justify-center items-center gap-10 md:mb-0 mb-10'>
                {blogs.map((blog, index) => {
                    return (
                        <Link to={`/blog/${blog.id}`}>
                            <div className=' flex flex-col shadow-lg w-[300px] h-[200px]'>
                                <img src={blog.blogImg} className=' w-full h-[140px]' />
                                <div className=' p-2'>
                                    <p className=' text-[12px] font-medium'>{blog.blogTitle}</p>
                                    <p className=' text-[15px]'>{blog.blogSubTitle}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Blogs