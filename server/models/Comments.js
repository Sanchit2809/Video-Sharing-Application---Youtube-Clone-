import mongoose from "mongoose"

const Userschema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    videoId:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
},
// for creation and updated date of the user 
{timestamps:true}
);

export default mongoose.model("User",Userschema)