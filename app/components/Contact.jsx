'use client'

import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import {useEffect} from 'react'


const Contact = () => {
  const { t, i18n } = useTranslation()
  const lng= i18n.language
  const phoneNumber= 7716904422;
  const emailAddress= 'academy@conneex.com';
  const addressLink = "https://www.google.com/maps/place/تەلاری+سالم%E2%80%AD/@35.559113,45.420809,16z/data=!4m6!3m5!1s0x40002fec64a29e93:0x2da69cbacc80fbc!8m2!3d35.5591132!4d45.4208088!16s%2Fg%2F11vf03r6pk?hl=en&entry=ttu";
  

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ScrollReveal = require('scrollreveal').default;

      const sr = ScrollReveal();

      const revealConfig = (origin) => ({
        origin: origin,
        distance: '120px',
        duration: 1300,
        delay: 300,
        reset: false,
      });

      sr.reveal('.BOTTOM', revealConfig('bottom'));
      sr.reveal('.TOP', revealConfig('top'));
      sr.reveal('.LEFT', revealConfig('left'));
      sr.reveal('.RIGHT', revealConfig('right'));
    }
  }, []);
  
  return (
    <section className={`w-full flex flex-col justify-center items-center pb-20`}>
        <div  className="flex flex-col items-center justify-center">

            <div className={`BOTTOM items-center justify-center text-center pb-20`}>
                <h1 className={`text-4xl md:text-[45px] lg:text-6xl font-freesansbold ${lng === 'en' || 'font-bold font-kurdish'}`}>
                  {t('contact.title')}
                </h1>
            </div>   

            <div className={`BOTTOM w-full lg:w-[70%] xl:w-[52%] flex flex-col items-center justify-center text-center gap-3 pb-4`}>
               <p className={`text-lg text-gray-800 font-freesansbold ${lng === 'en' || 'font-bold font-kurdish'}`}>{t('contact.content')}</p>
               <p className={`text-md text-gray-500 font-freesans ${lng === 'en' || 'font-kurdish'}`}>
                  {t('contact.paragraph')}
               </p>
            </div>
            <br />

            <div className="BOTTOM w-full p-10 grid grid-template-rows-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 items-center justify-center">
            <Link href={`mailto:${emailAddress}`}>
              <div className="flex flex-col gap-5 items-center justify-center text-center hover:scale-90 duration-300">
                <div className="flex flex-col gap-5 items-center justify-center">
                  <div className={`w-14 h-14 bg-ten text-white rounded-full flex items-center justify-center `} id="email">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                  </div>

                  <p className={` text-lg text-ten font-freesansbold ${lng === 'en' || 'font-bold font-kurdish'}`}>{t('contact.email')}</p>
                </div>  
                  
                  <p className={`text-black font-freesans ${lng === 'en' || 'font-kurdish'} `}>academy@conneex.com</p>
              </div>
            </Link>  
               
            <Link target="_blank" rel='noopener noreferrer' href={addressLink}>
              <div  className="flex flex-col gap-5 items-center justify-center text-center hover:scale-90 duration-300" >
                <div className="flex flex-col gap-5 items-center justify-center text-center">
                  <div className={`w-14 h-14 bg-ten text-white rounded-full flex items-center justify-center `} id="location">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                  </div>

                  <p className={` text-lg text-ten font-freesansbold ${lng === 'en' || 'font-bold font-kurdish'}`}>{t('contact.location')}</p>
                </div>  

                <p className={`text-black font-freesans ${lng === 'en' || 'font-kurdish'} `}>{t('contact.locationP')}</p>
              </div>
            </Link>

            <Link target='_blank' href={`https://wa.me/${phoneNumber}`}>
              <div  className="flex flex-col gap-5 items-center justify-center text-center hover:scale-90 duration-300" >
                <div className="flex flex-col gap-5 items-center justify-center">
                  <div className={`w-14 h-14 bg-ten text-white rounded-full flex items-center justify-center `} id="phone">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                  </div>

                  <p className={` text-lg text-ten font-freesansbold ${lng === 'en' || 'font-bold font-kurdish'}`}>{t('contact.phone')}</p>
                </div>  

                <p className={`text-black font-freesans ${lng === 'en' || 'font-kurdish'} `}>{t('contact.phoneP')}</p>
              </div>
            </Link>  
            </div>  


        </div>
    </section>
  )
}

export default Contact