import React, { useState } from 'react';
import  { authActions } from "../store/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import axios from "axios";
import image1 from '/images/imagebgcouch.jpg';




const LogIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
});

const navigate = useNavigate();
const  dispatch = useDispatch();


const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const Submit = async (e) => {
  e.preventDefault(); // Prevents the form from refreshing the page
  try {
      // Check if formData fields are empty
      if (formData.username === "" || formData.password === "") {
          alert("All Fields Are Required");
      } else {
          // Make the API request before dispatching any actions
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/sign-in`, formData);

          // Dispatch actions and store values after a successful response
          dispatch(authActions.login());
          dispatch(authActions.changeRole(response.data.role));

          // Store the received data in localStorage
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("role", response.data.role);

          // Navigate to profile
          navigate("/profile");
      }
  } catch (error) {
      // Handle different error cases gracefully
      if (error.response) {
          // If the error has a response from the server
          alert(error.response.data.message);
      } else if (error.request) {
          // The request was made but no response was received
          alert("No response from the server. Please try again later.");
      } else {
          // Other errors, such as in setting up the request
          alert(`Error: ${error.message}`);
      }
  }
};
    return (
      <div
         className=""
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover', // Ensures the image covers the div properly
        backgroundPosition: 'center', // Centers the image
        backgroundBlendMode: 'overlay', // Adds a dark overlay to improve text readability
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // The actual overlay color
      }}
    >
              <div
      className="flex items-center justify-center min-h-screen"
     
    >
      <div className="bg-black bg-opacity-80 border border-orange-500 w-4/5 max-w-2xl rounded-lg shadow-xl p-6 flex flex-col items-center justify-center backdrop-blur-lg max-h-[90vh]">
       
    
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Login To Your Account!
        </h2>
    
        <form onSubmit={Submit} className="w-full">
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-white mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Your Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-amber-300 bg-gray-200 text-gray-700"
            />
          </div>
    
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-amber-300 bg-gray-200 text-gray-700"
            />
          </div>
    
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg"
          >
            Login
          </button>
        </form>
    
        <p className="mt-6 text-center text-gray-300">
          Don't have an account?{' '}
          <Link to="/SignUp" className="text-amber-400 hover:text-amber-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
    </div>

    
      
    );
};

export default LogIn;
