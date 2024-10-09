import React from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import { FaShoppingCart, FaEye, FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify'; // Import toast

const StoreCard = ({ data }) => {
  const headers = { 
    id: localStorage.getItem("id"), 
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: data._id  // Use data._id to get the book ID
  };

  const handleFavorites = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/v1/add-book-to-favorite`, 
        {}, 
        { headers }
      );
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error adding book to favorites:", error);
      toast.error(error.response ? error.response.data.message : "Failed to add book to favorites.");
    }
  };

  const handleCart = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/v1/add-to-cart`, 
        {}, 
        { headers }
      );
      toast.success(response.data.message); 
    } catch (error) {
      console.error("Error adding book to cart:", error);
      toast.error(error.response ? error.response.data.message : "Failed to add book to cart.");
    }
  };

  return (
    <Link to={`/view-book-details/${data._id}`}>
      <div className="flex justify-center">
        <div className="relative border border-orange-400 rounded-xl p-4 flex flex-col h-[400px] w-[20vw] mb-9 overflow-hidden backdrop-blur-sm bg-white-10 shadow-lg transition-transform transform hover:scale-105">
          {/* Image Section */}
          <div className="flex justify-center items-center h-[60%]">
            <img 
              src={data.url}
              alt={data.title}
              className="h-full w-auto object-cover" // Use object-cover to maintain aspect ratio
            />
          </div>
          
          {/* Title and Price */}
          <div className="mt-4 text-center h-[20px]">
            <h1 className="text-lg font-bold text-white">{data.title}</h1>
            <h1 className="text-md text-gray-400 font-semibold mt-1">{data.price} USD</h1>
          </div>
  
          {/* Spacer to push buttons down */}
          <div className="flex-grow"></div>
  
          {/* Buttons */}
          <div className="flex justify-center gap-2 mt-4">
            <button 
              className="text-white text-sm font-medium rounded-full w-10 h-10 flex items-center justify-center bg-transparent border border-orange-400 shadow-md transition-colors duration-300 ease-in-out hover:bg-black"
              onClick={handleCart}
            >
              <FaShoppingCart className="w-4 h-4" />
            </button>
            <button 
              className="text-white text-sm font-medium rounded-full w-10 h-10 flex items-center justify-center bg-transparent border border-orange-400 shadow-md transition-colors duration-300 ease-in-out hover:bg-black"
            >
              <FaEye className="w-4 h-4" />
            </button>
            <button 
              className="text-white text-sm font-medium rounded-full w-10 h-10 flex items-center justify-center bg-transparent border border-orange-400 shadow-md transition-colors duration-300 ease-in-out hover:bg-black"
              onClick={handleFavorites}
            >
              <FaHeart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;
