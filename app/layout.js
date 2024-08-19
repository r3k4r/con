
import "./globals.css";
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer'
import Provider from "@/app/components/Provider";

export const metadata = {
  title: "Connex Academy",
  description: "Connex Academy is a platform for learning and teaching.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider>
            {/* <div className='main' />
            <div className='gradient'/> */}
              <Nav />
            {children}
            <section className='bg-ten sm:py-[16px] py-3'>
              <Footer />
            </section>
        </Provider>
        </body>
    </html>
  );
}
