import {Route, Routes } from "react-router-dom"
import Homepage from './pages/Homepage'
import AllListings from './pages//Listings/AllListings'
import Login from "./pages/Login"
import SingleListing from "./pages/Listings/SingleListing"
import CreateListing from "./pages/Listings/CreateListing"
import { Toaster } from "react-hot-toast";

function App() {
  return(
    <div data-theme="lofi">
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/listings" element={<AllListings/>}/>
        <Route path='/listings/:id' element={<SingleListing/>}/>
        <Route path='listings/new-listing' element={<CreateListing/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
