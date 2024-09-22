import React from 'react';
import { Parallax } from 'react-parallax';
import image1 from '/Users/harmainmunir/Desktop/BookHaven/BookStore_Application/frontend/frontend/public/images/image1.jpeg'; // Adjust path as needed

const Hero = () => (
    <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={image1}
    bgImageAlt="Library Interior"
    strength={-300}
>
    <div style={{ height: '400px', position: 'relative' }}>
        <div 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.6)', // Dark overlay for better readability
                display: 'flex',
                flexDirection: 'column', // Stack items vertically
                alignItems: 'center', // Center items horizontally
                justifyContent: 'center', // Center items vertically
                color: 'white',
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <h1 style={{ fontSize: '48px', margin: 0, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                Welcome To Book Haven
            </h1>
            <div style={{ fontSize: '24px', marginTop: '10px', maxWidth: '600px', textAlign: 'center' }}>
                <p style={{ margin: '0 0 11px 0' }}>Dive into a world of stories and adventures.</p>
                <p style={{ margin: '0', whiteSpace: 'nowrap' }}>Explore our vast collection and find your next favorite read!</p>
            </div>
            <div style={{ marginTop: '20px' }}> {/* Add space above the button */}
            <button 
    className="bg-brown-800 text-white text-2xl font-semibold border border-brown-600 rounded-lg py-2 px-4 transition-colors duration-300 hover:bg-[#3A2A25] shadow-md"
>
    Discover Books
</button>

            </div>
        </div>
    </div>
</Parallax>



);

export default Hero;
