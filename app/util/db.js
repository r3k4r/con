import mongoose from "mongoose";

let isConnected=false;

export const connectDB=async()=>{
    if(isConnected) return;
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "connex_academy",
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connected");
        isConnected=true;
    }catch(error){
        console.log("not connected" + error);
    }
}