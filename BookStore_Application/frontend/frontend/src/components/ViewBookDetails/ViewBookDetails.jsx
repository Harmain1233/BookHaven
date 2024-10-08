import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { BookCover } from "book-cover-3d";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth.js";
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

const ViewBookDetails = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    const storedToken = localStorage.getItem("token");
    if (storedToken && storedRole) {
      dispatch(authActions.login());
      dispatch(authActions.changeRole(storedRole));
    }
  }, [dispatch]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/get-book-by-id/${id}`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching book details", error);
      }
    };

    if (id) {
      fetch();
    }
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const headers = { 
    id: localStorage.getItem("id"), 
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: id
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
      toast.error("Failed to add book to favorites.");
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
      toast.error("Failed to add book to cart.");
    }
  };

  return (
    <div className="px-8 py-8 text-white min-h-screen flex flex-col lg:flex-row gap-8">
      <div className="md:w-2/4 w-full flex justify-center items-center relative group">
        <BookCover
          rotate={5}
          rotateHover={-10}
          width={300}
          height={500}
          pagesOffset={5}
        >
          <img
            src={data.url}
            alt={data.title}
            className="max-h-[75vh] object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105 relative z-10"
          />
        </BookCover>
      </div>

      <div className="lg:w-1/2 w-full flex flex-col justify-start gap-6 bg-black">
        <h1 className="mt-9 text-4xl font-extrabold leading-tight transition duration-300">
          {data.title}
        </h1>
        <p className="text-xl text-gray-400 italic">By {data.author} (Author)</p>

        <p className="text-gray-300 text-xl font-semibold">Book Description:</p>
        <p className="text-lg leading-relaxed text-gray-300 mt-4">{data.desc}</p>

        <div className="flex items-center justify-between mt-6">
          <p className="text-3xl font-bold text-orange-400">Price: {data.price} USD</p>
        </div>

        {isLoggedIn === true && role === "user" && (
          <div className="flex gap-2">
            <button
              className="text-white font-semibold rounded-lg py-1 px-5 flex align-items:center shadow-md border border-orange-400 hover:text-orange-400 mr-3"
              onClick={handleFavorites}
            >
              Add To Favorites
              <FaHeart className="ml-5 mt-1" />
            </button>
            <button
              className="text-white font-semibold rounded-lg py-1 px-5 flex align-items:center shadow-md border border-orange-400 hover:text-orange-400"
              onClick={handleCart}
            >
              Add To Cart
              <FaShoppingCart className="ml-5 mt-1" />
            </button>
          </div>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable theme="colored" />
    </div>
  );
};

export default ViewBookDetails;
