import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Side */}
          <div className="lg:w-1/2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="Admission-Banner.jpg"
                  alt="Students learning at OneHub Institute"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-4 md:p-6 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-xl font-bold mr-4">
                    
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-semibold">Book Free</h4>
                    <p className="text-blue-600 font-bold">Demo Class </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                About OneHub Institute
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Siliguri's Most Trusted Education Partner
              </h2>
              <div className="w-20 h-1 bg-orange-500 mb-6"></div>
              <p className="text-gray-600 mb-6">
              <div>
  <h2>OneHub Institute – Siliguri’s Premier Coaching & Training Center</h2>
  <p>If you're looking for a top-rated coaching institute in Siliguri that delivers quality education and measurable results, OneHub Institute is your destination. With a focus on academic excellence, professional computer training, and structured music education, we are committed to nurturing talent and building strong foundations.</p>

  <h3>Why Choose OneHub Institute?</h3>
  <p>At OneHub, we believe that the right guidance can unlock a student’s full potential. Our institute is known for:</p>
  <ul>
    <li>Result-driven academic coaching (Classes 5 to 12 – All boards)</li>
    <li>Industry-relevant computer courses (from basics to advanced programming)</li>
    <li>Expert-led music classes (Guitar, Keyboard, Vocals)</li>
    <li>Modern classrooms with practical, student-centric learning</li>
    <li>Qualified faculty with years of teaching experience</li>
    <li>Affordable fee structure and flexible schedules</li>
  </ul>

  <h3>Our Core Offerings</h3>
  <p><strong>Academic Coaching:</strong> Personalized support for students of all streams, focusing on concept clarity, exam preparation, and consistent performance improvement.</p>
  <p><strong>Computer Training:</strong> Courses in C, C++, Python, Java, Web Development, MS Office, Tally, and more. Ideal for school students, college learners, and job seekers looking to build IT skills.</p>
  <p><strong>Music Education:</strong> Structured lessons in guitar, keyboard, and vocals led by trained instructors. Suitable for beginners and intermediate learners.</p>

  <h3>Trusted by Students and Parents Across Siliguri</h3>
  <p>With a reputation built on performance and trust, OneHub Institute has become a preferred choice for families seeking holistic, professional education. Our results speak for themselves.</p>

  <h3>Visit Us</h3>
  <p>Conveniently located in the heart of Siliguri, OneHub Institute offers a safe, inclusive, and focused environment for learners of all ages. Whether you're preparing for exams, upskilling for your career, or exploring creative passions, we have a course tailored for you.</p>
  <p><strong>Book a free demo session today and experience the difference.</strong></p>
</div>


              </p>
              <p className="text-gray-600 mb-8">
                Our unique approach combines quality academic coaching across
                all boards with certified music education and advanced computer
                training - all under one roof. With a team of dedicated
                educators and modern facilities, we create an environment where
                students can excel academically while developing their creative
                and technical abilities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-1 mr-3">
                    <Check size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">
                    Expert faculty with 10+ years experience
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-1 mr-3">
                    <Check size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">
                    Personalized attention (1:15 ratio)
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-1 mr-3">
                    <Check size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">
                    Modern digital classrooms
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-1 mr-3">
                    <Check size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">
                    Comprehensive study materials
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-1 mr-3">
                    <Check size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">
                    International certifications
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-1 mr-3">
                    <Check size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">
                    Regular progress assessments
                  </span>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-lg transition-colors"
              >
                Learn More About Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
