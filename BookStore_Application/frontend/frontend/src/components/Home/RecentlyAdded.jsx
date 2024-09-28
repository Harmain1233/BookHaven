import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard.jsx";
const RecentlyAdded = () => {
  const [data, setData] = useState();  // Correct the position of useState


  useEffect(() => {
    const fetch = async() => {
      const response =  await axios.get(
        "http://localhost:1000/api/v1/get-recent-books"
      );
      setData(response.data.data);
    };
    fetch();
  }, []);  


  return (
    <div className="mt-8 px-12">
      <h4 className='text-4xl text-center mb-5 mt-20'>Our Best Picks</h4>
      
      
      <div className="my-5 mt-20 grid sm:grid-cols-1 md:grid-cols-5 gap-5">
      {data && data.map((item, i) => (
      <div key={i}>
        <BookCard data ={item}/>{" "}
      </div>
      ))}

      </div>

      </div>
  );
};

export default RecentlyAdded;
