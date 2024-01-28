import * as React from 'react';
import axios from 'axios';
import { useState } from 'react'
import { motion } from 'framer-motion'
import { littleFadeIn, littleFadeInX, slideIn, textVariant } from "../../utils/motion"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from "../../assets/signUp/logoName.png"
import success from  "../../assets/signUp/success.png"
import { NavLink, useNavigate } from 'react-router-dom';

const SignUpAdmin = () => {
  const steps = ['', ''];

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [nom , setNom] = useState("")
  const [prenom , setPrenom] = useState("")
  const [email , setEmail] = useState("")
  const [motDePasse , setMotDePasse] = useState("")

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    const data = {
      "name": nom,
      "surname": prenom,
      "email": email,
      "password" : motDePasse ,
      "id": 1
    }
    axios.post('http://localhost:3000/admin' , data)
    .then(res =>{
        if(res.statusText === "Created"){
            console.log("succeded")
            navigate("/")
        }
        else{
            console.log(res.statusText)
            console.log("failed")
        }
    })
    .catch(err => console.log(err))
  }
 
  return (
    <div className='flex flex-row'>
       <div className='flex flex-col items-center justify-between bg-hero-pattern w-2/6 py-10 h-[100vh]'>
        <div className='flex flex-col items-center justify-center gap-6 mt-32'>
            <p className='text-[3em] font-medium text-white'>De retour !</p>
            <p className='text-sm text-white '>Connectez-vous pour accéder à votre compte</p>
            <NavLink to='/login-admin'>
              <motion.button variants={littleFadeIn()} className=' bg-primary flex items-center p-3 justify-center cursor-pointer text-white hover:bg-amber-800 transition duration-300'>Se connecter</motion.button>
            </NavLink>
            
        </div>
        <img src={logo} className='h-8 w-32'></img>  
       </div>
       <div className='flex flex-col items-center text-secondary p-8 gap-8'>
          <p className='font-bold text-xl'>S’inscrire</p>
          <form onSubmit={handleSubmit}>
            <Box sx={{ width: '100%' }}>
              <Stepper nonLinear activeStep={activeStep} >
                {steps.map((label, index) => (
                  <Step key={label} completed={completed[index]}>
                      <StepButton 
                        color="inherit" 
                        onClick={handleStep(index)}
                        sx={{
                          '& .MuiStepIcon-root.Mui-active': {
                            color: '#C89D66',
                          },
                          '& .MuiStepIcon-root.Mui-completed ': {
                            color: '#C89D66',
                          },
                        }}
                      >
                        {label}
                      </StepButton>
                  </Step>
                ))}
              </Stepper>
              <div>
                {allStepsCompleted() ? (
                  <React.Fragment>
                    <div className='flex flex-col gap-6 mb-6 items-center py-8 w-[40em]'>
                      <img src={success} className='h-28 w-28'></img>
                      <p className='text-secondary text-xl font-medium w-[400px] text-center'> Merci de verifier votre boite mail .</p>
                    </div>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                      <Box sx={{ flex: '1 1 auto' }} />
                      <Button sx={{ color: '#C89D66' }} onClick={handleReset}>Reset</Button>
                      <Button sx={{ color: '#C89D66' }} type="submit" >Submit</Button>
                    </Box>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {activeStep === 0 && (
                      <div class="flex flex-col gap-6 mb-6 items-center py-8 w-[40em]">
                        <div className='w-[32em]'>
                            <label for="Nom" class="block mb-2 text-sm font-medium text-secondary dark:text-white">Nom</label>
                            <input type="text" id="Nom" class="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="John" onChange={(e)=>setNom(e.target.value)} required />
                        </div>
                        <div className='w-[32em]'>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-secondary dark:text-white">Prenom</label>
                            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="Doe" onChange={(e)=>setPrenom(e.target.value)} required />
                        </div>
                      </div>
                    )}
                    {activeStep === 1 && (
                      <div class="flex flex-col gap-6 mb-6 items-center py-8 w-[40em]">
                        <div class="mb-6 w-[32em]">
                            <label for="email" class="block mb-2 text-sm font-medium text-secondary dark:text-white">Email </label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="john.doe@company.com" onChange={(e)=>setEmail(e.target.value)} required />
                        </div> 
                        <div class="mb-6 w-[32em]">
                            <label for="password" class="block mb-2 text-sm font-medium text-secondary dark:text-white">Mot de passe</label>
                            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="•••••••••" onChange={(e)=>setMotDePasse(e.target.value)} required />
                        </div> 
                        <div class="mb-6 w-[32em]">
                            <label for="confirm_password" class="block mb-2 text-sm font-medium text-secondary dark:text-white">Confirmer mot de passe</label>
                            <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="•••••••••" required />
                        </div>  
                      </div>
                    )}

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Retour
                      </Button>
                      <Box sx={{ flex: '1 1 auto' }} />
                      {activeStep !== steps.length &&
                        (completed[activeStep] ? (
                          <Typography variant="caption" sx={{ display: 'inline-block' }}>
                            Step {activeStep + 1} already completed
                          </Typography>
                        ) : (
                          <Button onClick={handleComplete} sx={{ color: '#C89D66' }}>
                            {completedSteps() === totalSteps() - 1
                              ? 'Terminer'
                              : 'Suivant'}
                          </Button>
                        ))}
                    </Box>
                  </React.Fragment>
                )}
              </div>
            </Box>
          </form>
  

      </div>
    </div>
  )
}

export default SignUpAdmin