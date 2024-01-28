
import React from 'react'
import { useTranslation } from 'react-i18next'
import StarRatings from 'react-star-ratings';
import { useState } from 'react';
import { primaryColor, secondaryColor } from '../../../utils/colors';
function RateFrom() {
    const { t, i18n } = useTranslation();
    const position = [51.505, -0.09]
    const [rating, setRating] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    const handleSubmit = (e) => { }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }
    return (
        <form className=' flex flex-col p-5 '>
            <p className=' text-[30px] font-medium'>{t("sharerating")}</p>
            <div className=' flex flex-col rounded-xl shadow-lg p-10 gap-10 md:w-[90vh]'>
                <div>
                    <p>{t("rate")}</p>
                    <StarRatings
                        rating={rating}
                        changeRating={(newRating) => setRating(newRating)}
                        starEmptyColor={secondaryColor}
                        starRatedColor={primaryColor}
                        starHoverColor={primaryColor}
                        starDimension='25px'
                        starSpacing='5px'
                    />
                </div>
                <div>
                    <p>{t("clientname")}</p>
                    <input type='text' className=' border-b-2 w-full outline-none py-5' placeholder={t("fullname")} onChange={(e) => handleNameChange(e)} value={name} />
                </div>
                <div>
                    <p>{"Email"}</p>
                    <input type='email' className=' border-b-2 w-full outline-none py-5' placeholder={t("Email")} onChange={(e) => handleEmailChange(e)} value={email} />
                </div>
                <div>
                    <p>{t("comment")}</p>
                    <textarea type='text' className=' border-b-2 w-full outline-none py-10' maxLength={200} onChange={(e) => handleCommentChange(e)} value={comment} />
                </div>
                <button type='submit' className=' bg-primary text-white py-2 rounded-sm w-[20vh]  duration-500 hover:bg-orange-700'>{t("send")}</button>
            </div>
        </form>
    )
}

export default RateFrom