import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    content: "OneHub Institute transformed my approach to learning. Their personalized attention and structured study plans helped me secure 95% in my board exams. The faculty is truly exceptional!",
    author: "Priya Sharma",
    role: "Class 12 Student",
    rating: 5,
    image: ""
  },
  {
    id: 2,
    content: "As a parent, I've seen remarkable improvement in my child's confidence and academic performance. The faculty at OneHub doesn't just teach subjects, they mentor students for life.",
    author: "Rajiv Gupta",
    role: "Parent",
    rating: 5,
    image: ""
  },
  {
    id: 3,
    content: "The music program at OneHub is exceptional. I received my Trinity College London certification after just one year of training. The practical approach to music theory makes learning enjoyable.",
    author: "Aditya Roy",
    role: "Music Student",
    rating: 5,
    image: ""
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [inView, testimonials.length]);
  
  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
      />
    ));
  };
  
  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
    },
    exit: { 
      opacity: 0,
      y: -50,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            What Our Students Say
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Testimonials from Our Community</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Hear from our students and parents about their experience at OneHub Institute and how our programs have helped them achieve their goals.
          </p>
        </div>
        
        <div className="relative h-96">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              activeTestimonial === index && (
                <motion.div
                  key={testimonial.id}
                  variants={testimonialVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-center mb-6">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="text-gray-700 text-lg md:text-xl mb-8 text-center">
                        "{testimonial.content}"
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800">{testimonial.author}</h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
        
        {/* Testimonial Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeTestimonial === index 
                  ? 'bg-orange-500 w-10' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;