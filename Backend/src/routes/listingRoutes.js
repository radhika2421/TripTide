import express from "express";
import { createNewListing, deleteListing, deleteReview, expressError, getListings, getSingleListing, middleWare, reviewProperty } from "../controllers/listingController.js";

const router=express.Router();

// listings route
router.get("/",getListings);

// single listing
router.get("/:id",getSingleListing);

// new listing
router.post("/new-listing",createNewListing);

// review property
router.post("/:id/review",reviewProperty);

// delete review
router.delete("/:propId/:revId/delete-review",deleteReview);

// delete listing
router.delete("/:id/delete",deleteListing);

router.use(expressError);

// error handling middleware
router.use(middleWare);


export default router;
