import React from 'react';
import sampleImage from '/images/mainsection_img2.png'; // Import your image here

const MainContent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 mt-20 relative">
           {/* Positioned text behind the image */}
          
      {/* Image on the left */}
      <div className="flex-shrink-0 md:w-2/4">
        <img src={sampleImage} alt="Book collection" className="w-full h-auto rounded-lg shadow-lg" />
      </div>

      {/* Text on the right */}
      <div className="w-full md:w-1/2 pl-6 relative mt-6 md:mt-0">
        <h1 
            style={{
                fontSize: '30px',
                fontFamily: '"PT Serif", serif',
                margin: 0,
                background: 'linear-gradient(to right, #FF7F50, #FFD700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                marginBottom: '30px',
                textAlign: 'center',
            }}
        
        
        
        >Your Favorite Reads Are Here!</h1>
        <p className="text-lg mb-4">
          Buy your favorite books online with ease! Enjoy exclusive offers and discounts on selected titles.
          Dive into our collection and find special deals that make reading more affordable.
          Shop now and unlock more savings with every purchase!
        </p>


        {/* Statistics Section */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-lg shadow-lg border border-orange-400 hover:text-orange-400">
            <h2 className="text-2xl font-bold"
                style={{
                    fontSize: '30px',
                    fontFamily: '"PT Serif", serif',
                    margin: 0,
                    background: 'linear-gradient(to right, #FF7F50, #FFD700)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
    
            
            
            >800+
        


            </h2>
            <p className="text-gray-500"
            >Book Listings</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg border border-orange-400 hover:text-orange-400">
            <h2 className="text-2xl font-bold"
             style={{
                fontSize: '30px',
                fontFamily: '"PT Serif", serif',
                margin: 0,
                background: 'linear-gradient(to right, #FF7F50, #FFD700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
            
            >1K+</h2>
            <p className="text-gray-500">Registered Members</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg border border-orange-400 hover:text-orange-400">
            <h2 className="text-2xl font-bold"
              style={{
                fontSize: '30px',
                fontFamily: '"PT Serif", serif',
                margin: 0,
                background: 'linear-gradient(to right, #FF7F50, #FFD700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
            
            >50+</h2>
            <p className="text-gray-500">Branch Count</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
