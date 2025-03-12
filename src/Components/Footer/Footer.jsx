import React, { useState, useEffect } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="bg-sky-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">TECH STAR</h2>
            <p className="text-sm">
              Tech Star is a leading automation company committed to innovation and excellence in delivering cutting-edge automated solutions that optimize processes and drive efficiency.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-6 w-6" />
                <a
                  href="mailto:infotechstar15@yahoo.in"
                  aria-label="Send email to Tech Star"
                  className="hover:underline"
                >
                  infotechstar15@yahoo.in
                </a>
              </div>
              {/* <div className="flex items-center space-x-2">
                <Phone className="h-6 w-6" />
                <span>+91 98765 43210</span>
              </div> */}
              <div className="flex items-start space-x-2">
                <MapPin className="h-6 w-6 flex-shrink-0" />
                <span>Bhosari, Plot No T/180, MIDC, Bhosari, Pimpri-Chinchwad, Maharashtra 411039</span>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-4">
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15125.110589009822!2d73.81973326768274!3d18.606577565919775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9041a56f8db%3A0x9a103a8d59c14c5b!2sTech%20Star!5e0!3m2!1sen!2sin!4v1733466181213!5m2!1sen!2sin"
                height="100%"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tech Star Location"
              ></iframe>
            </div>
            {/* <div className="flex items-center text-sm">
              <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
              <p>Bhosari, Plot No T/180, MIDC, Bhosari, Pimpri-Chinchwad, Maharashtra 411039</p>
            </div> */}
          </div>

          {/* Links Section */}
          <div className="space-y-4">
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
        <div className="mt-8 pt-4 border-t border-white">
          <div className="text-center">
            <p className="text-sm">
              © {currentYear} Tech Star. All rights reserved. Made with ❤️ by Tech Star Team.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
