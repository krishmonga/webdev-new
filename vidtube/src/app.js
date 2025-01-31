import express from "express"
import cors from "cors"
import healthcheckrouter  from "./routes/healthcheckroutes.js"

const app=express()
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,  
        credentials: true
    })
);
// some common middle wares 
app.use(express.json({limit:"16Kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

 //routes 
 
// import { healthCheck } from "./controllers/healthcheckcontroller.js";
 app.use("/api/v1/healthCheck",healthcheckrouter);
  



export {app};