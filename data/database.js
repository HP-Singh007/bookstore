import mongoose from "mongoose";

export const ConnectDB=()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((c)=>{
        console.log(`Database connected to ${c.connection.host}`);
    }).catch((e)=>{
        console.log(e);
    })
}