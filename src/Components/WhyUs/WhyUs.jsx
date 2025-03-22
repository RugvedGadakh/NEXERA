import React from 'react';

const WhyUs = () => {
  return (
    <div id="why-us" className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Text Content Section */}
        <div className="space-y-6 text-left">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">

  {/* Web Development */}
  <p className="flex items-start">
    <span className="mr-3 mt-1 text-blue-400 text-xl">🌐</span>
    We build fast, scalable, and visually appealing websites that offer seamless user experiences. Our solutions are optimized for performance, responsiveness, and business growth.
  </p>

  {/* UI/UX & Full-Stack Solutions */}
  <p className="flex items-start">
    <span className="mr-3 mt-1 text-blue-400 text-xl">🎨</span>
    Our UI/UX designs focus on intuitive navigation and modern aesthetics. Combined with full-stack development, we deliver secure, high-performing applications tailored to your needs.
  </p>

  {/* Latest Technologies */}
  <p className="flex items-start">
    <span className="mr-3 mt-1 text-blue-400 text-xl">🚀</span>
    Using the latest technologies like React, Next.js, and Java Spring Boot, we build innovative, scalable solutions that keep your business ahead in the digital landscape.
  </p>

</div>

        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden flex justify-center items-center">
            <img 
              src="/Images/WhyUs/img1.png" 
              alt="Custom Web Development" 
              className="w-auto h-auto max-h-48 max-w-full transform hover:scale-110 transition duration-300"
            />
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden flex justify-center items-center">
            <img 
              src="/Images/WhyUs/img2.png" 
              alt="Graphic Design Services" 
              className="w-auto h-auto max-h-48 max-w-full transform hover:scale-110 transition duration-300"
            />
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden flex justify-center items-center">
            <img 
              src="/Images/WhyUs/img3.png" 
              alt="Dashboard Design & Analytics" 
              className="w-auto h-auto max-h-48 max-w-full transform hover:scale-110 transition duration-300"
            />
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden flex justify-center items-center">
            <img 
              src="/Images/WhyUs/img4.png" 
              alt="Advanced Tech Solutions" 
              className="w-auto h-auto max-h-48 max-w-full transform hover:scale-110 transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
