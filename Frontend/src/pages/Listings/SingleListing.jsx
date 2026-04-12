import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../../lib/axios'
import {Link, useParams} from 'react-router-dom'
import Navbar from '../../components/Navbar'

const SingleListing = () => {

    const [loading,setLoading]=useState(false);
    const [currListing,setCurrListing]=useState(null);

    let {id}=useParams();

    useEffect(()=>{
        const fetchListing=async()=>{
            try{
                const res=await api.get(`/listings/${id}`)
                setCurrListing(res.data);
            }
            catch(err)
            {
                console.log(err);
            }
            finally{
                console.log(currListing);
                setLoading(false);
            }
    }
    fetchListing()
},[id])

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-200 to-yellow-100">
            <Navbar />

            {/* Loading */}
            {loading && (
                <div className="flex justify-center items-center h-[60vh]">
                <h1 className="text-xl font-semibold text-indigo-600">
                    Loading details...
                </h1>
                </div>
            )}

            {/* Content */}
            {!loading && currListing && (
                <div className="max-w-6xl mx-auto px-4 py-10">

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    {currListing.title}
                </h1>

                {/* Image */}
                <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md mb-6">
                    <img
                    src={currListing.image.url}
                    alt="Property"
                    className="w-full h-full object-cover"
                    />
                </div>

                {/* Details Section */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Left: Description */}
                    <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">
                        About this place
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        {currListing.description}
                    </p>
                    </div>

                    {/* Right: Price Card */}
                    <div className="bg-red-100 rounded-2xl shadow-md p-6 flex flex-col justify-between">
                    <p className="text-2xl font-bold text-indigo-600 mb-4">
                        ₹ {currListing.price}
                    </p>

                    <button className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                        Book Now
                    </button>

                    </div>
                </div>
                </div>
            )}
        </div>
    )
}

export default SingleListing
