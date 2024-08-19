import { connectDB } from "@/app/util/db";
import Course from "@/app/models/course";

export const DELETE  =  async(request, {params}) =>{
    try{
        await connectDB();

        await Course.findByIdAndDelete(params.id);
        return new Response("Course deleted successfully", { status: 200 });

    }catch(err){
        console.log("the error = " + err);
        return new Response("error deleting the course", { status: 500 });
    }
}