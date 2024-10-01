import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Home/Footer";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home"; // Ensure correct casing
import BookStore from "./pages/BookStore";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import './App.css';
import ViewBookDetails from "./components/ViewBookDetails/ViewBookDetails";

function App() {
  return (
    <div>  
         <Navbar />   
         <Routes>
           <Route path="/" element={<Home />} /> 
           <Route path="/bookstore" element={<BookStore />} /> 
           <Route path="/Profile" element={<Profile />} />
           <Route path="/signup" element={<SignUp />} /> 
           <Route path="/login" element={<Login />} /> 
           <Route path= "view-book-details/:id" element={ <ViewBookDetails />}/>
         </Routes>
         <Footer />
    </div>
  );
}

export default App;
