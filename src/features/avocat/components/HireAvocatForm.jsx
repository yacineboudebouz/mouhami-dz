import React from 'react'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react';
import { fakeAvocat } from '../../../constants/fake_data';



const HireAvocatForm = () => {
    const { t, i18n } = useTranslation();
    const [popupOpen, setPopupOpen] = useState(false)
    const [step, setStep] = useState(0)
    const avocat = fakeAvocat
    useEffect(() => {
        if (popupOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Ensure the class is removed when the component unmounts
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [popupOpen]);
    return (
        <div>
            <div className=' flex w-full  mb-10 md:mb-0 justify-end md:px-0 px-5'>
                <button onClick={() => { setPopupOpen(!popupOpen) }} className=' relative right-0 p-3 bg-primary hover:bg-orange-800 text-white duration-300 top-0'>{t("hire")}</button>
            </div>

            {popupOpen &&
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-md w-[600px] h-[500px]">
                        <div className="flex justify-end">
                            <button
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                onClick={() => { setPopupOpen(false) }}
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="mt-4">
                            {step !== 3 && <div className=' flex flex-col'>
                                <img src={avocat.img} className='w-[100px] h-[100px]' />
                                <div className=' flex flex-row'>

                                </div>
                            </div>}
                        </div>
                    </div>
                </div>

            }

        </div>
    )
}

export default HireAvocatForm