import React, { useEffect, useState } from 'react'
import Navbar from './../../common/Navbar'
import Footer from "./../../common/Footer"
import { motion } from 'framer-motion'
import { littleFadeIn, littleFadeInX, slideIn, textVariant } from "../../utils/motion"
import { fakeAvocats } from '../../constants/fiteringData'
import { problemJuridiqueData } from '../../constants/fiteringData'
import MoreIcon from '@mui/icons-material/ExpandMoreRounded';
import EmailIcon from '@mui/icons-material/EmailRounded';
import WebsiteIcon from '@mui/icons-material/LanguageRounded';
import PhoneIcon from '@mui/icons-material/LocalPhoneRounded';
import { StarRating } from '../../common/widgets/StarRating'

import { Link, useParams } from 'react-router-dom/dist'
import { Compare } from '@mui/icons-material'

/*we need filtering parameters from landing page to fetch avocats in here*/
const FindAvocat = ({getData}) => {

    const [problem, setProblem] = useState('')
    const [location, setLocation] = useState('')

    const [language , setLanguage] = useState('')
    const [selectedPrblm , setSelectedPrblm] = useState('')
    const [rating , setRating] = useState('')

    const [avocatsData , setAvocatData] = useState(fakeAvocats)
    const [juridiquePrblms , setJuridiquePrblm] = useState(problemJuridiqueData)


    const [visibleJuridiquePrblms, setVisibleJuridiquePrblms] = useState(4);
    const showMorePrblms = () => {
        setVisibleJuridiquePrblms(visibleJuridiquePrblms + juridiquePrblms.length - 4);
    };

    const [compare , setCompare] = useState(false)
    const [selectedAvocats, setSelectedAvocats] = useState([]);
;

    console.log(language)
    console.log(selectedPrblm)
    console.log(rating)

    const handleCompare = (avocatID) => {
        setCompare(!compare)
        setSelectedAvocats((prevSelectedAvocats) => {
            const isAlreadySelected = prevSelectedAvocats.some((avocat) => avocat.avocatID === avocatID);
          
            if (isAlreadySelected) {
              return prevSelectedAvocats.filter((avocat) => avocat.avocatID !== avocatID);
            } else {
              const selectedAvocat = avocatsData.find((avocat) => avocat.avocatID === avocatID);
              return [...prevSelectedAvocats, selectedAvocat];
            }
          });          

    };
    useEffect(()=>{
        getData(selectedAvocats)
        console.log(selectedAvocats)

    },[selectedAvocats])

    useEffect(()=>{
        fetchAvocats()
        fetchProblemData()
    },[])

    const fetchAvocats = ()=>{

    }
    const fetchProblemData = ()=>{

    }

    return (
        <div className=' flex flex-col relative '>
            <Navbar />
            <div className='flex flex-col gap-12 py-10'>
                <p className='flex items-center text-secondary text-3xl justify-center'>Trouver votre avocat</p>
                <div className=' flex md:flex-row flex-col justify-center w-full px-24 gap-2'>
                    <motion.input variants={littleFadeInX()} onChange={(e) => setProblem(e.target.value)} type='text' placeholder='Problème juridique' className=' outline-2 p-3 shadow-lg outline-primary' value={problem} />
                    <motion.input variants={textVariant()} onChange={(e) => setLocation(e.target.value)} type='text' placeholder='Wilaya, code postal  . . .' className=' outline-2 p-3 shadow-lg outline-primary' value={location} />
                    <motion.button variants={littleFadeIn()} className=' bg-primary flex items-center p-3 justify-center cursor-pointer text-white hover:bg-amber-800 transition duration-300'>Trouver Un Avocat</motion.button>
                </div>
                <div className='flex flex-row gap-[8em]'>
                    <div className='flex flex-col gap-4 bg-secondary items-start w-fit p-6 rounded-lg '>
                        <div className='flex flex-col gap-3 '>
                            <h3 class="mb-4 font-normal text-base text-white ">Probleme juridique</h3>
                            <ul class="w-48 text-sm font-medium text-white  ">
                                {juridiquePrblms.slice(0, visibleJuridiquePrblms).map((prblm , index)=>(
                                    <li className="w-full  rounded-t-lg ">
                                        <div className="flex items-center ps-3">
                                            <input  id="list-radio-license" type="radio" 
                                                    value={prblm.problemValue} 
                                                    onChange={(e)=>{setSelectedPrblm(e.target.value)}}
                                                    name="list-radio" 
                                                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary "/>
                                            <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-white ">{prblm.problemValue}</label>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            {visibleJuridiquePrblms < juridiquePrblms.length && 
                                (<span className="flex flex-row items-center justify-center text-neutral-400" onClick={showMorePrblms}>voir plus <MoreIcon></MoreIcon></span>) 
                            }
                        </div>
                        <div className="flex flex-col gap-3 items-start">
                            <h3 class="mb-4 font-normal text-base text-white ">Avis</h3>
                            <div className="flex flex-col gap-3">
                                {[1, 2, 3, 4, 5].map((rated) => (
                                    
                                        <span className="flex flex-row gap-4 items-center" key={rated}>
                                            <input type="radio"
                                                id={rated + "ts"} 
                                                name="ratingGroup"
                                                value={rated}
                                                onChange={(e) => setRating(e.target.value)}
                                            />
                                            <StarRating rating={rated}></StarRating>
                                        </span>

                                ))}
                            </div>
                        </div>

                        <div className='flex flex-row gap-6 items-center justify-center'>
                            <h3 className="mb-4 font-normal text-base text-white ">Localisation : </h3>
                            <p className="mb-4 font-normal text-white ">{location}</p>
                        </div>  

                        {/*<div className='flex flex-col gap-3 items-start'>
                            <h3 class="mb-4 font-normal text-base text-white ">Afficher par distance </h3>
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    aria-label="Custom marks"
                                    defaultValue={20}
                                    getAriaValueText={valuetext}
                                    step={10}
                                    valueLabelDisplay="auto"
                                    marks={marks}
                                    sx={{ color: theme.palette.background.primary }}
                                />
                            </Box>       
                            </div>*/
                        }                      
                        <div>
                            <h3 class="mb-4 font-normal text-base text-white ">Language</h3>
                            <select required
                                className="text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-zinc-600/30 border-[0.3px] border-gray-100 rounded-[5px] outline-zinc-600/50 appearance-none invalid:text-black/30 w-64"
                                onChange={(e)=>{setLanguage(e.target.value)}}
                                >
                                <option value="" disabled selected>-- selectionner --</option>
                                <option value="Francais">Francais</option>
                                <option value="Arabe">Arabe</option>
                                <option value="Anglais">Anglais</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        {avocatsData
                        
                        .filter(avocat => {
                            // Apply your filtering conditions here
                            const languageMatch = !language || avocat.language === language;
                            const ratingMatch = !rating || avocat.rating >= rating;
                            const selectedProblemMatch = !selectedPrblm || avocat.speciality === selectedPrblm;

                            return languageMatch && ratingMatch && selectedProblemMatch;
                            })
                        .map((avocat , index)=>(
                            <div className=' relative'>
                                <div className='flex flex-row gap-6 shadow-md rounded-md p-6'>
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex flex-row gap-4'>
                                            <img className='rounded-full w-[60px] h-[60px]' src={avocat.img} alt='avocat-img'></img>
                                            <span className='flex flex-col gap-2 items-start'>
                                                <p className='text-secondary text-base'>{avocat.surname + " , " + avocat.wilaya}</p>
                                                <p className='text-primary text-sm'>{avocat.speciality}</p>
                                                <span className='flex flex-row items-center gap-4'>
                                                    <StarRating rating={avocat.rating}></StarRating>
                                                    <p className='text-xs'>{avocat.rates} Avis </p>
                                                </span>
                                            </span>
                                        </div>
                                        <p className='w-[300px] text-secondary text-sm'>{avocat.bio}</p>
                                    </div>
                                    <div className='flex flex-col gap-3 '>
                                        <motion.button variants={littleFadeIn()} className=' bg-primary flex items-center p-3 justify-center cursor-pointer text-white hover:bg-amber-800 transition duration-300'>
                                            <Link to={`/avocat/${avocat.avocatID}`}> Visiter son profile</Link>
                                        </motion.button>
                                        <span className='flex flex-row gap-4'>
                                            <PhoneIcon className='text-primary w-[25px] h-[25px]'></PhoneIcon>
                                            <p>{avocat.phonenumber}</p>
                                        </span>
                                        <span className='flex flex-row gap-4'>
                                            <EmailIcon className='text-primary w-[25px] h-[25px]'></EmailIcon>
                                            <p>{avocat.email}</p>
                                        </span>
                                        <span className='flex flex-row gap-4'>
                                            <WebsiteIcon className='text-primary w-[25px] h-[25px]'></WebsiteIcon>
                                            <p>{avocat.website}</p>
                                        </span>
                                        <span className='flex flex-row gap-4'>
                                            <input type='checkbox' 
                                                value={Compare}
                                                onChange={() => handleCompare(avocat.avocatID)}
                                            ></input>
                                            <label>Comparer</label>
                                        </span>

                                    </div>   
                                </div>
                                {
                                    selectedAvocats.some((item) => item.avocatID === avocat.avocatID) && (
                                        <div className='bg-secondaryBlur flex items-center justify-center absolute top-0 bottom-0 left-0 right-0' onClick={()=>{handleCompare(avocat.avocatID)}}>
                                            <motion.button
                                                variants={littleFadeIn()}
                                                className='bg-primary flex items-center p-3 justify-center cursor-pointer text-white hover:bg-amber-800 transition duration-300'
                                            >
                                                <Link to={`/compare-avocat`}>
                                                    <p>Comparer</p>                                        
                                                </Link>
                                            </motion.button>
                                        </div>
                                    )
                                }
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    )
}

export default FindAvocat ;