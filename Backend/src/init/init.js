import mongoose from "mongoose";
import data from './data.js';
import Listing from '../models/listing.js';
// import Review from '../models/review.js';

await main().then(()=>{console.log("connected to db")}).catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect("mongodb+srv://radhika2changia_db_user:7DpHMDQA2VnMesvQ@cluster0.fcfe78c.mongodb.net/?appName=Cluster0");
}

const initDb=async()=>{
    const result=await Listing.insertMany(data);
    console.log(result);
};

initDb();