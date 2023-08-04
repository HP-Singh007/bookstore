import {app} from "./app.js";

app.listen(process.env.Port,()=>{
    console.log(`Server started at http://localhost:${process.env.Port}`)
})