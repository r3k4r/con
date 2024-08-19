export function  CourseCardSkeleton(){
    return(
    <div  className='mr-5 mb-5 relative overflow-hidden flex'>
        <div className='flex flex-col flex-1 gap-5 p-2 break-inside-avoid rounded-2xl border border-gray-300 bg-white/20 bg-clip-padding backdrop-blur-lg backdrop-filter md:w-[330px] w-full h-fit animate-pulse'>
        
            <div className='w-full h-[165px] bg-gray-300 rounded-xl'></div>
            
            <div className={`flex flex-col px-2 pb-4 gap-5`}>
                <div className='h-6 bg-gray-300 rounded'></div>
                <div className='h-4 bg-gray-300 rounded w-3/4'></div>
                <div className='h-4 bg-gray-300 rounded w-1/2 pt-2 '></div>
            </div>
            

        </div>
    </div>
    )
}
export function  CourseComponentSkeleton(){
    return(
        <>
   
        <div  className='mr-5 mb-5 relative overflow-hidden flex'>
            <div className='flex flex-col flex-1 gap-5 p-2 break-inside-avoid rounded-2xl border border-gray-300 bg-white/20 bg-clip-padding backdrop-blur-lg backdrop-filter md:w-[330px] w-full h-fit animate-pulse'>
            
            <div className='w-full h-[165px] bg-gray-300 rounded-xl'></div>
            
            <div className={`flex flex-col px-2 pb-4 gap-5`}>
                <div className='h-6 bg-gray-300 rounded'></div>
                <div className='h-4 bg-gray-300 rounded w-3/4'></div>
                <div className='h-4 bg-gray-300 rounded w-1/2 pt-2 '></div>
            </div>
            

            </div>
        </div>
    
</>
    )
}

export function CreateCourseCardSkeleton(){
    return(
        <>
          <div  className='mr-5 mb-5 relative overflow-hidden flex'>
            <div className='flex flex-col flex-1 gap-5 p-2 break-inside-avoid rounded-2xl border border-gray-300 bg-white/20 bg-clip-padding backdrop-blur-lg backdrop-filter md:w-[330px] w-full h-fit animate-pulse'>
            
            <div className='w-full h-[165px] bg-gray-300 rounded-xl'></div>
            
            <div className={`flex flex-col px-2 pb-4 gap-4`}>
                <div className='h-6 bg-gray-300 rounded'></div>
                <div className='h-4 bg-gray-300 rounded w-3/4'></div>
                <div className='h-4 bg-gray-300 rounded w-1/2 pt-2'></div>
            </div>
            
            <div className={`px-2 py-2 pb-2`}>
                <div className='h-6 bg-gray-300 rounded w-1/4'></div>
            </div>

            </div>
        </div>
    
        </>
    )
}