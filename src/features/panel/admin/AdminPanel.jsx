import React, { useState , useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { logo } from '../../../assets'
import GroupIcon from '@mui/icons-material/Group';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AvocatsManagement from './components/AvocatsManagement';
import CommentsPanel from './components/CommentsPanel';
import { useNavigate } from 'react-router-dom';
const AdminPanel = () => {
    const [active, setActive] = useState(0)
    const [adminFName , setAdminFName] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        const AdminName = sessionStorage.getItem("AdmiName")
        setAdminFName(AdminName)
        console.log(sessionStorage)
        console.log(AdminName)
    },[])

    const handleLogout = ()=>{
        sessionStorage.clear()
        navigate("/")
    }
    const { t, i18n } = useTranslation();
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
                        <NotificationsNoneOutlinedIcon sx={{ color: active == 2 ? "#C89D66" : "white" }} />
                    </div>
                </div>
                <button onClick={handleLogout}>
                    <LogoutIcon sx={{ color: "white" }} />
                </button>
            </div>
            <div className='pl-[100px] flex flex-col w-screen'>
                <div className=' flex flex-row w-full justify-end  p-7 items-center'>

                    <button className='  text-grey rounded-md px-4 py-2 ml-4 hover:text-primary duration-300' onClick={handleLogout}>{t("logout")}</button>
                </div>
                <p className='text-secondary text-2xl font-semibold p-4'>Bonjour , Mr {adminFName}</p>
                {active == 0 && <AvocatsManagement />}
                {active == 1 && <CommentsPanel />}

            </div>
        </section>
    )
}

export default AdminPanel