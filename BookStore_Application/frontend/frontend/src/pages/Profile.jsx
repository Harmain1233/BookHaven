import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Profile/Sidebar';
import { Outlet } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader/Loader";

const Profile = () => {
    const [Profile, setProfile] = useState(null); // Initialize as null instead of undefined
    const headers = { 
        id: localStorage.getItem("id"), 
        authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get("http://localhost:1000/api/v1/get-user-information", { headers });
                setProfile(response.data); // Set the profile to the response data
                console.log(response.data); // Log the data to verify its structure
            } catch (error) {
                console.error("Error fetching user information:", error); // Handle any errors
            }
        };
        fetch();
    }, []);

    return (
        <div className="bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row h-screen py-8 gap-4 text-white">
            {!Profile ? ( // Use a conditional rendering approach
                <div className='w-full h-full flex items-center justify-center'> 
                    <Loader /> 
                </div>
            ) : (
                <>
                    <div className='w-1/6'>
                        <Sidebar data={Profile} /> {/* Pass Profile directly to Sidebar */}
                    </div>
                    <div className='w-full md:w-5/6'>
                        <Outlet />
                    </div>
                </>
            )}
        </div>
    );
}

export default Profile;
