import React, { useEffect, useState } from 'react';
import api from "../../lib/axios.js";
import toast from "react-hot-toast";
import ListingCard from '../../components/ListingCard.jsx';
import Navbar from '../../components/Navbar.jsx';


const AllListings = () => {

    const [listings,setListings]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchListings=async()=>{
            try{
                const result=await api.get('/listings');
                setListings(result.data);
            }
            catch(err){
                console.log(err);
                toast.error("Failed to load listings");
            }
            finally{
                setLoading(false);
            }
        }
        fetchListings();
    }, []);

    return (
            <div className="min-h-screen bg-gradient-to-br from-red-200 to-yellow-100">
                <Navbar/>
                <div className="max-w-7xl mx-auto px-4 py-10">

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
                All Listings
                </h1>

                {/* Loading */}
                {loading && (
                <div className="text-center text-indigo-600 font-medium py-10">
                    Loading Listings...
                </div>
                )}

                {/* Empty State */}
                {!loading && listings.length === 0 && (
                <div className="text-center text-gray-500 text-lg py-10">
                    No listings to show
                </div>
                )}

                {/* Listings Grid */}
                {!loading && listings.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {listings.map((l) => (
                    <ListingCard 
                        key={l._id} 
                        listing={l} 
                        setListing={setListings} 
                    />
                    ))}
                </div>
                )}

            </div>
            </div>
    );
}

export default AllListings
