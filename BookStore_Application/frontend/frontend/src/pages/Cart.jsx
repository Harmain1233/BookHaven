import React, { useState, useEffect } from 'react';
import axios from "axios"; 
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  const navigate = useNavigate();
  const [Cart, setCart] = useState([]); 
  const [Total, setTotal] = useState(0);
  
  const headers = {
    id: localStorage.getItem("id"), 
    authorization: `Bearer ${localStorage.getItem("token")}`, 
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/get-user-cart`, { headers });
        setCart(res.data.data); 
        setTotal(res.data.data.reduce((acc, item) => acc + item.price, 0)); 
      } catch (error) {
        console.error("Error fetching cart data:", error); 
      }
    };
    
    fetch();
  }, []); 

  const handleDelete = async (bookid) => {
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/v1/remove-from-cart/${bookid}`, {}, { headers });
    alert(response.data.message);
    fetch();
  }

  const PlaceOrder = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/place-order`, { order: Cart }, { headers }); 
      alert(response.data.message);
      navigate("/profile/orderHistory");
    } catch (error) {
      console.log(error); 
    }
  }

  return (
    <>
      {Cart.length === 0 ? (
        <div className="h-screen flex items-center justify-center flex-col">
          <h1 className="text-5xl lg:text-6xl font-semibold text-zinc-400">
            The Cart is Empty
          </h1>
          <img src="/images/catimg_transp.png" alt="Empty Cart" className="mt-4 w-50 h-80" />
        </div>
      ) : (
        <div className="p-6 bg-black rounded-lg flex justify-between">
          <div className="w-2/4">
            <h1 className='text-5xl font-semibold text-white mb-8 text-center'>
              Your Cart
            </h1>
            {Cart.map((item, i) => (
              <div 
                className="w-full my-4 bg-transparent border border-white rounded-xl p-5 flex flex-col md:flex-row justify-between items-center transition-transform duration-300 shadow-lg"
                key={i}
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-[20vh] object-fit rounded-md p-5"
                />
                <div className="w-full md:w-auto ml-4">
                  <h1 className='text-2xl text-white font-semibold text-start mt-2 md:mt-0'> 
                    {item.title}
                  </h1>
                  <p className='text-normal text-gray-300 mt-2 hidden lg:block'>
                    {item.desc.slice(0, 100)}...
                  </p>
                  <p className='text-xl text-gray-200 mt-2'>Price: ${item.price.toFixed(2)}</p>
                  <button 
                    onClick={() => handleDelete(item._id)} 
                    className="mt-4 flex items-center justify-center text-red-600 py-2 px-4 rounded-lg border border-red-600 hover:bg-red-600 hover:text-white transition duration-200"
                  >
                    <FaTrash className="mr-2" /> Delete Item
                  </button>
                </div>
              </div>
            ))}
          </div>
    <div className="w-1/2 p-4 rounded-lg flex flex-col items-center justify-center bg">
    <div className='border border-white p-5 rounded-lg'>
    <h1 className="text-3xl text-white font-semibold">Total Amount</h1>
      <div className="mt-3 flex flex-col items-center justify-between text-xl text-white">
        <h2>{Cart.length} books</h2>
        <h2>${Total.toFixed(2)}</h2>
      </div>
      <button 
        className="mt-4 text-white text-xl font-semibold rounded-lg py-2 px-4 bg-orange-400 hover:bg-orange-500 shadow-md transition duration-200"
        onClick={PlaceOrder}
      >
        Place Your Order
      </button>
    </div>
     
    </div>
</div>
      )}
    </>
  );
};

export default Cart;
