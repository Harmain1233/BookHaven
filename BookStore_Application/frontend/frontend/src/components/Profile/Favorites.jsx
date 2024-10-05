import React, { useEffect, useState } from "react";
import axios from "axios";
import FavoriteCard from "../BookCard/FavoriteCard";

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
                    "http://localhost:1000/api/v1/get-favorite-books", 
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
