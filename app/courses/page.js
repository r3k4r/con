'use client'
import {Suspense, useEffect, useState} from 'react'
import Card from '@/app/components/Card'
import { CourseCardSkeleton } from '@/app/components/Skeleton'
import Link from 'next/link'
import Search from './Search'
// import Paginations from './Pagination'
import {Pagination} from "@nextui-org/react";
import { useTranslation } from "react-i18next";



export default function Course({ searchParams }) {
  const { t , i18n} = useTranslation()
  const lng = i18n.language
  const query = searchParams?.query || '';
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`/api/courses?query=${query}&page=${currentPage}`);
        const data = await response.json();
        setCourses(data.courses);
        setTotalPages(data.totalPages);
        setTotalResults(data.totalResults);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [query, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);    
    setLoading(true);      
  };

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
    <section className="padding-x pt-32 ">

      <div  className={`LEFT items-center justify-start text-start py-10`}>
            <h1 className={`text-[28px] sm:text-3xl md:text-[40px] lg:text-5xl font-freesansbold ${i18n.language === 'en' || 'font-kurdish'}`}>
            {t('course.title')}
            </h1>
        </div>

      <div  id='pag&search' className="LEFT w-full flex flex-col-reverse sm:flex-row items-start justify-start gap-4 sm:gap-10 py-6">
        <Pagination total={totalPages} initialPage={currentPage} onChange={handlePageChange} />
        <Search />
      </div>

      <div  className="RIGHT w-full grid grid-template-rows-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center">
        {loading ? (
          [...Array(8)].map((_, index) => <CourseCardSkeleton key={index} />)
        ) : (
          courses.map((course, index) => (
            <Link key={index} href={`/courses/${course.courseID}`}>
              <Card
                 id={course._id}
                 courseID={course.courseID}
                 name={lng === 'en' ? course.EnglishName : lng === 'ku' ? course.KurdishName : course.ArabicName }
                  description={lng === 'en' ? course.Englishdescription : lng === 'ku' ? course.Kurdishdescription : course.Arabicdescription}
                  teacher={lng === 'en' ? course.EnglishLevel : lng === 'ku' ? course.KurdishLevel : course.ArabicLevel}
                  image={course.image}  />   
            </Link>
          ))
        )}
      </div>

      <div className={`py-10`}>
          {/* <Paginations
                  totalResults={totalResults}
                  page={currentPage}
                  setPage={setCurrentPage}
                  totalPages={totalPages}
                  coursesPerPage={8} 
          /> */}
          
              

      </div>



    </section>
  );
}
