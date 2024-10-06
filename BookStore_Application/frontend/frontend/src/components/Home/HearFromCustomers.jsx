import React from 'react';
import customerImage from '/images/customer.jpg'; // Import your customer image here

const HearFromCustomers = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-between p-6 mt-20 relative mx-auto max-w-7xl">
      
      {/* Image on the right */}
      <div className="flex-shrink-0 md:w-[35%]">
      <img src={customerImage} alt="Customer" className="w-full h-auto rounded-full shadow-lg ml-20" />

      </div>

      {/* Text on the left */}
      <div className="pl-6 relative mt-6 md:mt-0 md:ml-6"> {/* Added md:ml-6 */}
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
        >Hear from Our Happy Customers</h1>
        <p className="text-lg mb-4">
          We love hearing feedback from our customers! Here's what they have to say about their experience with us:
        </p>

        {/* Testimonials */}
        <div className="mt-6 grid grid-cols-1 gap-6 text-center">
          <div className="p-6 rounded-lg border border-orange-400 hover:text-orange-400 bg-transparent">
            <p className="italic text-white-700">"Absolutely love the collection here! Found all my favorite titles with ease."</p>
            <h3 className="mt-4 font-bold" style={{ fontFamily: '"PT Serif", serif' }}>— Sarah W.</h3>
          </div>

          <div className="p-6 rounded-lg border border-orange-400 hover:text-orange-400 bg-transparent">
            <p className="italic text-white-700">"Amazing discounts and fast delivery. My go-to bookstore now!"</p>
            <h3 className="mt-4 font-bold" style={{ fontFamily: '"PT Serif", serif' }}>— John D.</h3>
          </div>

          <div className="p-6 rounded-lg border border-orange-400 hover:text-orange-400 bg-transparent">
            <p className="italic text-white-700">"Customer service is excellent! They helped me find exactly what I was looking for."</p>
            <h3 className="mt-4 font-bold" style={{ fontFamily: '"PT Serif", serif' }}>— Emily R.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HearFromCustomers;
