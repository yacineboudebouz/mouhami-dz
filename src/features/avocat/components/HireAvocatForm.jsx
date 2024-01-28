import React from 'react'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react';
import { fakeAvocat } from '../../../constants/fake_data';
import { StarRating } from '../../../common/widgets/StarRating';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import { AnimatePresence, motion } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { success } from '../../../assets';
import axios from 'axios';

const HireAvocatForm = ({ avocat }) => {
    const { t, i18n } = useTranslation();
    const [popupOpen, setPopupOpen] = useState(false)
    const [step, setStep] = useState(0)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedFromTime, setSelectedFromTime] = useState("12:00");
    const [selectedToTime, setSelectedToTime] = useState("12:00");
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState(false)
    const [rdvN, setRdvN] = useState("554612845")


    const handleSubmit = async () => {
        setLoading(true)
        await new Promise(r => setTimeout(r, 1000))
        const result = await axios.post("http://localhost:3000/rdv", {
            avocatId: avocat.id,
            date: selectedDate.toDateString(),
            from: selectedFromTime,
            to: selectedToTime,
            name: name,
            email: email,
            phone: phone,
            status: "pending"
        })
        setLoading(false)
        if (result.status == 201) {
            setRdvN(result.data.id)
            setStep(step + 1)
        } else {
            alert("something went wrong")
        }
    }
    const handleClose = () => {
        setPopupOpen(false)
        setEmail("")
        setName("")
        setPhone("")
        setSelectedDate(new Date())
        setSelectedFromTime("12:00")
        setSelectedToTime("12:00")
        setStep(0)

    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
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
    const ToTimePicker = () => {
        const handleToTimeChange = (time) => {
            setSelectedToTime(time);
        };
        return (
            <div >
                <TimePicker
                    className="border-primary border p-3 outline-none"
                    onChange={handleToTimeChange}
                    value={selectedToTime}
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

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={2} className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-md w-[600px] h-[500px] flex flex-col justify-between">
                        <div>
                            <div className="flex justify-end">
                                <button
                                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                    onClick={() => { handleClose() }}
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
                        {step == 0 && <motion.div animate={{ opacity: 1 }} transition={1} initial={{ opacity: 0 }} className=' flex flex-col'>
                            <p className=' mb-10'>{t("choose_time")}</p>
                            <div className=' flex flex-row'>
                                <DateTimePicker />
                                <FromTimePicker />
                                <ToTimePicker />
                            </div>
                        </motion.div>}
                        {step == 1 && <motion.div animate={{ opacity: 1 }} transition={1} initial={{ opacity: 0 }} className=' flex flex-col'>
                            <div>
                                <p>{t("clientname")}</p>
                                <input type='text' className=' border-b-2 w-full outline-none py-2' placeholder={t("fullname")} onChange={(e) => handleNameChange(e)} value={name} />
                            </div>
                            <div>
                                <p>{"Email"}</p>
                                <input type='email' className=' border-b-2 w-full outline-none py-2' placeholder={t("Email")} onChange={(e) => handleEmailChange(e)} value={email} />
                            </div>
                            <div>
                                <p>{t("phone")}</p>
                                <input type='tel' className=' border-b-2 w-full outline-none py-2' placeholder={t("phone")} onChange={(e) => handlePhoneChange(e)} value={phone} />
                            </div>
                        </motion.div>}
                        {step == 2 && <motion.div animate={{ opacity: 1 }} transition={1} initial={{ opacity: 0 }} className=' flex flex-col'>
                            <p className=' font-semibold'>{t("appoinement")}</p>
                            <ul>
                                <li className=' flex flex-row gap-2 '>
                                    <p className=' font-semibold text-primary'>{t("date")}</p>
                                    <p>{selectedDate.toDateString()}</p>
                                </li>
                                <li className=' flex flex-row gap-2'>
                                    <p className=' font-semibold text-primary'>{t("from")}</p>
                                    <p>{selectedFromTime}</p>
                                </li>
                                <li className=' flex flex-row gap-2'>
                                    <p className=' font-semibold text-primary'>{t("to")}</p>
                                    <p>{selectedToTime}</p>
                                </li>
                                <li className=' flex flex-row gap-2'>
                                    <p className=' font-semibold text-primary'>{t("clientname")}</p>
                                    <p>{name}</p>
                                </li>
                                <li className=' flex flex-row gap-2'>
                                    <p className=' font-semibold text-primary'>{"Email"}</p>
                                    <p>{email}</p>
                                </li>
                                <li className=' flex flex-row gap-2'>
                                    <p className=' font-semibold text-primary'>{t("phone")}</p>
                                    <p>{phone}</p>
                                </li>
                            </ul>
                        </motion.div>}
                        {step === 3 && <motion.div animate={{ opacity: 1 }} transition={1} initial={{ opacity: 0 }} className=' flex flex-col items-center justify-evenly h-full'>
                            <img src={success} className=' w-[100px] h-[100px]' />
                            <div>
                                <p className=' font-semibold'>{t("confirmed")}</p>
                                <p className=' text-grey font-light'>{t("team")}</p>
                            </div>
                            <div className=' bg-gray-300 p-3 rounded-md'>
                                {rdvN}
                            </div>
                            <button onClick={() => { handleClose() }} className=' bg-primary text-white p-3 flex justify-center w-[100px] rounded-md  hover:bg-orange-200 duration-300 '>{t("close")}</button>
                        </motion.div>}
                        {loading && <div className=' fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center '>
                            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
                        </div>}
                        {step !== 3 && <div className={`${step === 0 ? "flex flex-row justify-end relative bottom-0 p-5 " : "flex flex-row justify-between w-full   relative bottom-0 p-5 "}`}>
                            {step !== 0 && <button onClick={() => {
                                if (!loading) {
                                    setStep(step - 1)
                                }
                            }} className=' bg-grey text-white p-3 flex justify-center  w-[100px] rounded-md hover:bg-secondary duration-300'>{t("back")}</button>}
                            <button onClick={
                                () => {
                                    if (!loading) {
                                        if (step == 2) {
                                            handleSubmit()
                                        } else {
                                            if (step < 2) {
                                                setStep(step + 1)
                                            }
                                        }
                                    }
                                }
                            } className=' bg-primary text-white p-3 flex justify-center w-[100px] rounded-md  hover:bg-orange-200 duration-300 '>{step == 2 ? t("confirm") : t("next")}</button>
                        </div>
                        }</div>
                </motion.div>

            }

        </div>
    )
}

export default HireAvocatForm