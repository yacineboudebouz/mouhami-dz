import React from 'react'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react';
import { fakeAvocat } from '../../../constants/fake_data';
import { StarRating } from '../../../common/widgets/StarRating';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-datepicker/dist/react-datepicker.css';

const HireAvocatForm = () => {
    const { t, i18n } = useTranslation();
    const [popupOpen, setPopupOpen] = useState(false)
    const [step, setStep] = useState(0)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedFromTime, setSelectedFromTime] = useState(new Date());
    const avocat = fakeAvocat
    const DateTimePicker = () => {
        const handleDateChange = (date) => {
            setSelectedDate(date);
        };
        return (
            <div >
                <DatePicker
                    className="border-primary border p-5 outline-none"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy "
                    style={{ border: '1px solid #ccc', borderRadius: '25px', padding: '10px' }}
                />
            </div>
        );
    };
    const FromTimePicker = () => {
        const handlefromTimeChange = (time) => {
            setSelectedFromTime(time);
        };
        return (
            <div >
                <TimePicker
                    className="border-primary border p-3 outline-none"
                    onChange={handlefromTimeChange}
                    value={selectedFromTime}

                    format="HH:mm"

                />
            </div>
        );
    };
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
                    <div className="bg-white p-6 rounded-lg shadow-md w-[600px] h-[500px] flex flex-col justify-between">
                        <div>
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
                                {step !== 3 && <div className=' flex flex-row gap-2'>
                                    <img src={avocat.img} className='w-[100px] h-[100px]' />
                                    <div className=' flex flex-col'>
                                        <div className=' flex flex-wrap  flex-row text-[15px] gap-2'>
                                            <p>{avocat.name}</p>
                                            <p >{avocat.surname}</p>
                                            <p >{avocat.wilaya}</p>
                                        </div>
                                        <p className=' font-semibold text-primary text-[15px]'>{t("right")}</p>
                                        <div className=' flex flex-row  items-center  gap-4'>
                                            <StarRating rating={avocat.rating} />
                                            <p className=' gap-1'>{avocat.rates + t("rates")}</p>
                                        </div>
                                    </div>
                                </div>}

                            </div>
                        </div>
                        {step == 0 && <div className=' flex flex-col'>
                            <p className=' mb-10'>{t("choose_time")}</p>
                            <div className=' flex flex-row'>
                                <DateTimePicker />
                                <FromTimePicker />
                            </div>
                        </div>}
                        <div className={`${step === 0 ? "flex flex-row justify-end relative bottom-0 p-5 " : "flex flex-row justify-between w-full   relative bottom-0 p-5 "}`}>
                            {step !== 0 && <button onClick={() => setStep(step - 1)} className=' bg-grey text-white p-3 flex justify-center  w-[100px] rounded-md hover:bg-secondary duration-300'>{t("back")}</button>}
                            <button onClick={() => setStep(step + 1)} className=' bg-primary text-white p-3 flex justify-center w-[100px] rounded-md  hover:bg-orange-200 duration-300 '>{t("next")}</button>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default HireAvocatForm