import Listing from '../models/listing.js'
import Review from "../models/review.js";
import wrapAsync from "../utils/wrapAsync.js";
import ExpressError from "../utils/ExpressError.js"

// listings route
export const getListings=wrapAsync(async(req,res,next)=>{
    try{
        const result=await Listing.find();
        res.status(200).json(result);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Some internal error occurred"});
    }
})

// single listing
export const getSingleListing = wrapAsync(async (req, res, next) => {
    let { id } = req.params;

    let reviewProp = await Listing.findById(id).populate("reviews");

    res.status(200).json(reviewProp);
});

// new listing
// router.get("/new-listing",async (req,res)=>{
//     res.render("newListing.ejs");
// })
export const createNewListing=wrapAsync(async(req,res,next)=>
    {
        try{
            let {title, location, country, description, price, image}=req.body;
            const  result=await Listing.insertOne({
                title:title,
            description:description,
            image:{
                filename: "listingimage",
                url:image
            },
            price: parseInt(price),
            location:location,
            country: country,
            });
            res.status(200).json({message:`${result}`});
            // res.redirect('/listings');
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({message:"Some internal error occurred"});
        }
})

// review property
export const reviewProperty =wrapAsync(async(req,res,next)=>{
    try{
        let {id}=req.params;
        const {rating,comment}=req.body;
        let newReview=await Review.insertOne({
            comment: comment,
            rating: parseInt(rating)
        })

        let prop=await Listing.findById(`${id}`);
        prop.reviews.push(newReview);
        await newReview.save();
        await prop.save();
        res.status(200).json({message:`${prop}`});
        // res.redirect(`/listings/${id}`);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Some internal error occurred"});
    }
})

// delete review
export const deleteReview=wrapAsync(async(req,res,next)=>{
    try{
        let {propId,revId}=req.params;
        await Listing.findByIdAndUpdate(propId,{$pull:{reviews:revId}});
        const result=await Review.findByIdAndDelete(revId);
        res.status(200).json({message:`${result}`});
        // res.redirect(`/listings/${prop}`);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Some internal error occurred"});
    }
})

// delete listing
export const deleteListing=wrapAsync(async(req,res,next)=>{
    try{
        let {id}=req.params;
        let prop=await Listing.findByIdAndDelete(id);
        const result=await Review.deleteMany({_id:{$in : prop.reviews}});
        res.status(200).json({message:`${result}`});
        // res.redirect("/listings");
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Some internal error occurred"});
    }
})

export const expressError=(req,res,next)=>{
    next(new ExpressError(404,"Page Not Found!"));
}

export const middleWare=(err,req,res,next)=>{
    let {status=500,message="Wrong"}=err;
    console.log(err);
    if(status===404)
    {
        return res.status(404).json({message:"Page not found"});
    }
    res.status(status).json({message:`${message}`});
}