'use client'
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'


const About = () => {
  // const [opacity, setOpacity] = useState(1);
  // const [paddingTop, setPaddingTop] = useState(110);
  const { t, i18n } = useTranslation()
  const lng= i18n.language
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const heroSectionHeight = window.innerHeight;
  //     const startFadePosition = heroSectionHeight / 2;
  //     const scrollY = window.scrollY;
  //     const maxScroll = 190;

  //     if (scrollY >= startFadePosition) {
  //       const scrollProgress = (scrollY - startFadePosition) / maxScroll;
  //       const newOpacity = Math.max(0, 1 - scrollProgress);
  //       setOpacity(newOpacity);
  //     } else {
  //       setOpacity(1);
  //     }

  //     if (scrollY >= startFadePosition) {
  //       const scrollProgress = (scrollY - startFadePosition) / maxScroll;
  //       const newPaddingTop = 110 * (1 - scrollProgress);
  //       setPaddingTop(newPaddingTop);
  //     } else {
  //       setPaddingTop(110);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

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
    <section className="fixed-about-section w-full">
      <div
       
        className="BOTTOM w-full text-center "
      >
        <h1 className={` text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black font-freesansbold py-4 ${lng === 'en' || 'font-bold font-kurdish'} `}>
          {t('about.title')}
        </h1>
      </div>

      <br />


      <div
        // className="absolute w-full mt-[50px] sm:mt-[95px] md:mt-[100px] lg:mt-[110px]"
        // style={{ paddingTop: `${paddingTop}px`, zIndex: 2 }}
      >
        <div id="about-paragraph" className='BOTTOM'>
          <div className="flex flex-col items-center justify-center gap-5 lg:gap-14 mt-5">
            <div className=" flex-1 break-inside-avoid p-6 pb-4 w-full sm:w-[600px] md:w-[700px] lg:w-[990px] text-center">
              <p className={`text-sm sm:text-base md:text-md lg:text-xl mb-8 text-black font-freesans aboutText ${lng === 'en' || ' font-kurdish'} `}>
                {t('about.about_one')}
                <br />
                <br />
                {t('about.about_two')}
                <br />
                <br />
                {t('about.about_three')}
              </p>
            </div>

            <div className="BOTTOM flex flex-col md:flex-row items-start justify-center gap-6 md:gap-12 lg:gap-20">
              <div className="flex-1 break-inside-avoid p-6 pb-4 back w-full sm:w-[630px] md:w-[350px] xl:w-[500px] h-fit text-center">
                <h2 className={` text-2xl md:text-3xl font-semibold mb-4 text-black font-freesansbold ${lng === 'en' || 'font-bold font-kurdish'} `}>
                  {t('about.vision')}
                </h2>
                <p className={`text-sm sm:text-base md:text-md xl:text-xl mb-8 text-black font-freesans aboutText ${lng === 'en' || 'font-kurdish'}`}>
                 {t('about.visionP')}
                </p>
              </div>

              <div className="flex-1 break-inside-avoid p-6 pb-4 back w-full sm:w-[630px] md:w-[350px] lg:w-[500px] text-center">
                <h2 className={`text-2xl md:text-3xl font-semibold mb-4 text-black font-freesansbold ${lng === 'en' || 'font-bold font-kurdish'}`}>
                  {t('about.mission')}
                </h2>
                <p className={`text-sm sm:text-base md:text-md xl:text-xl mb-8 text-black font-freesans aboutText ${lng === 'en' || 'font-kurdish'}`}>
                  {t('about.missionP')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
