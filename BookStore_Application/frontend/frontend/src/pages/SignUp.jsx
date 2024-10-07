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
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else if (error.request) {
                alert("No response from the server. Please try again later.");
            } else {
                alert(`Error: ${error.message}`);
            }
        }
    };

    return (
        <div
            className=""
            style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
        >
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-black bg-opacity-80 border border-orange-500 w-4/5 max-w-2xl rounded-lg shadow-xl p-6 flex flex-col items-center justify-center backdrop-blur-lg max-h-[90vh]">
                    <h2 className="text-2xl font-bold text-center text-white mb-6">
                        Sign Up
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

                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-white mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Your Email"
                                value={formData.email}
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
                            Sign Up
                        </button>
                    </form>

                    <p className="mt-6 text-center text-gray-300">
                        Already have an account?{' '}
                        <a href="/LogIn" className="text-amber-400 hover:text-amber-500">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
