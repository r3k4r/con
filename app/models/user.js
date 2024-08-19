import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    passwpord:{
        type:String,
        required:true
    }
})

const User = mongoose.models.User || mongoose.model('User',userSchema);
export default User