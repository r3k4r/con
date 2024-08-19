import Nav from '@/app/components/Nav';

import { lazy } from 'react';
const About = lazy(() => import('@/app/components/About'))
const Hero = lazy(() => import('@/app/components/Hero'))
import Courses from '@/app/components/Courses'
const Contact = lazy(() => import('@/app/components/Contact'))
const Footer = lazy(() => import('@/app/components/Footer'))


const App = () => {
  
return (
    <>
     <main className='relative'>
      {/* <Nav /> */}
      <section id='home' name='home' className='padding-x'>
        <Hero />
      </section>


      <section id='about' name='about' className=''>
        <About />
      </section>


      <section id='courses' name='courses' className='padding'>
        <Courses />
      </section>


      <section id='contact' name='contact' className='padding-x py-10'>
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1658.9667566357696!2d45.4199056161902!3d35.55922867795498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40002fec64a29e93%3A0x2da69cbacc80fbc!2z2KrbldmE2KfYsduMINiz2KfZhNmF!5e0!3m2!1sen!2siq!4v1724056969764!5m2!1sen!2siq" width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
      </section>


      <section className='bg-ten sm:py-[16px] py-3'>
        {/* <Footer /> */}
      </section>
    </main>
    </>
  );
};

export default App;