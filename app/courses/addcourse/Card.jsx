
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
                    </div>  
            </div>
            


        </>
    )
}