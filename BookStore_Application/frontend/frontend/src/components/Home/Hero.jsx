import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom'; // Added import for Link
import image1 from '/images/imagebgcouch.jpg'; // Ensure correct path

const Hero = () => (
    <Parallax
        bgImage={image1}
        bgImageAlt="Library Interior"
        style={{
             height: '75vh'
        }}
    >
        <div style={{ height: '75vh', position: 'relative'}}>
            <div 
                style={{
                    fontFamily: '"PT Serif", serif',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    background: 'rgba(0, 0, 0, 0.5)',

                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '20px',
                }}
            >
                <h1 
                    style={{
                        fontSize: '48px',
                        fontFamily: '"PT Serif", serif',
                        margin: 0,
                        background: 'linear-gradient(to right, #FF7F50, #FFD700)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    }}
                >
                    Welcome To Book Haven
                </h1>
                <div style={{ fontSize: '24px', marginTop: '10px', maxWidth: '600px', textAlign: 'center', color: 'white' }}>
                    <p style={{ margin: '0 0 11px 0' }}>Dive into a world of stories and adventures.</p>
                    <p style={{ margin: '0', whiteSpace: 'nowrap' }}>Explore our vast collection and find your next favorite read!</p>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Link to="/BookStore"> {/* Correct link to BookStore page */}
                        <button 
                            className="text-white text-2xl font-semibold rounded-lg py-2 px-4 shadow-md border border-orange-400 hover:text-orange-400">
                            Discover Books
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </Parallax>
);

export default Hero;
