'use client'
import Image from "next/image"
import { Link as ReactLink } from "react-scroll"
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Language from "./Language"
import {useState, useEffect} from "react"
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from 'next/navigation';
import { scroller } from 'react-scroll';

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false); //to controll the background of the navbar while scrolling
  const [isOpen, setIsOpen] = useState(false) // to control the hamburger menu and close icon
  const { t, i18n } = useTranslation()  //to use the translation
  const router = useRouter();
  const pathname = usePathname();
  const [scrollTarget, setScrollTarget] = useState(null);


    
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
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



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
    <header className={`fixed z-10 top-0  sm:px-9 px-8 w-full flex flex-1 flex-grow items-center justify-between gap-5 transition-all duration-500 ${isSticky ? 'bg-white ring-1 ring-gray-200 z-10': ''}`}>
        
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
              {links.map((link) => {
                return (
                  <ReactLink
                    to={link.href}
                    smooth={true}
                    duration={700}
                    key={link.id}
                    activeClass='active'
                    onClick={() => scrollToSection(link.href)}
                    className={`text-black font-freesans ${i18n === 'en' || 'font-kurdish'} cursor-pointer hover:text-ten text-lg`}
                  >{link.name}</ReactLink>
                )
              })}
            </ul>
        </nav>
         <div className="flex gap-5 items-center justify-center">

              {/* language selection */}
              <Language /> 
             
              {/* contact us button */}
          <div className="hidden md:block" id="button">
              <ReactLink to={links[3].href} onClick={() => scrollToSection(links[3].href)} smooth={true} duration={700}>
                  <button className={`blue_btn w-full font-freesans ${i18n === 'en' || 'font-kurdish'}`}>
                  {t('nav.contactUs')}
                  </button>
              </ReactLink>
          </div>

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
      <div className={`lg:hidden fixed rounded-md top-24 right-0 h-[17rem] bg-ten font-freesans text-white w-screen transition-transform duration-500 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/60 bg-clip-padding backdrop-blur-sm backdrop-filter `}>
        {isOpen &&
          <nav className="lg:hidden flex flex-1 flex-shrink-0 items-center justify-center text-center">
            <ul className="flex flex-col gap-10 p-4">
              {links.map((link) => {
                return (
                  <ReactLink
                    onClick={handleOpen}
                    to={link.href}
                    smooth={true}
                    duration={700}
                    key={link.id}
                    activeClass="active"
                    className="text-black cursor-pointer hover:text-ten text-lg"
                  >
                    {link.name}
                  </ReactLink>
                )
              })}
            </ul>
          </nav>}
      </div>          
      </div> 
    </header>
  )
}

export default Nav