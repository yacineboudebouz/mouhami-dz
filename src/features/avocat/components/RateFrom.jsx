
import React from 'react'
import { useTranslation } from 'react-i18next'
import StarRatings from 'react-star-ratings';
import { useState } from 'react';
import { primaryColor, secondaryColor } from '../../../utils/colors';
function RateFrom() {
    const { t, i18n } = useTranslation();
    const position = [51.505, -0.09]
    const [rating, setRating] = useState(0)
    return (
        <div className=' flex flex-col p-5 '>
            <p className=' text-[30px] font-medium'>{t("sharerating")}</p>
            <form className=' flex flex-col rounded-xl shadow-lg p-10 gap-10 md:w-[90vh]'>
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
                    <input type='text' className=' border-b-2 w-full outline-none py-5' placeholder={t("fullname")} />
                </div>
                <div>
                    <p>{"Email"}</p>
                    <input type='email' className=' border-b-2 w-full outline-none py-5' placeholder={t("Email")} />
                </div>
                <div>
                    <p>{t("comment")}</p>
                    <textarea type='text' className=' border-b-2 w-full outline-none py-10' maxLength={200} />
                </div>
                <button type='submit' className=' bg-primary text-white py-2 rounded-sm w-[20vh]'>{t("rate")}</button>
            </form>
        </div>
    )
}

export default RateFrom