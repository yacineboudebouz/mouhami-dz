import React, { useEffect, useState } from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import AvocatProfile from './components/AvocatProfile'
import RateFrom from './components/RateFrom'
import Blogs from './components/Blogs'
import axios from 'axios'
import HireAvocatForm from './components/HireAvocatForm'
import { useParams } from 'react-router-dom'
function Avocat() {
    const id = useParams().id

    const [avocat, setAvocat] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        fetchAvocat()
    }, [])
    const fetchAvocat = async () => {
        setIsLoading(true)
        await new Promise(r => setTimeout(r, 1000))
        const res = await axios.get(`http://localhost:3000/avocats/${id}`)
        if (res.status === 200) {
            setAvocat(res.data)
        }
        else {
            console.log("error")
        }
        setIsLoading(false)
    }

    return (
        <div className='relative w-full'>
            <Navbar />
            {isLoading && <div className=' h-screen'></div>}
            {avocat == null && !isLoading && <div className='w-full h-full flex justify-center items-center'>
                NO AVOCAT With this ID
            </div>}
            {avocat != null && <div className=' flex flex-col md:p-48 gap-10'>
                <AvocatProfile avocat={avocat} />
                <RateFrom />
                <Blogs avocatId={avocat.id} />
                <HireAvocatForm avocat={avocat} />
            </div>}
            {isLoading && <div className=' fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center '>
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
            </div>}
            <Footer />
        </div>
    )
}

export default Avocat