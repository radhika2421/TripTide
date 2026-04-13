import express from "express";
import { createNewListing, deleteListing, deleteReview, expressError, getListings, getSingleListing, middleWare, reviewProperty } from "../controllers/listingController.js";

const router=express.Router();

// listings route
router.get("/listings",getListings);

// single listing
router.get("/listings/:id",getSingleListing);

// new listing
router.post("/listings/new-listing",createNewListing);

// review property
router.post("/listings/:id/review",reviewProperty);

// delete review
router.delete("/listings/:propId/:revId/delete-review",deleteReview);

// delete listing
router.delete("/listings/:id/delete",deleteListing);

router.use(expressError);

// error handling middleware
router.use(middleWare);


export default router;
