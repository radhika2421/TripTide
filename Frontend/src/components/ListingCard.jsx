import React from 'react'
import { Link } from "react-router";
import api from "../lib/axios";

const ListingCard = ({listing, setListing}) => {
    return (
        <Link to={`/listings/${listing._id}`}>
        <div className="card bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full overflow-hidden">
            {/* Title */}
            <div>
                <h2 className="text-lg text-center font-semibold text-gray-800 p-3">
                    {listing.title}
                </h2>
            </div>

            {/* Image */}
            <img
                src={listing.image.url}
                alt="Listing image"
                className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                {/* Price */}
                <p className="text-indigo-600 font-bold text-lg mb-2">
                ₹ {listing.price}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-3">
                {listing.description}
                </p>
            </div>

            {/* Button (aligned bottom) */}
            <button className="mt-auto bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            See more
            </button>
            </div>
        </Link>
    )
}

export default ListingCard
