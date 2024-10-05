import React, { useState, useEffect } from 'react'; 
import axios from "axios"; 
import { useNavigate  } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [Cart, setCart] = useState([]); // Initialize Cart as an empty array
  const [Total, setTotal] = useState(0);
  
  const headers = {
    id: localStorage.getItem("id"), 
    authorization: `Bearer ${localStorage.getItem("token")}`, 
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1000/api/v1/get-user-cart", 
          { headers }
        );
        setCart(res.data.data); 
        setTotal(res.data.data.reduce((acc, item) => acc + item.price, 0)); // Calculate total price
      } catch (error) {
        console.error("Error fetching cart data:", error); 
      }
    };
    
    fetch();
  }, [Cart]); 


  const handleDelete = async (bookid) => {
     const response = await axios.put(
      `http://localhost:1000/api/v1/remove-from-cart/${bookid}`, 
      {},
      { headers }
     );
     alert(response.data.message);
  }

  const PlaceOrder = async () => {
    try {
      const response = await axios.post(
        `http://localhost:1000/api/v1/place-order`, 
       { order: Cart }, 
       { headers }
      ); 
      alert(response.data.message);
      navigate("/profile/orderHistory");
    } catch (error) {
      console.log(error); 
    }
  }

 

  return (
    <>
      {!Cart.length}
      {Cart.length === 0 && (
        <div className="h-screen flex items-center justify-center flex-col">
          <h1 className="text-5xl lg:text-6xl font-semibold text-zinc-400">
            The Cart is Empty
          </h1>
          <img
            src="/images/catimg_transp.png"
            alt="Empty Cart"
            className="mt-4 w-50 h-80"  // Adjust the size with Tailwind classes
          />
         
        </div>
      )}
    
      {Cart.length > 0 && (
        <div className="p-6">
          <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>
            Your Cart
          </h1>
          {Cart.map((item, i) => (
            <div 
              className="w-full my-4 rounded-lg flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center transition-transform duration-300 transform hover:scale-105" // Added hover scale
              key={i} // Fixed the key syntax
            >
              <img 
                src={item.url} 
                alt={item.title} // Provide a descriptive alt text
                className="h-[30vh] md:h-[10vh] w-[50vh] object-cover rounded-md"
              />
              <div className="w-full md:w-auto ml-4">
                <h1 className='text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0'> 
                  {item.title}
                </h1>
                <p className='text-normal text-zinc-300 mt-2 hidden lg:block'>
                  {item.desc.slice(0, 100)}...
                </p>
                <p className='text-xl text-zinc-400 mt-2'>Price: ${item.price}</p>
                <button 
                  onClick={() => handleDelete(item._id)} 
                  className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
                >
                  Delete Item
                </button>
              </div>
            </div>
          ))}
           
           <div className="mt-4 w-full flex items-center justify-end">
  <div className="p-4 bg-zinc-800 rounded">
    <h1 className="text-3xl text-zinc-200 font-semibold">
      Total Amount
    </h1>
    <div className="mt-3 flex items-center justify-between text-xl text-zinc-200">
      <h2>{Cart.length} books</h2>
      <h2 >${Total.toFixed(2)}</h2>
    </div>
    <div className="w-[100%] mt-3">
      <button className="text-white text-xl font-semibold rounded-lg py-2 px-4  shadow-md border border-orange-400 hover:text-orange-400"
            onClick={PlaceOrder}
>

      
        Place Your Order
      </button>
    </div>
  </div>
</div>

        </div>
      )}
    </>
  );
};

export default Cart;

