import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const galleryImages = [
  {
    url: "onehub-1.jpg",
    title: "Student Life at OneHub",
  },
  {
    url: "onehub-2.jpg",
    title: "WB Board Excellence",
  },
];

const GallerySection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Photo Gallery
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Life at OneHub Institute
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Take a glimpse into our vibrant learning environment and student
            activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-video cursor-pointer object-fill"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full transition-transform duration-500 group-hover:scale-110 object-fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
