import { connectDB } from "@/app/util/db";
import Course from "@/app/models/course";


export const GET = async () =>{
    try{
        await connectDB();

        const courses = await Course.find().sort({ createdAt: -1 }).limit(6);
        return new Response(JSON.stringify(courses), { status: 200 });
    }catch(err){
        console.log("the error = " + err);
        return new Response("error getting the courses", { status: 500 });
    }

}