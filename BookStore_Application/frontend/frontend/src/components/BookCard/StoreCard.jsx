import React from 'react';
import { Link } from 'react-router-dom'; 


const StoreCard = ({ data }) => {
  return (
    <Link to={`/view-book-details/${data._id}`}>
<div className="flex justify-center">
      <div className="relative border-2 border-white/50 rounded-xl p-4 flex flex-col h-[70vh] w-[20vw] mb-9 overflow-hidden backdrop-blur-sm bg-white/10 shadow-lg transition-transform transform hover:scale-105">
        
        {/* Image Section */}
        <div className="flex justify-center">
          <img 
            src={data.url}
            alt={data.title}
            className="w-[75%] h-auto object-contain mt-2"
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
        <button 
          className="text-white text-sm font-medium rounded-md py-1.5 px-3 bg-transparent border border-white shadow-md transition-colors duration-300 ease-in-out hover:bg-black">
          Add To Cart
        </button>
  
        <button 
          className="text-white text-sm font-medium rounded-md py-1.5 px-3 bg-transparent border border-white shadow-md transition-colors duration-300 ease-in-out hover:bg-black">
          View More
        </button>
  
      </div>
    </div>
  </Link>
  

  
  );
};

export default StoreCard;
