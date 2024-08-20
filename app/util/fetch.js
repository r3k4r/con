import { connectDB } from "@/app/util/db";
import Course from "@/app/models/course";

export async function fetchComponentCourses() {
  try {
    await connectDB();

    const data = await Course.find().sort({ createdAt: -1 }).limit(6);

    const latestCourses = data.map((course) => ({
      id: course._id.toString(),
      courseID: course.courseID,
      EnglishName: course.EnglishName,
      KurdishName: course.KurdishName,
      ArabicName: course.ArabicName,
      Englishdescription: course.Englishdescription,
      Kurdishdescription: course.Kurdishdescription,
      Arabicdescription: course.Arabicdescription,
      EnglishLevel: course.EnglishLevel,
      KurdishLevel: course.KurdishLevel,
      ArabicLevel: course.ArabicLevel,
      image:course.image
    }));

    return latestCourses;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch courses");
  }
}



// export async function fetchRouteCourses(){
//      try {
//       const response = await fetch('http://localhost:3000/api/courses', {
//         cache: "no-cache",
//         method: 'GET',
//       });
//       const data = await response.json();
//       return data
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }


// }

// export async function fetchRouteCourses(){
//      try {
//       const response = await fetch('http://localhost:3000/api/courses', {
//         cache: "no-cache",
//         method: 'GET',
//       });
//       const data = await response.json();
//       return data
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }


// }