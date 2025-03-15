import React, { useState, useEffect } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start text-left">
          
          {/* Logo Section */}
          <div className="flex justify-center p-4 rounded">
            <img src="/Images/logo.png" alt="Nexera Logo" className="h-44" />
          </div>

          {/* About Section */}
          <div className="space-y-4 md:pr-16">
            <h2 className="text-2xl font-bold">NEXERA TECHNOLOGIES</h2>
            <p className="text-sm">
              Nexera Technologies is a leading software development company specializing in web development, UI/UX design, dashboards, and graphic design. We harness the latest technologies to create innovative solutions that drive business growth and efficiency.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-6 w-6 text-blue-400" />
                <a
                  href="mailto:nexeratechnologies25@gmail.com"
                  aria-label="Send email to Nexera Technologies"
                  className="hover:underline"
                >
                  nexeratechnologies25@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-6 w-6 text-blue-400" />
                <a
                 
                  className="hover:underline"
                >
                  +91 8080585104 <br/>
                  +91 8149427095
                </a>
              </div>
             
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4 md:pl-16">
            <h3 className="text-lg font-semibold">IMPORTANT LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:underline"
                  aria-label="Navigate to About Us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="why-us"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:underline"
                  aria-label="Navigate to Why Us"
                >
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  to="solutions"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:underline"
                  aria-label="Navigate to Our Solutions"
                >
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="clients"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:underline"
                  aria-label="Navigate to Our Clients"
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:underline"
                  aria-label="Navigate to Contact Us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider and Footer Text */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p className="text-sm">
            © {currentYear} Nexera Technologies. All rights reserved. Made with ❤️ by Nexera Technologies Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
