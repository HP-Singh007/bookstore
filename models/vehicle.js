import mongoose from "mongoose";

const vehicleSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        uppercase:true
    },
    vehicleNumber:{
        type:String,
        required:true,
        unique:true
    },
    type:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
     },
    description:{
        type:String
    },
    insurance:{
        type:Date,
        default:new Date
    },
    pollution:{
        type:Date,
        default:new Date
    },
    service:{
        type:Date,
        default:new Date
    },
})

export const Vehicle= mongoose.model('Vehicle',vehicleSchema);