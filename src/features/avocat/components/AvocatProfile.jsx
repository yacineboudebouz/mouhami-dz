import React from 'react'
import { fakeAvocat } from '../../../constants/fake_data'
import { SectionWrapper } from '../../../hoc'
import Hero from '../../landing/components/Hero'
import { useTranslation } from 'react-i18next'
import { StarRating } from '../../../common/widgets/StarRating'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import { primaryColor } from '../../../utils/colors'
import { semilogo } from '../../../assets'

import { MapContainer, TileLayer, useMap, Marker, Popup, } from 'react-leaflet'
import { useParams } from 'react-router-dom'
function AvocatProfile() {
    const { t, i18n } = useTranslation();
    const id = useParams().id

    return (
        <div className=' flex md:flex-row md:justify-between   p-5 justify-center flex-col items-center md:items-start'>
            <div className=' flex flex-col md:w-[400px] w-full md:flex-wrap items-center md:items-start '>
                <img src={fakeAvocat.img} className=' w-[250px] h-[250px]' />
                <div className=' flex flex-wrap mt-6 flex-row text-[25px] gap-2'>
                    <p>{fakeAvocat.name}</p>
                    <p >{fakeAvocat.surname}</p>
                    <p >{fakeAvocat.wilaya}</p>
                </div>
                <p className=' font-semibold text-primary text-[25px]'>{t("right")}</p>
                <div className=' flex flex-row  items-center  gap-4'>
                    <StarRating rating={fakeAvocat.rating} />
                    <p className=' '>{fakeAvocat.rates + t("rates")}</p>
                </div>
                <div className=' my-5 mx-1 md:text-[20px]'>
                    <div className='flex flex-row gap-2 items-center'>
                        <PhoneIcon style={{ color: primaryColor }} />
                        <p>{fakeAvocat.phonenumber}</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <EmailIcon style={{ color: primaryColor }} />
                        <p>{fakeAvocat.email}</p>
                    </div>

                    <div className='flex flex-row gap-2 items-center'>
                        <LanguageIcon style={{ color: primaryColor }} />
                        <a href={fakeAvocat.website}>{fakeAvocat.website}</a>
                    </div>
                </div>
                <p>{fakeAvocat.bio}</p>
            </div>
            {/* <img src={semilogo} className='absolute top-64 left-0 z-50' /> */}

            <MapContainer center={fakeAvocat.position} zoom={13} scrollWheelZoom={false} style={{ height: "500px", width: "300px" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={fakeAvocat.position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>

        </div>
    )
}

export default SectionWrapper(AvocatProfile, "")