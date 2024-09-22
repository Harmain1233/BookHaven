import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

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
        <div className="flex bg-black text-white px-8 py-2 items-center justify-between">
            <div className="flex items-center">
                <h1 className="text-2xl font-semibold">BookHaven</h1>
            </div>
            <div className="nav-links-bookhaven flex items-center gap-4">
                {links.map((item, i) => (
                    <Link to={item.link} className="hover:text-blue-500 transition-all duration-300" key={i}>
                        {item.title}
                    </Link>
                ))}
                <Link to="/Login" className="px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all duration-300">SignIn</Link>
                <Link to="/SignUp" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300">SignUp</Link>
            </div>
        </div>
    );
}

export default Navbar;
