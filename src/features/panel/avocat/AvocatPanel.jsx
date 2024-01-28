import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { logo } from '../../../assets'
import GroupIcon from '@mui/icons-material/Group';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Appoinements from './components/Appoinements';
import BlogsPanel from './components/BlogsPanel';
import { useNavigate } from 'react-router-dom';
const AvocatPanel = () => {
    const [active, setActive] = useState(0)
    const { t, i18n } = useTranslation();
    const navigate = useNavigate()
    const [avocatFName , setAvocatFName] = useState("")

    useEffect(()=>{
        const AvocatName = sessionStorage.getItem("name")
        setAvocatFName(AvocatName)
        console.log(sessionStorage)
        console.log(AvocatName)
    },[])

    const handleLogout = ()=>{
        sessionStorage.clear()
        navigate("/")
    }
    return (
        <section className=' flex flex-row w-screen h-full'>
            <div className='fixed left-0 w-[100px] h-screen bg-navbar flex flex-col justify-between items-center py-4'>
                <img src={logo} className=' h-[50px] w-[50px]' />
                <div className=' flex flex-col gap-3'>
                    <div className={`cursor-pointer  w-[100px] h-[70px]  border-primary flex items-center justify-center ${active == 0 ? 'border-l-2' : ''}`} onClick={() => setActive(0)}>
                        <GroupIcon sx={{ color: active == 0 ? "#C89D66" : "white" }} />
                    </div>
                    <div className={`cursor-pointer  w-[100px] h-[70px]  border-primary flex items-center justify-center ${active == 1 ? 'border-l-2' : ''}`} onClick={() => setActive(1)}>
                        <LanguageIcon sx={{ color: active == 1 ? "#C89D66" : "white" }} />
                    </div>
                    <div className={`cursor-pointer  w-[100px] h-[70px]  border-primary flex items-center justify-center ${active == 2 ? 'border-l-2' : ''}`} onClick={() => setActive(2)}>
                        <SettingsIcon sx={{ color: active == 2 ? "#C89D66" : "white" }} />
                    </div>
                </div>
                <button onClick={handleLogout}>
                    <LogoutIcon sx={{ color: "white" }} />
                </button>
            </div>
            <div className='pl-[100px] flex flex-col w-screen'>
                <div className=' flex flex-row w-full justify-end  p-7 items-center'>
                    <NotificationsNoneOutlinedIcon sx={{ color: "gray" }} />
                    <button className='  text-grey rounded-md px-4 py-2 ml-4 hover:text-primary duration-300' onClick={handleLogout}>{t("logout")}</button>
                </div>
                <p className='text-secondary text-2xl font-semibold p-4'>Bonjour maitre , {avocatFName}</p>
                {active == 0 && <Appoinements />}
                {active == 1 && <BlogsPanel />}
            </div>
        </section>
    )
}

export default AvocatPanel