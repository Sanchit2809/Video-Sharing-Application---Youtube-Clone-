import mongoose from "mongoose"

const Videoschema = new mongoose.Schema({
    userID:{
        type:String,
        required:true,
        unique:true,
    },
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    imgUrl:{
        type:String,
        required:true,
    },
    vidUrl:{
        type:String,
        required:true,
    },
    views:{
        type:Number,
        default:0,
    },
    tags:{
        type:[string],
        default:[]
    },
    likes:{
        type:[string],
        default:[]
    },
    dislikes:{
        type:[string],
        default:[]
    },
},
{timestamps:true}
);

export default mongoose.model("Video",Videoschema)