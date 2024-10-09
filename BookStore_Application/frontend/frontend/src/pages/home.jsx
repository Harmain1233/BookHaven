import React from 'react';
import Hero from "../components/Home/Hero";
import RecentlyAdded from '../components/Home/RecentlyAdded';
import MainContent from '../components/Home/MainContent';
import HearFromCustomers from '../components/Home/HearFromCustomers';

const Home = () => {
  return (
    <div className='bg-black text-white'>
      <Hero className="min-h-[75vh]"/> {/* Set min-height for Hero */}
      <div className="py-8"> {/* Add vertical padding */}
        <RecentlyAdded className="min-h-[300px]" /> {/* Ensure this has a min-height */}
      </div>
      <div className="py-8"> {/* Add vertical padding */}
        <MainContent className="min-h-[300px]" /> {/* Ensure this has a min-height */}
      </div>
      <div className="mb-20">
        <HearFromCustomers />
      </div>
    </div>
  );
};

export default Home;
