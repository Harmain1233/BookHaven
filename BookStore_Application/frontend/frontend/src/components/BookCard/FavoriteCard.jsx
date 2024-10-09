import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure this is imported

const FavoriteCard = ({ data }) => {
    const headers = {
        id: localStorage.getItem("id"), 
        authorization: `Bearer ${localStorage.getItem("token")}`, 
        bookid: data._id,
    };

    const handleRemoveBook = async (event) => { 
      event.stopPropagation(); // Prevent triggering the link navigation
      event.preventDefault(); // Prevent default behavior of the link
     
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_API_URL}/api/v1/remove-book-from-favorite`,
          {},
          { headers }
        );

        toast.success(response.data.message);
      } catch (error) {
        console.error("Error removing book from favorites:", error);
        toast.error("Failed to remove book from favorites.");
      }
    };

    return (
      <>
        <Link to={`/view-book-details/${data._id}`}>
          <div className="flex justify-center">
            <div className="relative border-2 border-white-50 rounded-xl p-4 flex flex-col h-[400px] w-[90%] mb-9 overflow-hidden backdrop-blur-sm bg-white-10 shadow-lg transition-transform transform hover:scale-105">
            
              <div className="flex justify-center items-center h-[50%]"> 
                <img 
                  src={data.url}
                  alt={data.title}
                  className="h-full w-auto object-cover"
                />
              </div>
              
              <div className="mt-4 text-center h-[30px]">
                <h1 className="text-sm font-bold whitespace-wrap">{data.title}</h1>
                <h1 className="text-xl text-white font-bold mt-2">{data.price} USD</h1>
              </div>

              <button className="bg-yellow-50 text-sm font-semibold px-2 py-1 rounded border border-yellow-500 text-black flex items-center"
                onClick={handleRemoveBook}>
                Remove From Favorites
                <FaTimes className="ml-2" />
              </button>
            </div>
          </div>
        </Link>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable theme="colored" />
      </>
    );
};

export default FavoriteCard;
