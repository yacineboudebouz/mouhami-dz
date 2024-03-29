import * as React from 'react';
import axios from 'axios';
import { useState } from 'react'
import { motion } from 'framer-motion'
import { littleFadeIn, littleFadeInX, slideIn, textVariant } from "../../utils/motion"
import GoogleIcon from '@mui/icons-material/Google';
import logo from "../../assets/signUp/logoName.png"
import { NavLink, useNavigate } from 'react-router-dom';

const LoginAvocat = () => {
  const [email , setEmail] = useState("")
  const [motDePasse , setMotDePasse] = useState()
  const navigate = useNavigate()


  const handleLogin = (e)=>{
      e.preventDefault()
      axios.get('http://localhost:3000/avocats', {
        params: {
          email: email
        }
      })
      .then(response => {
        const avocats = response.data;
        if (avocats.length > 0) {
          const avocat = avocats[0]; // Assuming there's only one avocat per email
          console.log(avocat.password)
          console.log(motDePasse)
          if(avocat.password == motDePasse){
              if(avocat.status === "Active"){
                console.log("login approved")
                console.log(sessionStorage)
                sessionStorage.setItem("name" , avocat.name)
                console.log(sessionStorage)
                navigate("/avocat-panel/"+ avocat.name)
              }
              else{
                alert("your registration has not been approved yet")
              }
          }
          else{
            alert("Incorrect password")
          }
        } else {
          alert("this user doesn't exist")
        }
      })
      .catch(error => {
        console.error('Error fetching avocat by email:', error);
      });
  };


  return (
    <div className='flex flex-row justify-between'>
       <div className='flex flex-col items-center text-secondary p-8 gap-8 bg-logo-pattern bg-no-repeat bg-left-bottom'>
          <p className='font-bold text-2xl'>Se connecter</p>
          <form onSubmit={handleLogin} className='flex flex-col items-center'>
                    <span className='flex items-center rounded-full text-secondary shadow p-4 cursor-pointer hover:grayscale'><GoogleIcon className='h-7 w-7'></GoogleIcon></span>
                    <div class="flex flex-col gap-6 mb-6 items-center py-8 w-[40em]">
                         <div class="mb-6 w-[32em]">
                            <label for="email" class="block mb-2 text-sm font-medium text-secondary dark:text-white">Email </label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="john.doe@company.com" onChange={(e)=>setEmail(e.target.value)} required />
                        </div> 
                        <div class="mb-6 w-[32em]">
                            <label for="password" class="block mb-2 text-sm font-medium text-secondary dark:text-white">Mot de passe</label>
                            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="•••••••••" onChange={(e)=>setMotDePasse(e.target.value)} required />
                        </div> 
                    </div>
                    <motion.button type="submit" variants={littleFadeIn()} className=' bg-primary flex items-center p-3 justify-center cursor-pointer text-white hover:bg-amber-800 transition duration-300'>Connecter</motion.button>
          </form>
  

      </div>
      <div className='flex flex-col items-center justify-between bg-hero-pattern w-2/6 py-10 h-[100vh]'>
        <div className='flex flex-col items-center justify-center gap-6 mt-32'>
            <p className='text-[3em] font-medium text-white'>Bonjour !</p>
            <p className='text-sm text-white '>Inscrivez-vous pour créer un nouveau compte</p>
            <NavLink to='/sign-up-avocat'>
                <motion.button variants={littleFadeIn()} className=' bg-primary flex items-center p-3 justify-center cursor-pointer text-white hover:bg-amber-800 transition duration-300'>S'inscrire</motion.button>
            </NavLink>
            </div>
        <img src={logo} className='h-8 w-32'></img>  
      </div>
    </div>
  )
}

export default LoginAvocat