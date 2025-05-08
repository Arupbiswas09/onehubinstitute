import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Book, Music, Monitor, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const computerPrograms = [
  {
    title: "Master Computer Science & Coding",
    description: "Comprehensive coding and development programs",
    modules: [
      "Coding Basics to Advance",
      "Java Programming",
      "C++ Programming",c
      "Go lang",
      "Python",
      "Web Development",
      "App Development",
      "Live Projects",
    ],
    duration: "6 months",
  },
];

const courseCategories = [
  {
    id: "academic",
    title: "Academic Coaching",
    description:
      "Expert coaching for classes 5-12 across all subjects and boards (CBSE, ICSE, State).",
    icon: <Book size={32} />,
    color: "blue",
    link: "/academic",
    features: [
      "Classes 5-12 (All Subjects)",
      "CBSE, ICSE & State Board",
      "Experienced Faculty",
      "Regular Assessments",
      "Personalized Attention",
      "Comprehensive Study Material",
    ],
  },
  {
    id: "music",
    title: "Music Classes",
    description:
      "Certified music courses in Guitar, Keyboard, Drums and Vocals from Trinity College London.",
    icon: <Music size={32} />,
    color: "orange",
    link: "/music",
    features: [
      "Guitar, Keyboard, Drums & Vocals",
      "Trinity College Certification",
      "Professional Instructors",
      "All Skill Levels",
      "Regular Performance Opportunities",
      "Modern Music Studio",
    ],
  },
  {
    id: "computer",
    title: "Computer Training",
    description:
      "Practical computer training from basic to advanced levels with hands-on projects.",
    icon: <Monitor size={32} />,
    color: "green",
    link: "/computer",
    features: [
      "Basic to Advanced Levels",
      "Programming Languages",
      "Web & App Development",
      "Project-Based Learning",
      "Certified Courses",
      "State-of-the-art Computer Lab",
    ],
  },
];

const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("academic");
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getColorClass = (
    color: string,
    type: "bg" | "text" | "border" | "hover",
    opacity?: number
  ) => {
    const opacityClass = opacity ? `-${opacity}` : "";

    switch (color) {
      case "blue":
        return type === "hover"
          ? "hover:bg-blue-600 hover:border-blue-600"
          : `${type}-blue${opacityClass}`;
      case "orange":
        return type === "hover"
          ? "hover:bg-orange-500 hover:border-orange-500"
          : `${type}-orange${opacityClass}`;
      case "green":
        return type === "hover"
          ? "hover:bg-green-600 hover:border-green-600"
          : `${type}-green${opacityClass}`;
      default:
        return "";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What We Offer at OneHub
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Discover our comprehensive range of educational services designed to
            nurture young minds. From academic excellence to creative
            development, we offer a holistic approach to education.
          </p>
        </div>

        {/* Category Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {courseCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg border-2 transition-all ${
                selectedCategory === category.id
                  ? `${getColorClass(category.color, "bg")} ${getColorClass(
                      category.color,
                      "border"
                    )} text-white`
                  : `bg-white ${getColorClass(
                      category.color,
                      "border"
                    )} ${getColorClass(category.color, "text")}`
              }`}
            >
              <div className="flex items-center">
                {category.icon}
                <span className="ml-2 font-medium">{category.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Category Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {courseCategories.map(
            (category) =>
              selectedCategory === category.id && (
                <div
                  key={category.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <motion.div variants={itemVariants}>
                    <div
                      className={`inline-flex items-center justify-center ${getColorClass(
                        category.color,
                        "bg"
                      )} p-3 rounded-full text-white mb-4`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{category.description}</p>

                    <ul className="space-y-3 mb-8">
                      {category.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span
                            className={`h-6 w-6 rounded-full ${getColorClass(
                              category.color,
                              "bg",
                              200
                            )} ${getColorClass(
                              category.color,
                              "text",
                              700
                            )} flex items-center justify-center text-sm font-bold mr-3`}
                          >
                            ✓
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={category.link}
                      className={`inline-flex items-center ${getColorClass(
                        category.color,
                        "bg"
                      )} ${getColorClass(
                        category.color,
                        "hover"
                      )} text-white py-3 px-6 rounded-lg transition-colors`}
                    >
                      Explore {category.title}{" "}
                      <ArrowUpRight size={16} className="ml-2" />
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={
                        category.id == "academic"
                          ? "Academic.jpg"
                          : category.id == "music"
                          ? "music-class.jpg"
                          : category.id == "computer"
                          ? "computer.jpg"
                          : ""
                      }
                      // src={`https://images.pexels.com/photos/${
                      //   category.id === 'academic' ? '5212324' :
                      //   category.id === 'music' ? '7095748' : '7369429'
                      // }/pexels-photo-${
                      //   category.id === 'academic' ? '5212324' :
                      //   category.id === 'music' ? '7095748' : '7369429'
                      // }.jpeg`}
                      alt={`${category.title} at OneHub Institute`}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </div>
              )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
