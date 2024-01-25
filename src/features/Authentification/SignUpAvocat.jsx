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

const SignUpAvocat = () => {
  const steps = ['', ''];

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [nom , setNom] = useState("")
  const [prenom , setPrenom] = useState("")
  const [email , setEmail] = useState("")
  const [motDePasse , setMotDePasse] = useState("")
  const [address , setAddress] = useState("")
  const [specialite , setSpecialite] = useState("")
  const [file, setFile] = useState();

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

  
  const handleFile = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
    }

    setFile(selectedFile);
  };

  const handleSubmit = ()=>{
    const formData = new FormData();
    formData.append('Non', nom);
    formData.append('Non', prenom);
    formData.append('Non', email);
    formData.append('Non', motDePasse);
    formData.append('non', address);
    formData.append('non', specialite);
    formData.append('CV', file);

    axios.post('' , formData)
    .then(res =>{
        if(res.data.staus === "Success"){
            console.log("succeded")
        }
        else{
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
            <motion.button variants={littleFadeIn()} className=' bg-primary flex items-center p-3 justify-center cursor-pointer text-white hover:bg-amber-800 transition duration-300'>Se connecter</motion.button>
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
                      <p className='text-secondary text-xl font-medium w-[400px] text-center'> Votre demande d’inscription a été crée avec succès .</p>
                      <p className='text-zinc-200 text-xs '>Notre équipe vous contactera bientôt pour confirmer plus de détails</p>
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
                      <div class="grid gap-6 mb-6 md:grid-cols-2 py-8">
                        <div className='w-[20em]'>
                            <label for="Nom" class="block mb-2 text-sm font-medium text-secondary dark:text-white">Nom</label>
                            <input type="text" id="Nom" class="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="John" onChange={(e)=>setNom(e.target.value)} required />
                        </div>
                        <div className='w-[20em]'>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-secondary dark:text-white">Prenom</label>
                            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="Doe" onChange={(e)=>setPrenom(e.target.value)} required />
                        </div>
                        <div class="mb-6 w-[20em]">
                            <label for="email" class="block mb-2 text-sm font-medium text-secondary dark:text-white">Email </label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="john.doe@company.com" onChange={(e)=>setEmail(e.target.value)} required />
                        </div> 
                        <div class="mb-6 w-[20em]">
                            <label for="password" class="block mb-2 text-sm font-medium text-secondary dark:text-white">Mot de passe</label>
                            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="•••••••••" onChange={(e)=>setMotDePasse(e.target.value)} required />
                        </div> 
                        <div class="mb-6 w-[20em]">
                            <label for="confirm_password" class="block mb-2 text-sm font-medium text-secondary dark:text-white">Confirmer mot de passe</label>
                            <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="•••••••••" required />
                        </div> 
                      </div>
                    )}
                    {activeStep === 1 && (
                      <div class="flex flex-col gap-6 mb-6 items-center py-8 w-[40em]">
                        <div className='w-[32em]'>
                            <label for="Address" class="block mb-2 text-sm font-medium text-secondary dark:text-white">Addresse complet</label>
                            <input type="text" id="Address" class="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="cite , wilaya ... " onChange={(e)=>setAddress(e.target.value)} required />
                        </div>
                        <div className='w-[32em]'>
                            <label for="spec" class="block mb-2 text-sm font-medium text-secondary dark:text-white">Domaine juridique</label>
                            <input type="text" id="spec" class="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="Droit de travail .." onChange={(e)=>setSpecialite(e.target.value)} required />
                        </div>
                        <div class="mb-6 w-[32em]">   
                          <label class="block mb-2 text-sm font-medium text-secondary dark:text-white" for="file_input">Votre CV</label>
                          <input
                            class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
                            type="file"
                            id="formFile"
                            onChange={handleFile}
                          />
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

export default SignUpAvocat