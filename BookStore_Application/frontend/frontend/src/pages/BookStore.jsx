import React, { useEffect, useState } from "react";
import axios from "axios";
import StoreCard from '../components/BookCard/StoreCard';
import image1 from '/Users/harmainmunir/Desktop/BookHaven/BookStore_Application/frontend/frontend/public/images/bgimage2.jpg'; // Adjust path as needed


const BookStore = () => {
    const [data, setData] = useState();  


    useEffect(() => {
      const fetch = async() => {
        const response =  await axios.get(
          "http://localhost:1000/api/v1/get-all-books"
        );
        setData(response.data.data);
      };
      fetch();
    }, []);  
  



    return (
         
        <div className="relative bg-cover min-h-screen bg-no-repeat bg-center bg-fixed" 
        style={{ backgroundImage: `url(${image1})` }}>
         
         {/* Background Overlay */}
         <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>  {/* Dark overlay on background */}
       
         {/* Content (StoreCard elements) */}
         <div className="relative z-10 pt-32">
           <h4 className='text-4xl text-center mb-5 text-white'>Explore Our Vast Collection Here</h4>
           <div>
             <div className="my-2 mt-20 grid sm:grid-cols-1 md:grid-cols-4 gap-5">
               {data && data.map((item, i) => (
                 <div key={i}>
                   <StoreCard data={item} />
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
       
       
        
       
      

    )
    
}

export default BookStore;