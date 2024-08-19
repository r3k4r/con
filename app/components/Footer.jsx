'use client'

import { MdNavigateNext, MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram,  FaArrowUp, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {Link as ReactScroll,  animateScroll as scroll } from 'react-scroll';
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import {useState, useEffect} from "react"
import { useRouter, usePathname } from 'next/navigation';
import { scroller } from 'react-scroll';

export default function Footer (){
  const { t, i18n }= useTranslation()
  const lng = i18n.language
  let newYear=new Date().getFullYear()
  const router = useRouter();
  const pathname = usePathname();
  const [scrollTarget, setScrollTarget] = useState(null);


  const phoneNumber= 7716904422;
  const emailAddress= 'academy@conneex.com';
  const addressLink = "https://www.google.com/maps/place/تەلاری+سالم%E2%80%AD/@35.559113,45.420809,16z/data=!4m6!3m5!1s0x40002fec64a29e93:0x2da69cbacc80fbc!8m2!3d35.5591132!4d45.4208088!16s%2Fg%2F11vf03r6pk?hl=en&entry=ttu";


  const navigation = [
    { name: t('nav.home'), href: 'home', id: 1 },
    { name: t('nav.about'), href: 'about', id: 2 },
    { name: t('nav.courses'), href: 'courses', id: 3 },
    { name: t('nav.contact'), href: 'contact', id: 4 },
  ]


  
  const socials = [
    {icon: <FaFacebook />, href:"https://www.facebook.com/profile.php?id=61562415647668"},
    {icon:   <FaInstagram />, href:"https://www.instagram.com/connex_academy/"},
  ]


  
  useEffect(() => {
    if (scrollTarget && pathname === '/') {
      scroller.scrollTo(scrollTarget, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
      setScrollTarget(null); // Reset scroll target after scrolling
    }
  }, [pathname, scrollTarget]);

  const scrollToSection = (section) => {
    if (pathname !== '/') {
      setScrollTarget(section); // Set target section to scroll to after navigation
      router.push('/')
        // Ensure the page has finished rendering before scrolling
        setTimeout(() => {
          scroller.scrollTo(section, {
            duration: 800,
            delay: 200,
            smooth: 'easeInOutQuart',
          });
        }, 400); // Adjust the timeout as needed

    } else {
      // Directly scroll to the section if already on the home page
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  };


  return (
<div className='text-white w-full  max-w-8xl  px-2 sm:px-6 lg:px-8" flex  flex-col  md:flex-row gap-7 sm:gap-10 md:gap-32 lg:gap-44   md:justify-center md:items-center'>
    <div className='flex flex-col'>
      <div className=' flex flex-col md:grid grid-cols-2  lg:flex lg:flex-row gap-20 p-10'>
          <div className="flex flex-col items-start justify-start">
              <div className='md:max-lg:w-[299px] flex items-start justify-start gap-5'>
              <Image width={40} height={40} priority  src="/images/logoWhite.png" alt="logo" />
              <h1 className={`text-3xl font-freesansbold ${lng === 'en' || 'font-bold font-kurdish'}`}>{t('footer.name')}</h1>
              </div>
              <br />
              <p className={`font-freesans ${lng === 'en' || 'font-kurdish'}`}>{t('footer.quote')}</p>
          </div>


          <div className='flex flex-col gap-3 '>
            <h1 className={`text-3xl w-44 font-freesansbold ${lng === 'en' || 'font-bold font-kurdish'}`}>{t('footer.quicklinks')}</h1>
            <br />
            {navigation.map((item) => (
                <div className='flex justify-left items-center gap-3' key={item.id}>
                    <MdNavigateNext className={` rounded-full bg-white text-black ${lng === 'en' || 'transform rotate-180'}`}/>
                    <ReactScroll
                    to={item.href}
                    spy
                    smooth
                    offset={-9}
                    duration={700}
                    activeClass='none'
                    onClick={() => scrollToSection(item.href)}
                    className={`cursor-pointer text-white block font-freesans ${lng === 'en' || 'font-kurdish'}`}
                    >
                    {item.name}
                    </ReactScroll>
                </div>
            ))}
          </div>

          <div className=' flex flex-col gap-1'>
            <h1 className={`text-3xl font-freesansbold ${lng === 'en' || 'font-bold font-kurdish'}`}>{t('footer.contactinfo')}</h1>
            <br />

            
      <div className='flex flex-col items-left justify-center gap-3 '>
            <div className='flex gap-2 items-center justify-left'>
            <MdEmail className='text-2xl text-white '/>
            <Link href={`mailto:${emailAddress}`} className={`font-freesans ${lng === 'en' || 'font-kurdish'}`}>academy@conneex.com</Link>
            </div>

            <div className='flex gap-2 items-center justify-left'>
            <FaPhoneAlt className='text-xl text-white'/>
            <Link target='_blank' href={`https://wa.me/${phoneNumber}`} className={`font-freesans ${lng === 'en' || 'font-kurdish'}`}>+964 07716904422</Link>
            </div>

            <div className='flex gap-2 items-center justify-left'>
            <FaLocationDot className='text-xl text-white'/>
             <Link target="_blank" rel='noopener noreferrer' href={addressLink} className={`font-freesans ${lng === 'en' || 'font-kurdish'}`}>{t('contact.locationP')}</Link>
            </div>


        </div>


                 <div className='flex gap-2 items-center justify-start pt-3' >
                      {socials.map((social, index) => (
                            <a href={social.href} target='blank' className= ' items-center flex justify-center text-[27px] text-white' key={index}>{social.icon}</a> 
                      ))}
                  </div>

          </div>

          


      </div>


          <div className='px-2 sm:px-6 md:px-8 '>
            <hr className='w-full' />
          </div>


          <div className='flex items-center justify-between px-2 sm:px-6 md:px-8 lg:px-10'>
              <p className={`text-center items-center pt-4 font-freesans ${lng === 'en' || 'font-kurdish'}`} >© {newYear} Connex Academy, Inc. All rights reserved</p>
            
            <div onClick={() => scroll.scrollToTop({ smooth: true, duration: 1500 })}  className='cursor-pointer w-10 h-10 mt-2 sm:mt-3 lg:w-10 lg:h-10 rounded-md flex items-center justify-center bg-white'>
                <FaArrowUp  className='text-ten absolute cursor-pointer text-2xl lg:text-xl' onClick={() => scroll.scrollToTop({ smooth: true, duration: 1500 })} />
            </div>
              
          </div>

    </div>
</div>
  )
}



