import React, { useEffect } from "react";
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
import {useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import Favorites from "./components/Profile/Favorites";
import Settings from "./components/Profile/Settings";
import Cart from "./pages/Cart";





function App() {

  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  useEffect(() => {
       if(
        localStorage.getItem("id") &&
        localStorage.getItem("token") && 
        localStorage.getItem("role") 
        ) {
        dispatch(authActions.login());
        dispatch(authActions.changeRole(localStorage.getItem(role)));
       }
  
  }, [])
  
  return (
    <div>  
         <Navbar />   
         <Routes>
           <Route path="/" element={<Home />} /> 
           <Route path="/bookstore" element={<BookStore />} /> 
           <Route path="/profile" element={<Profile />}> 
            <Route index element={<Favorites />} />
            <Route path="/profile/settings" element={<Settings />} />
            </Route>
          <Route path="/cart" element= {<Cart />} />
           <Route path="/signup" element={<SignUp />} /> 
           <Route path="/login" element={<Login />} /> 
           <Route path= "view-book-details/:id" element={ <ViewBookDetails />}/>
         </Routes>
         <Footer />
    </div>
  );
}

export default App;
