import { connectDB } from "@/app/util/db";
import Course from "@/app/models/course";


export const GET = async (req, {params}) =>{
        try{
            await connectDB();
            const { id } = params;
            const course = await Course.findOne({courseID : Number(id)});

            if (!course) {
                return new Response("Course not found", { status: 404 });
              }
            return new Response(JSON.stringify(course), { status: 200 });

        }catch(err){
            console.log("error finding course: " + err)
            return new Response("error finding the courses", { status: 500 });
        }
}