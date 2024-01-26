import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Blogs from '../../../avocat/components/Blogs';
import blogData from '../../../../constants/blogData';
import { Link } from 'react-router-dom';
const BlogsPanel = () => {
    const { t, i18n } = useTranslation();
    const [title, setTitle] = useState("")
    const [subtitle, setSubTitle] = useState("")
    const [content, setContent] = useState("")
    const handleSubmit = (e) => { }
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSubTitleChange = (e) => {
        setSubTitle(e.target.value)
    }
    const handleContentChange = (e) => {
        setContent(e.target.value)
    }



    const BlogCard = ({ blog }) => {
        return (
            <div className=' flex flex-col shadow-lg w-[300px] h-[200px]'>
                <img src={blog.blogImg} className=' w-full h-[140px]' />
                <div className=' p-2'>
                    <p className=' text-[12px] font-medium'>{blog.blogTitle}</p>
                    <p className=' text-[15px]'>{blog.blogSubTitle}</p>
                </div>
            </div>
        )
    }


    return (
        <div className=' flex flex-col w-2/4 p-5'>
            <h1 className=' font-semibold text-[25px] mb-5'>{t("Blogs")}</h1>
            <h1 className=' font-semibold text-[25px] mb-5'>{t("addblog")}</h1>
            <form className=' flex flex-col justify-end '>
                <div>
                    <p className=' mt-5'>{t("blogtitle")}</p>
                    <input type='text' className=' border-b-2 w-full outline-none py-5' placeholder={t("Title")} onChange={(e) => handleTitleChange(e)} value={title} />
                </div>
                <div>
                    <p className=' mt-5'>{t("blogsubtitle")}</p>
                    <input type='email' className=' border-b-2 w-full outline-none py-5' placeholder={t("Sub Title")} onChange={(e) => handleSubTitleChange(e)} value={subtitle} />
                </div>
                <div>
                    <p className=' mt-5'>{t("blogcontent")}</p>
                    <textarea type='text' className=' border-b-2 w-full outline-none py-10' maxLength={200} onChange={(e) => handleContentChange(e)} value={content} />
                </div>
                <button className=' bg-primary text-white py-2 rounded-sm w-[20vh]  duration-500 hover:bg-orange-700'>{t("Post")}</button>
            </form>
            <h1 className=' font-semibold text-[25px] my-5'>{t("myblogs")}</h1>
            {blogData.map((blog) => <Link to={`/blog/${blog.blogID}`}><BlogCard blog={blog} /></Link>)}
        </div>
    )
}

export default BlogsPanel