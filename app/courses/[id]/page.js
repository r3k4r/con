"use client"
import {useEffect, useState} from 'react'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';


export default function Page({params}){
    const { t , i18n} = useTranslation()
    const [data, setData]=useState([])
    const lng=i18n.language

    useEffect(()=>{
         async function fetchData(){
            try{ 
                const response = await fetch(`/api/courses/${params.id}` , {
                method: 'GET',
                });
                const data = await response.json();
                setData(data);

            }catch(err){
                console.log("the error of fetching data is: " + err)
            }
        }

        fetchData()
    },[params.id])

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

    return(
        <>
    <section className='padding-x w-full flex flex-col justify-center items-center py-48 gap-0'>
            <div className={`w-full flex flex-col-reverse md:flex-row items-center justify-around  gap-10`}>
                <div id='text' className={`LEFT sm:w-[540px] flex flex-col items-start justify-start gap-2`}>
                    <h1 className={`text-xl sm:text-2xl md:text-[1.6rem] lg:text-4xl break-all text-black text-start font-freesansbold space-x-1 pb-4 ${lng === 'en' || 'font-kurdish'}`}>
                        {lng==='en'? data.EnglishName : lng==='ku' ? data.KurdishName : data.ArabicName}
                    </h1>                    
                    <p className={`break-words text-sm  lg:text-md font-freesans  ${lng === 'en' || 'font-kurdish'} text-gray-600 pb-10 md:pb-7 lg:pb-14`}>
                        {lng==='en'? data.EnglishAbout : lng==='ku' ? data.KurdishAbout : data.ArabicAbout}
                    </p>  

         
                    <div id='short-informations' className={`flex flex-col gap-3 break-all pb-10 md:pb-0`}>
                        <p className={`flex items-center justify-start gap-3 text-sm lg:text-md text-black font-freesans ${lng === 'en' || 'font-kurdish'}`}> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /></svg></span>  {lng==='en'? data.EnglishPeriod : lng==='ku' ? data.KurdishPeriod : data.ArabicPeriod} </p> 
                        <p className={`flex items-center justify-start gap-3 text-sm lg:text-md text-black font-freesans ${lng === 'en' || 'font-kurdish'}`}> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></span>  {lng==='en'? data.EnglishTime : lng==='ku' ? data.KurdishTime : data.ArabicTime} </p> 
                        <p className={`flex items-center justify-start gap-3 text-sm lg:text-md text-black font-freesans ${lng === 'en' || 'font-kurdish'}`}> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg> </span>  {lng==='en'? data.EnglishCertificate : lng==='ku' ? data.KurdishCertificate : data.ArabicCertificate} </p> 
                        <p className={`flex items-center justify-start gap-3 text-sm lg:text-md text-black font-freesans ${lng === 'en' || 'font-kurdish'}`}> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg></span>  {lng==='en'? data.EnglishLevel : lng==='ku' ? data.KurdishLevel : data.ArabicLevel} </p> 
                    </div>                         
                </div>  
                
                <div id='image' className={`RIGHT relative  w-full h-[260px] sm:w-[520px] sm:h-[300px] md:w-[450px] md:h-[300px] lg:w-[600px] lg:h-[450px]`}>
                   <Image 
                    src={data.image}
                    alt="course image"
                    fill
                    objectFit='cover'
                    sizes={100}
                    priority
                    className={`rounded-2xl`}
                    />
                </div>     
            </div>
    </section>
        </>     
    )
}