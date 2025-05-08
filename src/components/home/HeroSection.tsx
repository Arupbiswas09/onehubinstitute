import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen md:h-[600px] overflow-hidden bg-gray-900">
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key="main-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src="Landing-Bg.jpg"
              alt="OneHub Institute Hero Banner"
              className="w-full h-full object-fill"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50">
              <div className="container mx-auto px-4 h-full flex items-center">
                <motion.div
                  className="max-w-3xl text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Best In Coaching | Music | Tech
                  </h2>
                  <p className="text-lg md:text-xl mb-8">
                    Academic excellence, creative development, and technology
                    skills under one roof
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/courses"
                      className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md shadow-md hover:shadow-lg transition-all inline-flex items-center"
                    >
                      Explore Programs <ArrowRight size={16} className="ml-2" />
                    </Link>
                    <Link
                      to="/contact"
                      className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white rounded-md transition-all inline-flex items-center"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
