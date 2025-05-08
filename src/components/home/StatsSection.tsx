import React, { useState, useEffect } from 'react';
import { Users, Award, Star, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Mock data for stats
const stats = [
  { icon: <Users size={28} />, value: 200, label: "Students Trained", prefix: "", suffix: "+" },
  { icon: <Award size={28} />, value: 98, label: "Success Rate", prefix: "", suffix: "%" },
  { icon: <Star size={28} />, value: 18, label: "Expert Faculty", prefix: "", suffix: "" },
  { icon: <Bookmark size={28} />, value: 10, label: "Certifications", prefix: "", suffix: "+" }
];

// Counter component for animated stats
const Counter = ({ end, duration = 2000, prefix = "", suffix = "", shouldAnimate }: { 
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  shouldAnimate: boolean;
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldAnimate) return;
    
    let startTime: number | null = null;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * end));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldAnimate]);
  
  return (
    <span className="text-4xl font-bold">{prefix}{shouldAnimate ? count : end}{suffix}</span>
  );
};

const StatsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };
  
  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievement in Numbers</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-blue-100">
            Our commitment to educational excellence is reflected in our achievements over the years. Here's what makes OneHub Institute a trusted name in education.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-opacity-20 transition-all"
              variants={itemVariants}
            >
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="mb-2">
                <Counter 
                  end={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix} 
                  shouldAnimate={hasAnimated} 
                />
              </div>
              <p className="text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;