import { Link } from "react-scroll";
import { Facebook, Twitter, Instagram, Lightbulb, Target, Rocket } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-gradient-to-b from-[#111827] to-[#1f2937] text-white py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-white-400">
          About Us
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
        <div className="space-y-8 text-left">
          
          {/* Description with Icons & Padding */}
          <div className="flex items-start space-x-5 p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-r from-sky-500 to-indigo-500 p-3 rounded-full">
              <Lightbulb className="text-white w-7 h-7" />
            </div>
            <p>
              Founded in 2025, we started as a small team of passionate innovators, aiming to revolutionize the digital world with groundbreaking solutions.
            </p>
          </div>
          
          <div className="flex items-start space-x-5 p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full">
              <Target className="text-white w-7 h-7" />
            </div>
            <p>
              Our mission is simple: To empower businesses through cutting-edge technology and seamless design. We create solutions that drive impact.
            </p>
          </div>
          
          <div className="flex items-start space-x-5 p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-r from-pink-400 to-red-500 p-3 rounded-full">
              <Rocket className="text-white w-7 h-7" />
            </div>
            <p>
              With innovation at our core, we help businesses scale new heights. Our expertise ensures digital transformation that leaves a lasting impact.
            </p>
          </div>

          {/* Buttons and Social Links */}
          <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:space-x-6">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-flex h-14 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-10 text-xl font-semibold text-white hover:scale-105 transition-transform cursor-pointer"
            >
              Contact us
            </Link>
            <div className="flex space-x-6 items-center">
              <Link to="" smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer">
                <Facebook size={40} className="p-2 bg-gray-700 rounded-full hover:scale-110 transition-transform" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="" smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer">
                <Twitter size={40} className="p-2 bg-gray-700 rounded-full hover:scale-110 transition-transform" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="" smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer">
                <Instagram size={40} className="p-2 bg-gray-700 rounded-full hover:scale-110 transition-transform" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-[450px] w-full overflow-hidden rounded-lg shadow-xl">
          <img
            src="/Images/About/aboutimg.jpg"
            alt="Innovators working together"
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
