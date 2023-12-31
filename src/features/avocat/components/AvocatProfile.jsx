import React from 'react'
import { fakeAvocat } from '../../../constants/fake_data'
import { SectionWrapper } from '../../../hoc'
import Hero from '../../landing/components/Hero'

function AvocatProfile() {
    return (
        <div className=' flex flex-row justify-between  p-48 flex-wrap '>
            <div className=' flex flex-col w-[300px] flex-wrap '>
                <img src={fakeAvocat.img} className=' w-[200px] h-[200px]' />
                <div className=' flex flex-wrap'>
                    <p>{fakeAvocat.name}</p>

                </div>
                <div className='  max-w-2xl'></div>
            </div>

        </div>
    )
}

export default SectionWrapper(AvocatProfile, "")