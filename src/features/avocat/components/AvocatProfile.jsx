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
// import GoogleMapReact from 'google-map-react'
// import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
function AvocatProfile() {
    const { t, i18n } = useTranslation();
    const position = [51.505, -0.09]
    return (
        <div className=' flex md:flex-row md:justify-between   p-5 justify-center flex-col items-center md:items-start'>
            <div className=' flex flex-col md:w-[400px] w-full md:flex-wrap items-center md:items-start z-50'>
                <img src={fakeAvocat.img} className=' w-[250px] h-[250px]' />
                <div className=' flex flex-wrap mt-6 flex-row text-[25px] gap-2'>
                    <p>{fakeAvocat.name}</p>
                    <p >{fakeAvocat.surname}</p>
                    <p >{fakeAvocat.wilaya}</p>
                </div>
                <p className=' font-semibold text-primary text-[25px]'>{t("right")}</p>
                <div className=' flex flex-row  items-center  gap-4'>
                    <StarRating rating={fakeAvocat.rating} />
                    <p className=' '>{fakeAvocat.rates + t("  rates")}</p>
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
            <img src={semilogo} className='absolute top-64 left-0 z-0' />
        </div>
    )
}

export default SectionWrapper(AvocatProfile, "")