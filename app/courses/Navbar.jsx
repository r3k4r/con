'use client'
import Image from "next/image"
import { Link as ReactLink } from "react-scroll"
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Language from "../components/Language";
import {useState, useEffect} from "react"
import { useTranslation } from "react-i18next";

const Nav = () => {
  // const [isSticky, setIsSticky] = useState(false); //to controll the background of the navbar while scrolling
  const [isOpen, setIsOpen] = useState(false) // to control the hamburger menu and close icon
  const { t, i18n } = useTranslation()  //to use the translation

    
const links = [
  { name: t('nav.home'), href: 'home', id: 1 },
  { name: t('nav.about'), href: 'about', id: 2 },
  { name: t('nav.courses'), href: 'courses', id: 3 },
  { name: t('nav.contact'), href: 'contact', id: 4 },
]

  //to change the state of isOpen for closing and opening the mobile navigation
  function handleOpen() {
    setIsOpen(!isOpen)
  }
  
  //to change the state of isSticky for changing the background of the navbar
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     if (scrollPosition > 0) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };
  
  //   window.addEventListener('scroll', handleScroll);
  
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <header className={`z-10 top-0  sm:px-9 px-8 w-full flex flex-1 flex-grow items-center justify-between gap-5 transition-all duration-500 `}>
        
        {/* Connex logo in the navbar */}
        <Link href="/">
          <div id="logo" className="w-[100px]">
              <Image
              priority={true}
              src='/images/logo.png'
              width={100}
              height={100}
              alt='connex academy logo'
              />
          </div>
        </Link>
      

        {/* desktop navigation */}
        <nav className="hidden lg:flex flex-1 flex-shrink-0 items-center justify-start">
            <ul className="flex gap-10">

                  <Link
                    href={"/"}
                    className={`text-black font-freesans ${i18n === 'en' || 'font-kurdish'} cursor-pointer hover:text-ten text-lg`}
                  >Home</Link>

             
            </ul>
        </nav>
         <div className="flex gap-5 items-center justify-center">

              {/* language selection */}
              <Language /> 
             
              {/* contact us button */}
{/*               
          <div className="hidden md:block" id="button">
              <ReactLink to="contact" smooth={true} duration={700}>
                  <button className={`blue_btn w-full font-freesans ${i18n === 'en' || 'font-kurdish'}`}>
                  {t('nav.contactUs')}
                  </button>
              </ReactLink>
          </div>
          */}

          {/* the hamburger icon and closing icon */}
          <div className="lg:hidden">
              {isOpen ?
                <>
                  <div className="flex flex-1 flex-shrink-0 items-center justify-end">
                    <IoMdClose
                      size={30}
                      onClick={handleOpen}
                    />
                  </div>
                </> :
                <>
                  <GiHamburgerMenu
                    size={30}
                    onClick={handleOpen}
                  />
                </>}
         </div>

      { /* mobile navigation menu controlled by humbergur and closing icon */}
      <div className={`z-10 lg:hidden fixed rounded-md top-24 right-0 h-[58px] bg-ten font-freesans text-white w-screen transition-transform duration-500 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/60 bg-clip-padding backdrop-blur-sm backdrop-filter `}>
        {isOpen &&
          <nav className="lg:hidden flex flex-1 flex-shrink-0 items-center justify-center text-center">
            <ul className="flex flex-col gap-10 p-4">
             <Link
                    href={"/"}
                    className={`text-black font-freesans ${i18n === 'en' || 'font-kurdish'} cursor-pointer hover:text-ten text-lg`}
                  >Home</Link>
            </ul>
          </nav>}
      </div>          
      </div> 
    </header>
  )
}

export default Nav