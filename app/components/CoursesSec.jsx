'use client'
import { useTranslation } from "react-i18next";
import {Suspense, useEffect} from 'react'
import { CourseComponentSkeleton } from './Skeleton'
import Card from '@/app/components/Card'
import Link from 'next/link'


export default function CoursesSec({courses}) {
    const { t, i18n } = useTranslation();
    const lng=i18n.language


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
    <div  className={`BOTTOM flex flex-col`}>
        
        <div className={` items-center justify-center text-center pb-20`}>
            <h1 className={`text-[25px] sm:text-3xl md:text-[40px] lg:text-5xl font-freesansbold ${i18n.language === 'en' || 'font-kurdish'}`}>
            {t('course.title')}
            </h1>
        </div>

      <div  className="BOTTOM w-full grid grid-template-rows-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 items-center justify-center">
            {/* {loading ?
            <>
            
            {[...Array(6)].map((_, index) => <CourseComponentSkeleton key={index} />)}
            </>
            :
            <> */}
            {courses?.map((course, index)=>{
                return(
                <Suspense key={index} fallback={<CourseComponentSkeleton />} >
                  <Link href={`/courses/${course.courseID}`}>
                    <Card
                    id={course._id}
                    courseID={course.courseID}
                    name={lng === 'en' ? course.EnglishName : lng === 'ku' ? course.KurdishName : course.ArabicName }
                    description={lng === 'en' ? course.Englishdescription : lng === 'ku' ? course.Kurdishdescription : course.Arabicdescription}
                    teacher={lng === 'en' ? course.EnglishLevel : lng === 'ku' ? course.KurdishLevel : course.ArabicLevel}
                    image={course.image} />
                  </Link>  
                </Suspense>
                )
            })}
            {/* </>} */}
      </div>

      <div  className={` flex pt-5 items-center justify-center md:items-center md:justify-start`}>
        <Link href={'/courses'}>
          <div className={`blue_btn ${i18n.language === 'en' || 'font-kurdish'}`}>{t('course.viewAll')}</div>
        </Link>
       </div>


    </div>  
        </>
    )
}