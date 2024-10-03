import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaShoppingCart, FaEye, FaHeart } from 'react-icons/fa';


const StoreCard = ({ data }) => {
  return (
<Link to={`/view-book-details/${data._id}`}>
  <div className="flex justify-center">
    <div className="relative border-2 border-white-50 rounded-xl p-4 flex flex-col h-[400px] w-[20vw] mb-9 overflow-hidden backdrop-blur-sm bg-white-10 shadow-lg transition-transform transform hover:scale-105">
      
      {/* Image Section */}
      <div className="flex justify-center items-center h-[60%]"> {/* Fixed height for image section */}
        <img 
          src={data.url}
          alt={data.title}
          className="h-full w-auto object-cover" // Use object-cover to maintain aspect ratio
        />
      </div>
      
      {/* Title and Price */}
      <div className="mt-4 text-center h-[20px]">
        <h1 className="text-sm font-bold whitespace-wrap">{data.title}</h1>
        <h1 className="text-xl text-white font-bold mt-1">{data.price} USD</h1>
      </div>
  
      {/* Spacer to push buttons down */}
      <div className="flex-grow"></div>
  
      {/* Buttons */}
      <div className="flex justify-center gap-2 mt-4">
        <button className="text-white text-sm font-medium rounded-full w-10 h-10 flex items-center justify-center bg-transparent border border-white shadow-md transition-colors duration-300 ease-in-out hover:bg-black">
          <FaShoppingCart className="w-4 h-4" />
        </button>
        <button className="text-white text-sm font-medium rounded-full w-10 h-10 flex items-center justify-center bg-transparent border border-white shadow-md transition-colors duration-300 ease-in-out hover:bg-black">
          <FaEye className="w-4 h-4" />
        </button>
        <button className="text-white text-sm font-medium rounded-full w-10 h-10 flex items-center justify-center bg-transparent border border-white shadow-md transition-colors duration-300 ease-in-out hover:bg-black">
          <FaHeart className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</Link>


  
  );
};

export default StoreCard;
