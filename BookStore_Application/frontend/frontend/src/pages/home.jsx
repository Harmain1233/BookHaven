import React from 'react';
import Hero from "../components/Home/Hero";
import RecentlyAdded from '../components/RecentlyAdded';

const home = () => {
  return (
    <div className="bg-black text-white px-10 py-8">
      <Hero />
      <RecentlyAdded />
    </div>
  );
};

export default home;
