import { connectDB } from "@/app/util/db";
import Course from "@/app/models/course";

export const POST = async (req) => {
    const {Ename , Kname, Aname, Edescription, Kdescription, Adescription, Elevel, Klevel, Alevel, Eabout, Kabout, Aabout, Eperiod, Kperiod, Aperiod, Atime, Etime, Ktime, Ecertificate, Kcertificate, Acertificate, image } = await req.json();

    try {
        await connectDB();


        const newCourse = new Course({
            EnglishName: Ename,
            KurdishName: Kname,
            ArabicName: Aname,
            Englishdescription: Edescription, 
            Kurdishdescription: Kdescription,
            Arabicdescription: Adescription,
            EnglishLevel: Elevel,
            KurdishLevel: Klevel,
            ArabicLevel: Alevel,
            EnglishAbout: Eabout,
            KurdishAbout: Kabout,
            ArabicAbout: Aabout,
            EnglishPeriod: Eperiod,
            KurdishPeriod: Kperiod,  
            ArabicPeriod: Aperiod,
            EnglishTime: Etime,
            KurdishTime: Ktime,
            ArabicTime: Atime,   
            EnglishCertificate: Ecertificate,
            KurdishCertificate: Kcertificate,
            ArabicCertificate: Acertificate,
            image: image
        });

        await newCourse.save();

        return new Response(JSON.stringify(newCourse), { status: 201 });
    } catch (err) {
        console.log("the error = " + err);
        return new Response("error creating the course", { status: 500 });
    }
};

export const GET = async (req) =>{
    try{
        await connectDB();

        const courses = await Course.find();
        return new Response(JSON.stringify(courses), { status: 200 });
    }catch(err){
        console.log("the error = " + err);
        return new Response("error getting the courses", { status: 500 });
    }
}
