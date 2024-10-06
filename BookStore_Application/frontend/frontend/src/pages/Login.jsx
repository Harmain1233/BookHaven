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
          const response = await axios.post("http://localhost:1000/api/v1/sign-in", formData);

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
        className="flex items-center justify-center min-h-screen"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover', // Ensures the image covers the div properly
          backgroundPosition: 'center', // Centers the image
        }}
      >
        <div className="bg-black border-2 bg-blur white rounded-lg shadow-lg p-8 w-96 bg-opacity-90 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-center text-white">Login</h2>
          <form onSubmit={Submit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-2xl shadow-sm p-2 bg-transparent"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 shadow-sm p-2 text-white bg-transparent rounded-2xl"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 hover:text-yellow-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-white">
            Don't have an account? <Link to="/login" className="text-yellow-500 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
      
    );
};

export default LogIn;
