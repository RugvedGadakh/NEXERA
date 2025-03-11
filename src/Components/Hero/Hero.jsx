'use client';

import React from 'react';
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
    const words = ["Web Solutions", "Stunning Designs", "Powerful Dashboards", "Seamless Experiences"];

    return (
        <div id="Home" className="relative min-h-screen bg-gray-900 text-white overflow-hidden flex items-center justify-center">
            {/* Video Background with Opacity */}
            <div className="absolute inset-0">
                <video 
                    className="w-full h-full object-cover opacity-70" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                >
                    <source src="/Videos/HomeVid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-50" /> {/* Dark overlay */}
            </div>

            {/* Content */}
            <div className="relative z-20 text-center">
                <h1 className="text-4xl lg:text-[3.5rem] font-bold leading-tight mb-4">
                    Elevate Your Brand with <br />
                    <FlipWords words={words} /> <br />
                </h1>
                <h2 className="text-xl lg:text-2xl text-gray-200">
                    Transforming Ideas into Digital Excellence
                </h2>
            </div>
        </div>
    );
};

export default Hero;
