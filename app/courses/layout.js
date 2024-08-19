import Navbar from '@/app/courses/Navbar'
import Footer from './Footer'
import {NextUIProvider} from "@nextui-org/react";

export default function Layout({children}){
    return(
        <>
<NextUIProvider>
            
            {/* <Navbar /> */}
            {children}
            <section className='bg-ten sm:py-[16px] py-3 '>
                {/* <Footer /> */}
            </section>

</NextUIProvider>
        </>
    )
}