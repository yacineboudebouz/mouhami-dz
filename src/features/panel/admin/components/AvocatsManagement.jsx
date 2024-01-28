import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { fakeAvocat } from '../../../../constants/fake_data';
import { motion } from 'framer-motion'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import axios from 'axios';
const AvocatsManagement = () => {
    const { t, i18n } = useTranslation();
    const [selectedAvocate, setSelectedAvocate] = useState(null)
    const [popupOpen, setPopupOpen] = useState(false)
    const [avocats, setAvocats] = useState([])
    const handledelete = async (id) => {
        await axios.delete(`http://localhost:3000/avocats/${id}`)
        setAvocats(avocats.filter(avocat => avocat.id !== id))
    }
    const fetchAvocats = async () => {

        const res = await axios.get("http://localhost:3000/avocats")
        console.log(res.data)
        if (res.status === 200) {
            setAvocats(res.data)
        }
        else {
            console.log("error")
        }

    }
    const handleActivate = async () => {
        setSelectedAvocate({ ...selectedAvocate, status: "Active" })
    }
    const handleDeactivate = async () => {
        setSelectedAvocate({ ...selectedAvocate, status: "Inactive" })
    }
    const handleConfirm = async () => {
        await axios.put(`http://localhost:3000/avocats/${selectedAvocate.id}`, {
            ...selectedAvocate
        })
        setAvocats(avocats.map(avocat => avocat.id === selectedAvocate.id ? selectedAvocate : avocat))
    }
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

    useEffect(() => {
        fetchAvocats()
    }, [])

    return (
        <div className=' flex flex-col w-full p-5'>
            <h1 className=' font-semibold text-[25px]'>{t("manageavocats")}</h1>
            <div className='flex flex-col gap-5 my-5 '>
                {avocats.map((avocat) => (<div className=' w-full p-5 shadow-md flex flex-row gap-2 justify-between cursor-pointer'>
                    <div onClick={() => {
                        setSelectedAvocate(avocat)
                        setPopupOpen(true)
                    }} className='w-full  flex flex-row gap-2'>
                        <p>{avocat.id}</p>
                        <p>{avocat.name}</p>
                        <p>{avocat.email}</p>
                        <p>{avocat.phonenumber}</p>
                        <p>{avocat.city}</p>
                        <p>{avocat.speciality}</p>
                        <p>{avocat.status}</p>
                    </div>
                    <button onClick={() => handledelete(avocat.id)} ><DeleteOutlineOutlinedIcon sx={{ color: "red" }} /></button>
                </div>))}

            </div>
            {popupOpen &&
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={2} className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-md w-[600px] h-[500px] flex flex-col  ">
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
                        <div className=' flex flex-col justify-between h-full'>
                            <div className=' flex flex-row gap-5'>
                                <img src={selectedAvocate.avatar} className=' w-[150px] h-[150px]' />
                                <div className=' flex flex-col gap-2'>
                                    <ul className=' flex flex-col gap-4'>
                                        <li className=' flex flex-row gap-2 '>
                                            <p className=' font-semibold text-primary'>{t("Name")}</p>
                                            <p>{selectedAvocate.name}</p>
                                        </li>
                                        <li className=' flex flex-row gap-2'>
                                            <p className=' font-semibold text-primary'>{t("Speciality")}</p>
                                            <p>{selectedAvocate.speciality}</p>
                                        </li>
                                        <li className=' flex flex-row gap-2'>
                                            <p className=' font-semibold text-primary'>{t("number")}</p>
                                            <p>{selectedAvocate.phonenumber}</p>
                                        </li>
                                        <li className=' flex flex-row gap-2'>
                                            <p className=' font-semibold text-primary'>{t("Wilaya")}</p>
                                            <p>{selectedAvocate.wilaya}</p>
                                        </li>
                                        <li className=' flex flex-row gap-2 items-center'>
                                            <p className=' font-semibold text-primary'>{"Status"}</p>
                                            <p>{selectedAvocate.status}</p>
                                            {selectedAvocate.status === "Inactive" && <button onClick={() => handleActivate()} className=' bg-primary text-white py-2 rounded-sm w-[20vh]  duration-500 hover:bg-orange-700'>{t("Activate")}</button>}
                                            {selectedAvocate.status === "Active" && <button onClick={() => handleDeactivate()} className=' bg-primary text-white py-2 rounded-sm w-[20vh]  duration-500 hover:bg-orange-700'>{t("Deactivate")}</button>}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className=' flex flex-row justify-between'>
                                <button onClick={() => setPopupOpen(false)} className=' bg-grey text-white py-2 rounded-sm w-[20vh]  duration-500 hover:bg-gray-700'>{t("cancel")}</button>
                                <button onClick={() => {
                                    handleConfirm()
                                    setPopupOpen(false)
                                }} className=' bg-primary text-white py-2 rounded-sm w-[20vh]  duration-500 hover:bg-orange-700'>{t("confirm")}</button>

                            </div>
                        </div>
                    </div>
                </motion.div>

            }
        </div>
    )
}

export default AvocatsManagement