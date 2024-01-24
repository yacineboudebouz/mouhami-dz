import React from 'react'
import blogData from '../../../constants/blogData'

function Blogs() {
    const blogs = [blogData[0], blogData[0]]
    return (
        <div className=' flex flex-col p-5'>
            <h1 className=' text-[30px] mb-10'>Blogs</h1>
            <div className=' flex flex-row flex-wrap mx-6 justify-center items-center gap-10 md:mb-0 mb-10'>
                {blogs.map((blog, index) => {
                    return (
                        <div className=' flex flex-col shadow-lg w-[300px] h-[200px]'>
                            <img src={blog.blogImg} className=' w-full h-[140px]' />
                            <div className=' p-2'>
                                <p className=' text-[12px] font-medium'>{blog.blogTitle}</p>
                                <p className=' text-[15px]'>{blog.blogSubTitle}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blogs