import {app} from "./app.js";
import {ConnectDB} from "./data/database.js"

//connect to database
ConnectDB();

//server listen
app.listen(process.env.Port,()=>{
    console.log(`Server started at http://localhost:${process.env.Port}`)
})