import React from 'react';
import Hero from "../components/Home/Hero";
import RecentlyAdded from '../components/Home/RecentlyAdded';

const home = () => {
  return (
    <div className='bg-black text-white '>
      <Hero />
      <RecentlyAdded />
    </div>
  );
};

export default home;
