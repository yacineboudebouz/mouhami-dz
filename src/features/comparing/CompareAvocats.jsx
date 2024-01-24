import React from 'react'
import { fakeAvocats } from '../../constants/fiteringData'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import { useState } from 'react'
const CompareAvocats = ({selectedAvocat}) => {
  const [avocatData , setAvocatData] = useState(fakeAvocats)
  return (
    <div className='flex flex-col gap-32'>
        <Navbar></Navbar>
        <div className='flex flex-col items-center gap-12 text-secondary'>
          <p className='text-2xl'>Comparez nos avocats et trouvez le vôtre</p>
          <table className='w-full text-xm text-left rtl:text-right'>
            <thead className='text-base text-gray-700 uppercase bg-gray-50'>
                <tr className='py-1 '>
                  <th scope='col' className="px-6 py-3"></th>
                  <th className="px-6 py-3" >Nom</th>
                  <th className="px-6 py-3">Domaine juridique</th>
                  <th className="px-6 py-3">Avis</th>
                  <th className="px-6 py-3">Localisation</th>
                  <th className="px-6 py-3">N° tel</th>
                  <th className="px-6 py-3">site Web</th>
                </tr>
            </thead>
            <tbody>
              {
                avocatData.map((avocat , index)=>(
                  <tr className='odd:bg-white even:bg-gray-50 border-b'>
                    <td className="px-6 py-3"><img className="rounded-full h-12 w-12 " src={avocat.img} alt='avocat-img'></img></td>
                    <td className="px-6 py-3">{avocat.name + " " + avocat.surname}</td>
                    <td className="px-6 py-3">{avocat.speciality}</td>
                    <td className="px-6 py-3">{avocat.rating}</td>
                    <td className="px-6 py-3">{avocat.wilaya}</td>
                    <td className="px-6 py-3">{avocat.phonenumber}</td>
                    <td className="px-6 py-3">{avocat.website}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default CompareAvocats