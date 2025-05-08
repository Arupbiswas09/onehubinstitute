import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Star, Award } from "lucide-react";

const toppers = [
  {
    name: "Priya Sharma",
    achievement: "94%",
    class: "ISC Science",
    year: "2025",
    image: "Topper-3.jpg",
  },
  {
    name: "Rahul Kumar",
    achievement: "98%",
    class: "CBSE Class XII",
    year: "2024",
    image: "Topper-2.jpg",
  },
  {
    name: "Amit Roy",
    achievement: "92%",
    class: "WB Board",
    year: "2024",
    image: "Topper-1.jpg",
  },
];

const ToppersSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4">
              <Trophy size={16} />
              <span>Academic Excellence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Star Performers
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ml-36">
          {toppers.map((topper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow h-72 w-72"
            >
              <div className="relative">
                <img
                  src={topper.image}
                  alt={topper.name}
                  className="w-full h-60 object-contain"
                />
                <div className="absolute top-2 right-2">
                  <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star size={12} className="fill-current" />
                    <span>{topper.achievement}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 text-center">
                <h3 className="text-sm font-semibold text-gray-800">
                  {topper.name}
                </h3>
                <p className="text-xs text-blue-600">{topper.class}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToppersSection;
