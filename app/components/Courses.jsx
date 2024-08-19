import { fetchComponentCourses } from '../util/fetch'
import CoursesSec from './CoursesSec';

export default async function Courses(){
  const courses = await fetchComponentCourses()
   
  return (
    <section className="padding-x">
       <CoursesSec courses={courses} />
    </section>
  )
}

