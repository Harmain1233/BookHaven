import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FaBook } from 'react-icons/fa';


const Navbar = () => {
    const links = [
        {
            title: "Home",
            link: "/", 
        }, 
        {
            title: "BookStore", 
            link: "/BookStore", // Ensure this matches your route
        }, 
        {
            title: "Cart",
            link: "/cart",
        }, 
        {
            title: "Profile", 
            link: "/profile",
        },
    ];

    return (
        <div className="flex bg-black text-white px-8 py-2 items-center justify-between border border-[#33353F] mx-auto z-10">
            <div className="flex items-center">
            <Link to="/" className="font-serif text-2xl font-semibold flex items-center"
              style={{ 
                    marginTop: '20px',
                    fontSize: '30px',
                    fontFamily: '"PT Serif", serif',
                    margin: 0,
                    background: 'linear-gradient(to right, #FF7F50, #FFD700)', // More orangey gradient
                    WebkitBackgroundClip: 'text', // Clip the background to the text
                    WebkitTextFillColor: 'transparent', // Make text fill transparent
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              }}
            
            > 
  BookHaven
</Link>

            </div>
            <div className="font-serif nav-links-bookhaven flex items-center gap-4 mt-5">
                {links.map((item, i) => (
                    <Link to={item.link} className="" key={i}>
                        {item.title}
                    </Link>
                ))}
        <Link to="/Login" className="text-white bg-transparent border border-orange-400 py-1 px-4 rounded-lg font-semibold transition-colors duration-300 hover:bg-transparent hover:text-orange-400">
        SignIn</Link>
     <Link to="/SignUp" className="text-white bg-transparent border border-orange-400 py-1 px-4 rounded-lg font-semibold transition-colors duration-300 hover:bg-transparent hover:text-orange-400">
       SignUp
      </Link>

            </div>
        </div>
    );
}

export default Navbar;
