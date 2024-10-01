import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const ViewBookDetails = () => {
    const [data, setData] = useState(null);  // Initialize data as null to avoid accessing undefined properties
    const { id } = useParams();

    useEffect(() => {
      const fetch = async () => {
        try {
          const response = await axios.get(
            `http://localhost:1000/api/v1/get-book-by-id/${id}`
          );
          setData(response.data.data);
        } catch (error) {
          console.error("Error fetching book details", error);
        }
      };

      if (id) {
        fetch();
      }
    }, [id]);  // Add id to the dependency array

    if (!data) {
      return <div>Loading...</div>;
    }

    console.log(id);

    return (
        <>
        <div className="px-8 py-8 bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col lg:flex-row gap-8">
          {/* Book Cover Section */}
          <div className="lg:w-1/2 w-full bg-zinc-800 rounded-lg p-6 flex items-center justify-center shadow-lg">
            <img
              src={data.url}
              alt={data.title}
              className="max-h-[75vh] object-cover rounded-lg shadow-md"
            />
          </div>
      
          {/* Book Details Section */}
          <div className="lg:w-1/2 w-full flex flex-col justify-start gap-6">
            <h1 className="mt-9 text-2xl font-bold leading-tight">{data.title}</h1>
            <p className="text-xl text-gray-400">By {data.author}</p>
      
          <p className="text-gray-300 text-xl">Book Description: </p>
            <p className="text-lg leading-relaxed text-gray-300 mt-4">{data.desc}</p>
      
            <p className="text-3xl font-semibold text-green-400 mt-6">Price: {data.price}</p>
      
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Add To Cart
            </button>
          </div>
        </div>
        </>

      );
      
}

export default ViewBookDetails;
