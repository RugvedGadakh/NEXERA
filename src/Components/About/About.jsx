import { Link } from "react-scroll";
import { Facebook, Linkedin, Instagram, Lightbulb, Target, Rocket } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-[#111827] to-[#1f2937] text-white py-20 px-6 lg:px-16"
    >
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-white-400">
          About Us
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
        <motion.div
          className="space-y-8 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {[
            { icon: Lightbulb, text: "Founded in 2025, we started as a small team of passionate innovators, aiming to revolutionize the digital world with groundbreaking solutions.", gradient: "from-sky-500 to-indigo-500" },
            { icon: Target, text: "Our mission is simple: To empower businesses through cutting-edge technology and seamless design. We create solutions that drive impact.", gradient: "from-green-400 to-blue-500" },
            { icon: Rocket, text: "With innovation at our core, we help businesses scale new heights. Our expertise ensures digital transformation that leaves a lasting impact.", gradient: "from-pink-400 to-red-500" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-5 p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`bg-gradient-to-r ${item.gradient} p-3 rounded-full`}>
                <item.icon className="text-white w-7 h-7" />
              </div>
              <p>{item.text}</p>
            </motion.div>
          ))}

          <motion.div
            className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-flex h-14 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-10 text-xl font-semibold text-white hover:scale-105 transition-transform cursor-pointer"
            >
              Contact us
            </Link>
            <div className="flex space-x-6 items-center">
              {[
                // { icon: Facebook, link "https://www.facebook.com" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/nexera-solutions-707b28357/" },
                { icon: Instagram, link: "https://www.instagram.com/nexera_solutions?igsh=aWNyZnFidGM1emM3" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white cursor-pointer">
                    <item.icon size={40} className="p-2 bg-gray-700 rounded-full transition-transform" />
                    <span className="sr-only">{item.icon.name}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-[450px] w-full overflow-hidden rounded-lg shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <img
            src="/Images/About/aboutimg.jpg"
            alt="Innovators working together"
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
