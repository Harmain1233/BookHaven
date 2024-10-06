import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { useSelector } from "react-redux";
import { GiBookmarklet } from "react-icons/gi";




const Navbar = () => {
    const links = [
        { title: "Home", link: "/" },
        { title: "Shop", link: "/BookStore" }, // Ensure this matches your route
        { title: "Cart", link: "/Cart" },
        { title: "Profile", link: "/profile" },
    ];

   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn );

   if (isLoggedIn === false) {
     links.splice(2,2);
   }




    return ( 
        <div className="flex bg-black text-white px-8 py-2 items-center justify-between border border-[#33353F] mx-auto z-10">
            <div className="flex items-center mt-3">
                <Link 
                    to="/" 
                    className="font-serif text-2xl font-semibold flex items-center"
                    style={{ 
                        marginTop: '20px',
                        fontSize: '30px',
                        fontFamily: '"PT Serif", serif',
                        margin: 0,
                        background: 'linear-gradient(to right, #FF7F50, #FFD700)', // Gradient for the logo
                        WebkitBackgroundClip: 'text', // Clip the background to the text
                        WebkitTextFillColor: 'transparent', // Make text fill transparent
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    }}
                > 
                <GiBookmarklet 
                 style={{ 
                    color: 'white', 
                    fontSize: '2rem', 
                    margin: '10px' 
                 }}
                />    BookHaven 


                </Link>
            </div>
            <div className="nav-links-bookhaven flex items-center gap-6 pt-serif-regular mt-3">
                {links.map((item, i) => (
                    <Link 
                        to={item.link} 
                        className="text-white text-lg transition-colors duration-300 hover:text-orange-400" 
                        key={i}
                        style={{ 
                            fontSize: '20px',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Shadow for text
                        }}
                    >
                        {item.title}
                    </Link>
                ))}
           {isLoggedIn === false && (
            <>
             <Link 
                    to="/Login" 
                    className="text-white bg-transparent border border-orange-400 py-1 px-4 rounded-lg font-semibold transition-colors duration-300 hover:bg-orange-400 hover:text-white"
                >
                    Sign In
                </Link>
                <Link 
                    to="/SignUp" 
                    className="text-white bg-orange-400 border border-orange-400 py-1 px-4 rounded-lg font-semibold transition-colors duration-300 hover:text-white"
                >
                    Sign Up
                </Link>
            </>




           )}
            </div>
        </div>
    );
}

export default Navbar;
