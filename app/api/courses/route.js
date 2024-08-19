import { connectDB } from "@/app/util/db";
import Course from "@/app/models/course";

export const GET = async (req) => {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query') || '';
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = 8; 
    const skip = (page - 1) * limit; 

    let filter = {};

    // Build the filter object based on the query
    if (query) {
      filter = {
        $or: [
          { EnglishName: { $regex: query, $options: "i" } },
          { KurdishName: { $regex: new RegExp(query, "iu") } }, // "u" flag for Unicode
          { ArabicName: { $regex: new RegExp(query, "iu") } },  // "u" flag for Unicode
          { Englishdescription: { $regex: query, $options: "i" } },
          { Kurdishdescription: { $regex: new RegExp(query, "iu") } },
          { Arabicdescription: { $regex: new RegExp(query, "iu") } },
        ],
      };      
    }

    const totalResults = await Course.countDocuments(filter);

    const courses = await Course.find(filter).skip(skip).limit(limit).sort({ createdAt: -1 })

    const totalPages = Math.ceil(totalResults / limit);

    return new Response(JSON.stringify({
      courses,
      totalResults,
      totalPages
    }), { status: 200 });

  } catch (err) {
    console.log("Error fetching courses:", err);
    return new Response("Error fetching courses", { status: 500 });
  }
};
