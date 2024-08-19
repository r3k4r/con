
import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'


export default function Card ({name, image, description, teacher, deleteCourse, id, courseID }){
    const { t, i18n }= useTranslation()
    const lng = i18n.language
    return(
        <>
            <div className='peer mr-5 overflow-hidden mb-5 relative  flex rounded-2xl transition  hover:scale-95 duration-500 hover:shadow-lg hover:shadow-gray-400/50'>
                    <div className='flex flex-col flex-1 gap-5 p-2 break-inside-avoid rounded-2xl border border-gray-300 bg-white/20 bg-clip-padding backdrop-blur-lg backdrop-filter md:w-[330px] w-full h-fit'>
                            
                            <div className='w-full h-[165px]'>
                                <Image 
                                className='w-full h-[165px] object-cover rounded-xl'
                                src={image}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt='course image'
                                />         
                            </div>

                        <div className={`flex flex-col px-2 pb-4 gap-2`}>
                            <p className={`break-all font-freesansbold text-xl ${lng === 'en' || 'font-kurdish font-bold'}`}>{name}</p>
                            <p className={`break-all font-freesans  text-gray-500 ${lng === 'en' || 'font-kurdish'}`}>{description}</p>
                            <p className={`break-all font-freesans text-sm pt-2 ${lng === 'en' || 'font-kurdish'}`}>{teacher}</p>
                        </div>

                        {deleteCourse &&   
                        <div className={`px-2 pb-2`}>
                        <button className='text-red-600 font-freesans' onClick={() => deleteCourse(id)}>delete</button>
                        </div>}

                            <div className={"card-layer flex items-enter justify-center"}>
                                <div className={`w-fit h-fit p-2 bg-gray-200 rounded-full flex items-center justify-center gap-1`}>
                                     <p className={`text-black text-sm font-freesansbold ${i18n === 'en' || 'font-kurdish font-bold'}`}> {t('course.viewMore')} </p>

                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                     </svg>

                                </div>
                            </div>
                            
                    </div>  
            </div>
            


        </>
    )
}