"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const features = [
    {
        title: "Web Design And Development",
        description: "We craft responsive and user-friendly websites tailored to your business needs, ensuring a seamless digital experience.",
        image: "/Images/Services/Design.png",
        alt: "Web design and development illustration"
      },
      {
        title: "Graphic Designing",
        description: "We offer professional graphic design services, including logo design, posters, flyers, and business cards, to enhance your brand’s visual identity.",
        image: "/Images/Services/Inspection.png",
        alt: "Graphic design illustration"
      },
      {
        title: "Dashboard Design Services",
        description: "We specialize in designing intuitive and data-driven dashboards that simplify complex information for better decision-making.",
        image: "/Images/Services/Plc_based.png",
        alt: "Dashboard design illustration"
      }
      
];

const CountUp = ({ end, duration, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration, startCounting]);

  return <span>{count}</span>;
};

function FeatureCard({ title, description, image, alt, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow"
    >
      <div className="relative h-48 mb-6">
        <motion.img
          src={image}
          alt={alt}
          className="w-full h-full object-contain"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-black">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function AnimatedFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="our-services"
      className="py-20 bg-gray-200 text-black overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* Numeric Data Section */}
        <div
          ref={sectionRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 text-center transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-4xl font-bold text-black mb-2">
              <CountUp end={50} duration={2000} startCounting={isVisible} />+
            </h3>
            <p className="text-gray-700 text-lg">Innovative Solutions</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-4xl font-bold text-black mb-2">
              <CountUp end={50} duration={2000} startCounting={isVisible} />+
            </h3>
            <p className="text-gray-700 text-lg">Projects Delivered</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-4xl font-bold text-black mb-2">
              <CountUp end={95} duration={2000} startCounting={isVisible} />%
            </h3>
            <p className="text-gray-700 text-lg">Client Satisfaction</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
