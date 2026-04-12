import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ArrowLeftIcon } from "lucide-react";
import api from '../../lib/axios';
import Navbar from '../../components/Navbar';

const CreateListing = () => {

  const [formData,setFormData]=useState({
    title:"",
    country:"",
    location:"",
    description:"",
    price:"",
    imageUrl:""
  });
  const [loading,setLoading]=useState(false);

  const navigate=useNavigate();

  const handleChange=(e)=>{
    setFormData((prev)=>{
      return {...prev, [e.target.name]:e.target.value}
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const {title, country,location,description,price,imageUrl}=formData;
    if(!title.trim() || !country.trim() || !location.trim())
    {
      toast.error("Incomplete fields");
      return;
    }

    setLoading(true);
      try{
          await api.post("/listings/new-listing",{
          title,country,location,description,price,imageUrl
        })
        toast.success("Listing created successfully!");
        navigate("/listings");
      }
      catch(e){
        toast.error("Failed to create note");
        console.log(e);
      }
      finally{
        setLoading(false);
      }
    }



  return (
    <div className="min-h-screen bg-gradient-to-br from-red-200 to-yellow-100">
      <Navbar/>
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-yellow-50 rounded-2xl p-8">
        <Link to={"/listings"} className="btn btn-ghost mb-1 bg-indigo-300">
          <ArrowLeftIcon className="size-5" />
          Back to Listings
      </Link>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          New Listing
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Country
              </label>
              <input
                type="text"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Location
              </label>
              <input
                type="text"
                placeholder="Location"
                name="location"
                onChange={handleChange}
                value={formData.location}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Describe the property..."
              name="description"
              onChange={handleChange}
              value={formData.description}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Price
            </label>
            <input
              type="number"
              placeholder="In rupees"
              name="price"
              onChange={handleChange}
              value={formData.price}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Image URL
            </label>
            <input
              type="text"
              placeholder="Insert link"
              name="image"
              onChange={handleChange}
              value={formData.imageUrl}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
            disabled={loading}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default CreateListing
