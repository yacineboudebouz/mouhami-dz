import React from 'react'
import { motion } from 'framer-motion'
import { logo, menu, close } from './../assets/index'
import { useTranslation } from "react-i18next";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState('FR')

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className=' flex flex-row justify-between  top-0 left-0 p-5 bg-navbar w-full '>
            <Link className=' flex flex-row items-center' to="/">
                <motion.img drag whileDrag={{ rotate: [0, 45, 0, -45, 0], transition: { duration: 1.5, repeat: Infinity, repeatType: 'loop' } }} whileHover={{ scale: 1.1 }} src={logo} className='h-[35px] w-[35px]' />
                <p className=' flex items-center  font-bold text-[20px] px-3 text-white'><span className=' text-primary font-bold text-[20px] px-3 '>DZ</span>Mouhami</p>
            </Link>
            <div className=' flex flex-row justify-evenly items-center'>
                <ul className=' flex-row md:flex hidden'>
                    <NavLink to='/faq' exact activeClassName="text-primary">
                        <motion.li whileHover={{ scale: 1.1, transition: { ease: "easeOut" } }} className=' text-white font-light mx-5 cursor-pointer hover:text-primary transition duration-500 '>{t("discover")}</motion.li>
                    </NavLink>

                    <NavLink to='/sign-up-avocat' exact activeClassName=" text-primary">
                        <motion.li whileHover={{ scale: 1.1, transition: { ease: "easeOut" } }} className=' text-white font-light mx-5 cursor-pointer hover:text-primary transition duration-500 '>{t("login")}</motion.li>
                    </NavLink>
                    <li className="relative inline-block text-left">
                        <button
                            type="button"
                            className="inline-flex justify-center w-full px-4  text-sm font-medium text-white  border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 active:bg-gray-800"
                            id="options-menu"
                            aria-haspopup="true"
                            onClick={toggleDropdown}
                        >
                            <div>{t("language")}</div>
                            <ArrowDropDownOutlinedIcon className='text-white' />

                        </button>

                        {isOpen && (
                            <div className="absolute right-0 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">

                                <div className="py-1">
                                    <button onClick={() => { setLang('FR'); i18n.changeLanguage('FR'); toggleDropdown() }}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        FR
                                    </button>
                                    <button onClick={() => { setLang('EN'); i18n.changeLanguage('EN'); toggleDropdown() }}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        EN
                                    </button>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
                {/* <div className=' h-[30px] w-[30px] bg-red-900 md:hidden '>

                    </div> */}
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer duration-200 hover:rotate-90'
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${toggle ? 'flex' : 'hidden'} p-6  bg-slate-500  absolute top-10 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl  x`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            <motion.li whileHover={{ scale: 1.1, transition: { ease: "easeOut" } }} className=' text-white font-light mx-5 cursor-pointer hover:text-primary transition duration-500 '>Decouvrir dz mouhami </motion.li>
                            <motion.li whileHover={{ scale: 1.1, transition: { ease: "easeOut" } }} className=' text-white font-light mx-5 cursor-pointer hover:text-primary transition duration-500 '>Se connecter</motion.li>
                            <li className="relative inline-block text-left">
                                <button
                                    type="button"
                                    className="inline-flex justify-center w-full px-4  text-sm font-medium text-white  border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 active:bg-gray-800"
                                    id="options-menu"
                                    aria-haspopup="true"
                                    onClick={toggleDropdown}
                                >
                                    <div>{lang}</div>
                                    <ArrowDropDownOutlinedIcon className='text-white' />

                                </button>

                                {isOpen && (
                                    <div className="absolute right-0 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">

                                        <div className="py-1">
                                            <button onClick={() => { setLang('FR'); i18n.changeLanguage('FR'); toggleDropdown() }}

                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                FR
                                            </button>
                                            <button onClick={() => { setLang('EN'); i18n.changeLanguage('EN'); toggleDropdown() }}

                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                EN
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar