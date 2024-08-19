'use client';

import { useState, useEffect } from 'react';
import Card from './Card'
import { CreateCourseCardSkeleton } from '@/app/components/Skeleton'
import { useTranslation } from 'react-i18next'
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function CreateCourse() {
  const router = useRouter();
  const {i18n} = useTranslation()
  const lng=i18n.language
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    Ename: "",
    Kname: "",
    Aname: "",
    Edescription: "",
    Kdescription: "",
    Adescription: "",
    Elevel: "Complete Guide",
    Klevel: "ڕێنمایی تەواو",
    Alevel: "الدليل الكامل",
    Eabout: "",
    Kabout: "",
    Aabout: "",
    Eperiod: "",
    Kperiod: "",
    Aperiod: "",
    Etime: "",
    Ktime: "",
    Atime: "",
    Ecertificate: "3 Certificates",
    Kcertificate: "٣ بڕوانامە",
    Acertificate: "٣ شهادات",
    image: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

 

  //for fetching created courses
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch('/api/courses/addcourse', {
          method: 'GET',
        });
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        console.log("Error fetching courses: " + err);
      }finally{
        setLoading(false);
      }
    };

    fetchCourse();
  }, []);

  //for creating course
  const createCourse = async(e)=>{

    try{
      const response = await fetch('/api/courses/addcourse', {
        method: 'POST',
        body: JSON.stringify({
          Ename: data.Ename,
          Kname:data.Kname,
          Aname:data.Aname,
          Edescription:data.Edescription, 
          Kdescription:data.Kdescription,
          Adescription:data.Adescription, 
          Elevel:data.Elevel,
          Klevel:data.Klevel,
          Alevel:data.Alevel,
          Eabout:data.Eabout,
          Kabout:data.Kabout,
          Aabout:data.Aabout,
          Eperiod:data.Eperiod,
          Kperiod:data.Kperiod,
          Aperiod:data.Aperiod, 
          Etime:data.Etime,
          Ktime:data.Ktime,
          Atime:data.Atime,
          Ecertificate:data.Ecertificate, 
          Kcertificate:data.Kcertificate,
          Acertificate:data.Acertificate,
          image: data.image
        })
      })
      if(response.ok){
        console.log("course created")
        setData({
          Ename: "",
          Kname: "",
          Aname: "",
          Edescription: "",
          Kdescription: "",
          Adescription: "",
          Eabout: "",
          Kabout: "",
          Aabout: "",
          Eperiod: "",
          Kperiod: "",
          Aperiod: "",
          Etime: "",
          Ktime: "",
          Atime: "",
          image: "",
        })
      }

    }catch(err){
      console.log("error creating the shit" + err)
    }
  }

  const deleteCourse = async (id)=>{
      try{
        await fetch(`/api/courses/addcourse/${id.toString()}`, {
          method:'DELETE',
        })
        const filteredCourse= courses.filter((cours)=>{
             cours._id !== id 
        })
        setCourses(filteredCourse)
      }catch(err){
        console.log("error deleting course: " + err)
      }finally{
        window.location.reload();
      }
  }

  async function handleSignOut(){
    await signOut()
    router.push('/')
  }

    return (
      <section className="padding-x py-36">
        
        <div className={`w-full flex items-center justify-between`}>
            <h1 className='text-4xl font-freesansbold ml-6'>Course Information</h1>

            <button className={`blue_btn`} onClick={handleSignOut}>
              Log Out
            </button>
        </div>
        <br />
        <br />

        <div>
            <form onSubmit={createCourse} className="mt-5 text-black mx-auto max-w-8xl xl:px-6 2xl:px-20 flex flex-col" >
                <div className={`flex flex-col items-center justify-start gap-10`}>

                    <div className={`w-full flex items-center justify-start gap-6`}>
                        <input placeholder='Name in English...' name='Ename' value={data.Ename} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                        <input placeholder='Name in Kurdish...' name='Kname' value={data.Kname} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                        <input placeholder='Name in Arabic...' name='Aname' value={data.Aname} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                    </div>

                    <div className={`w-full flex items-center justify-start gap-6`}>
                        <input placeholder='Description in English...' name='Edescription' value={data.Edescription} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                        <input placeholder='Description in Kurdish...' name='Kdescription' value={data.Kdescription} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                        <input placeholder='Description in Arabic...' name='Adescription' value={data.Adescription} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                    </div>

                    {/* <div className={`w-full flex items-center justify-start gap-6`}>
                        <input disabled placeholder='Level in English...' name='Elevel' value={data.Elevel} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                        <input disabled placeholder='Level in Kurdish...' name='Klevel' value={data.Klevel} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                        <input disabled placeholder='Level in Arabic...' name='Alevel' value={data.Alevel} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                    </div> */}

                    <div className={`w-full flex items-center justify-start gap-6`}>
                        <input placeholder='About in English...' name='Eabout' value={data.Eabout} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                        <input placeholder='About in Kurdish...' name='Kabout' value={data.Kabout} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                        <input placeholder='About in Arabic...' name='Aabout' value={data.Aabout} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                    </div>

                    <div className={`w-full flex items-center justify-start gap-6`}>
                        <input placeholder='Period in English...' name='Eperiod' value={data.Eperiod} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                        <input placeholder='Period in Kurdish...' name='Kperiod' value={data.Kperiod} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                        <input placeholder='Period in Arabic...' name='Aperiod' value={data.Aperiod} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                    </div>

                    <div className={`w-full flex items-center justify-start gap-6`}>
                        <input  placeholder='Time in English...' name='Etime' value={data.Etime} onChange={handlechange}  className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                        <input  placeholder='Time in Kurdish...' name='Ktime' value={data.Ktime} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                        <input  placeholder='Time in Arabic...' name='Atime' value={data.Atime} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                    </div>

                    {/* <div className={`w-full flex items-center justify-start gap-6`}>
                        <input disabled placeholder='Certificate in English...' name='Ecertificate' value={data.Ecertificate} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                        <input disabled placeholder='Certificate in Kurdish...' name='Kcertificate' value={data.Kcertificate} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                        <input disabled placeholder='Certificate in Arabic...' name='Acertificate' value={data.Acertificate} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                    </div> */}

                    <div className={`w-full flex items-start justify-start gap-6`}>
                        <input placeholder='URL of the image...' name='image' value={data.image} onChange={handlechange} className="p-2 block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></input>
                    </div>
                    
                    <button className='blue_btn' type="submit">
                      Submit
                    </button>
                </div>
            </form>
        </div>
        
        <br />
        <br />

        <div className="grid grid-template-rows-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 items-center">
          {loading ? 
          <>
          {[...Array(8)].map((_, index) => <CreateCourseCardSkeleton key={index} />)}
          </> : 
          <>
             {courses?.map((course, index)=>{
                return(
                   <Card
                   key={index}
                   id={course._id}
                   courseID={course.courseID}
                   name={lng === 'en' ? course.EnglishName : lng === 'ku' ? course.KurdishName : course.ArabicName }
                   description={lng === 'en' ? course.Englishdescription : lng === 'ku' ? course.Kurdishdescription : course.Arabicdescription}
                   teacher={lng === 'en' ? course.EnglishLevel : lng === 'ku' ? course.KurdishLevel : course.ArabicLevel}
                   deleteCourse={deleteCourse}
                   image={course.image}  
                   /> 
                )
            })}
          </>
          }
        </div>

      </section>
    );

};

