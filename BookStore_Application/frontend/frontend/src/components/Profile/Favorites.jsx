import React, { useEffect, useState } from "react";
import axios from "axios";
import FavoriteCard from "../BookCard/FavoriteCard";
import catImg from "/images/catimg_transp.png";


const Favorites = () => {
    const [FavoriteBooks, setFavoriteBooks] = useState([]); // Initialize as an empty array
    const headers = { 
        id: localStorage.getItem("id"), 
        authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    useEffect(() => {
        const fetch = async () => {
            try {
                

                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/v1/get-favorite-books`, 
                    { headers }
                );
                setFavoriteBooks(response.data.data);
            } catch (error) {
                console.error("Error fetching favorite books:", error);
            }
        };
        fetch();
    }, [FavoriteBooks]);

    return (
        <div className="grid grid-cols-4 gap-5 ml-6">

{FavoriteBooks.length === 0 && (
    <div className="col-span-4 flex justify-center items-center relative h-[500px]">
        <img src={catImg} alt="No favorite books found" className="w-90 h-50 object-contain" />
        <p className="absolute top-1/2 transform -translate-y-1/2 text-white text-xl font-bold">
            No Books Added To Favorites
        </p>
    </div>
)}



            {FavoriteBooks && 
                FavoriteBooks.map((item) => ( // Corrected variable name
                    <div key={item.id}> 
                        <FavoriteCard data={item} /> 
                    </div>
                ))
            }
        </div>
    );
};

export default Favorites;
