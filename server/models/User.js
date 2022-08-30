import mongoose from "mongoose"

const Userschema = new mongoose.Schema({
    
    // unique name of the user
    name:{
        type:String,
        required:true,
        unique:true,
    },
    //email unique
    email:{
        type:String,
        required:true,
        unique:true,
    },
    //password 
    password:{
        type:String,
        required:true,
    },
    img:{
        type:String,
    },
    subscribers:{
        type:Number,
        default:0
    },
    subscribedUsers:{
        type:[String],
    },

},
// for creation and updated date of the user 
{timestamps:true}
);

export default mongoose.model("User",Userschema)