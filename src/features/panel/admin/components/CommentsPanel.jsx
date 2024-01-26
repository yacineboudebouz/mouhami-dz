import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StarRating } from '../../../../common/widgets/StarRating';
import { fakeComment } from '../../../../constants/fake_data';
const CommentsPanel = () => {
    const { t, i18n } = useTranslation();
    const fakeComments = [fakeComment, fakeComment, fakeComment]
    const [comments, setComments] = useState(fakeComments)
    const CommentCard = ({ comment, index }) => {
        const handleAccept = () => {
            const updatedAppoinements = comments.filter((_, i) => i !== index);
            setComments(updatedAppoinements)
        }
        return (
            <div className=' flex flex-col min-w-[400px]  border border-gray-300 rounded-xl shadow-lg p-2 '>
                <ul className='flex flex-col gap-5 p-4'>
                    <li className=' flex flex-row gap-2 '>
                        <p className=' font-semibold text-primary'>{t("nameclient")}</p>
                        <p>{comment.name}</p>
                    </li>
                    <li className=' flex flex-row gap-2'>
                        <StarRating rating={comment.rate} />
                    </li>
                    <li className=' flex flex-row gap-2'>

                        <p>{comment.comment}</p>
                    </li>

                </ul>
                <div className='flex flex-row justify-end items-center w-full '>
                    <div className=' flex gap-1'>
                        <button className=' text-white border  rounded-md px-4 py-2 bg-grey hover:bg-slate-400 hover:text-white duration-300 ml-2'>{t("refuse")}</button>
                        <button onClick={() => handleAccept()} className=' text-primary border border-primary rounded-md px-4 py-2 hover:bg-primary hover:text-white duration-300'>{t("accept")}</button>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className=' flex flex-col w-full p-5'>
            <h1 className=' font-semibold text-[25px]'>{t("gessite")}</h1>
            <h1 className=' font-semibold text-[25px] mt-4'>{t("comments")}</h1>
            {comments.length == 0 && <div className='flex flex-col w-[400px] h-[250px] border border-gray-300 rounded-xl shadow-lg p-2 mt-2 items-center justify-center'>{t("nocom")}</div>}
            <div className='flex flex-row gap-5 my-5 overflow-x-auto max-w-full '>
                {comments.map((comment, index) => (
                    <div key={index} className='max-w-[400px]'>
                        <CommentCard comment={comment} index={index} />
                    </div>
                ))}
            </div>
            <h1 className=' font-semibold text-[25px] mt-5'>{t("commenthis")}</h1>
            <div
                className=' flex flex-col gap-3'>
                {fakeComments.map((comment, index) => (
                    <div className=' flex flex-row gap-5 font-light text-grey p-2'>
                        <p>{comment.name}</p>
                        <p>{`${comment.rate}/5`}</p>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CommentsPanel