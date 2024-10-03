import React from 'react';
import userImage from "/Users/harmainmunir/Desktop/BookHaven/BookStore_Application/frontend/frontend/public/images/usericon.png"; 
import { Link } from 'react-router-dom';


const Sidebar = ({ data }) => {
    return (
            <div className="bg-zinc-800 p-4 rounded flex flex-col items-center justify-between h-[100%]">
            <div className='flex items-center flex-col justify-center'>
                {" "}
            <img src={userImage} className='h-[10vh]' alt="User Icon" />
            <p className="mt-3 text-xl text-zinc-100 font-semibold">
                {data.username} 
            </p>


            <p className="mt-1 text-normal text-zinc-300">
                {data.email} 
            </p>
            <div className="w-full mt-4 h-[1px] bg-zinc-500 hidden lg:block "> </div>
            </div>



            <div className="w-full flex-col items-center justify-center hidden lg:flex">
            <Link to="/profile"
           className='text-zinc-100 font-semibold w-full py-2 mt-2 text-center hover:bg-zinc-900 rounded transition-all duration-300'
           >
            Favorites
           </Link>
           <Link to="/profile/orderHistory"
           className='text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all duration-300'
           >
            Order History
           </Link>
           <Link to="/profile/settings"
           className='text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all duration-300'
           >
            Settings
           </Link>
           </div>
           <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center">
  Log Out
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 ml-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m0-6h4.5m0 0l-3-3m3 3l-3 3"
    />
  </svg>
</button>

       


       







        </div>
    );
};

export default Sidebar;
