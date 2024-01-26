import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { fakeAppoinement } from '../../../../constants/fake_data'

const Appoinements = () => {

    const AppoinementCard = ({ appoinement, index }) => {
        const handleAccept = () => {
            const updatedAppoinements = appoinements.filter((_, i) => i !== index);
            setAppoinements(updatedAppoinements)
        }
        return (
            <div className=' flex flex-col min-w-[400px]  border border-gray-300 rounded-xl shadow-lg p-2 '>
                <ul className='flex flex-col gap-5 p-4'>
                    <li className=' flex flex-row gap-2 '>
                        <p className=' font-semibold text-primary'>{t("nameclient")}</p>
                        <p>{appoinement.name}</p>
                    </li>
                    <li className=' flex flex-row gap-2'>
                        <p className=' font-semibold text-primary'>{t("number")}</p>
                        <p>{appoinement.number}</p>
                    </li>
                    <li className=' flex flex-row gap-2'>
                        <p className=' font-semibold text-primary'>{t("Email")}</p>
                        <p>{appoinement.email}</p>
                    </li>
                    <li className=' flex flex-row gap-2'>
                        <p className=' font-semibold text-primary'>{t("Date")}</p>
                        <p>{appoinement.date}</p>
                    </li>
                    <li className=' flex flex-row gap-2'>
                        <p className=' font-semibold text-primary'>{t("Time")}</p>
                        <p>{appoinement.fromTime + " to " + appoinement.toTime}</p>
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

    const { t, i18n } = useTranslation();
    const fakeAppoinements = [fakeAppoinement, fakeAppoinement, fakeAppoinement, fakeAppoinement, fakeAppoinement, fakeAppoinement, fakeAppoinement]
    const [appoinements, setAppoinements] = useState(fakeAppoinements)
    return (
        <div className=' flex flex-col w-full p-5'>
            <h1 className=' font-semibold text-[25px]'>{t("manageapp")}</h1>
            <div className='flex flex-row gap-5 my-5 overflow-x-auto max-w-full '>
                {appoinements.map((appoinement, index) => (
                    <div key={index} className='max-w-[400px]'>
                        <AppoinementCard appoinement={appoinement} index={index} />
                    </div>
                ))}

            </div>
            {appoinements.length == 0 && <div className='flex flex-col w-[400px] h-[250px] border border-gray-300 rounded-xl shadow-lg p-2 items-center justify-center'>{t("noapp")}</div>}
            <h1 className=' font-semibold text-[25px] mt-5'>{t("apphis")}</h1>
            <div
                className=' flex flex-col gap-3'>
                {fakeAppoinements.map((appoinement, index) => (
                    <div className=' flex flex-row gap-5 font-light text-grey'>
                        <p>{appoinement.name}</p>
                        <p>{appoinement.number}</p>
                        <p>{appoinement.email}</p>
                        <p>{appoinement.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Appoinements