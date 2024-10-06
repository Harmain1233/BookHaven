import React, { useState } from 'react';
import image1 from '/images/imagebgcouch.jpg'; // Adjust path as needed
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const Submit = async (e) => {
        e.preventDefault(); // Prevents the form from refreshing the page
        try {
            if (formData.username === "" || formData.password === "" || formData.email === "") {
                alert("All Fields Are Required");
            } else {
                const response = await axios.post("http://localhost:1000/api/v1/sign-up", formData);
                alert(response.data.message);
                navigate("/LogIn");
            }
        } catch (err) {
          alert(error.response.data.message); // Corrected error handling
        }
    }

    return (
        <div
            className="flex items-center justify-center min-h-screen"
            style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="bg-black border-2 bg-blur white rounded-lg shadow-lg p-8 w-96 bg-opacity-90 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>
                <form onSubmit={Submit}> {/* Use onSubmit for the form */}
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
                        <label htmlFor="email" className="block text-sm font-medium text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 shadow-sm p-2 text-white bg-transparent rounded-2xl"
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
                        type="submit" // Changed to submit button
                        className="w-full bg-orange-400 hover:text-yellow-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-center text-white">
                    Already have an account? <a href="/login" className="text-yellow-500 hover:underline">Log in</a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
