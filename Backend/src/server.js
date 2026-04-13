import express from 'express'
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import { connectDb } from './config/connectDb.js';
import userRoutes from './routes/userRoutes.js';
import listingRoutes from './routes/listingRoutes.js';

dotenv.config();

const app=express()
const port=process.env.PORT || 3000;
const __dirname=path.resolve();

await connectDb().then(()=>{
    console.log("Connected to DB");
    app.listen(port,()=>{
        console.log(`Listening on port ${port}`);
    })
}).catch((err)=>{
    console.log(err);
    process.exit(1);
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))


if(process.env.NODE_ENV!=="production")
{
    app.use(cors({
        origin: "http://localhost:5173"
    }));
}


// app.use("/api/triptide", userRoutes)
app.use("/api/triptide", listingRoutes)

if(process.env.NODE_ENV==="production")
{
    // // serves built react files dist
    app.use(express.static(path.join(__dirname,"../Frontend/dist")));
    // catches all routes, handle react router, prevents 404 on refresh
    app.get("/*path",(req,res)=>{
        res.sendFile(path.join(__dirname,"../Frontend/dist/index.html"));
    })
    // app.get("/", (req, res) => {
    //     res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
    //     });
}

