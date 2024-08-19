'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

const Hero = () => {
  const { t, i18n } = useTranslation()
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ScrollReveal = require('scrollreveal').default;

      const sr = ScrollReveal();

      const revealConfig = (origin) => ({
        origin: origin,
        distance: '60px',
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
    <section className='w-full flex justify-center items-center min-h-screen gap-10'>
      <div className={`flex flex-col-reverse gap-10 md:gap-0 md:flex-row sm:max-md:text-center items-center justify-between ${i18n.language === 'ku' || i18n.language === 'ar' ? 'md:gap-[3rem] lg:gap-[23rem] font-kurdish' : ''}`}>
        <div id='texts' className='w-full md:w-1/2 flex flex-col gap-7 items-center justify-center md:items-start'>
          <h1 className={`LEFT text-5xl md:text-7xl lg:text-8xl text-center md:text-start font-freesansbold ${i18n.language === 'en' || 'font-kurdish flex flex-col-reverse gap-4'}`}>
            <span className="text-ten lg:text-8xl">{t('hero.titlePartOne')}</span> <span className={`${i18n.language === 'en' || 'text-3xl md:text-4xl lg:text-5xl'}`}>{t('hero.titlePartTwo')} </span>
          </h1>
          <p className={`LEFT text-md md:text-2xl text-center md:text-start font-freesans ${i18n.language === 'ku' || i18n.language === 'ar' ? 'font-kurdish' : ''}`}>
            {t('hero.quote')}
          </p>
          <div className="w-24 flex LEFT">
            <Link to="courses" smooth={true} duration={700}>
              <button className='blue_btn'>{t('hero.button')}</button>
            </Link>
          </div>
        </div>
        <div id='image' className='RIGHT'>
          <Image 
            src="/images/logo2.png"
            className={`w-48 md:w-[280px] lg:w-[350px] ${i18n.language === 'ku' || i18n.language === 'ar' ? 'lg:w-[450px]' : ''}`}
            width={300}
            height={250}
            alt='logo'
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
