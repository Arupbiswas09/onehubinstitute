import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, BookOpen, Music, Code } from "lucide-react";

const academicFaculty = [
  {
    name: "Mr. Apurva Kumar Sarkar",
    position: "Head of Mathematics",
    specialization: "Mathematics",
    experience: "15+ years",
    image: "Teacher-1.jpg",
  },
  {
    name: "Mr. Bijay Sharma",
    position: "Software Engineer",
    specialization: "Computer science and Application",
    image: "Teacher-2.jpg",
  },
];

const musicFaculty = [
  {
    name: "Sunny Das",
    position: "Head of Music",
    specialization: "Classical Acoustic , Electric , Bass  Guitar",
    experience: "12+ years",
    image: "music-2.jpg",
  },
  {
    name: "Rahul Das",
    position: "Piano Instructor",
    specialization: "Western Classical Piano",
    experience: "8+ years",
    image: "music-class.jpg",
  },
];

const computerFaculty = [
  {
    name: "Mr. Bijay Sharma",
    position: "Software Engineer",
    specialization: "Computer science and Application",
    experience: "12+ years",
    image: "Teacher-2.jpg",
  },
  // {
  //   name: "Arun Ghosh",
  //   position: "Tech Lead",
  //   specialization: "Full Stack Development",
  //   experience: "10+ years",
  //   image: "https://images.pexels.com/photos/7369429/pexels-photo-7369429.jpeg",
  // },
  // {
  //   name: "Neha Singh",
  //   position: "Programming Instructor",
  //   specialization: "Python & Java",
  //   experience: "7+ years",
  //   image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
  // },
];

const FacultyCard: React.FC<{
  member: (typeof academicFaculty)[0];
  icon: React.ReactNode;
  delay: number;
  inView: boolean;
}> = ({ member, icon, delay, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay }}
    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all group"
  >
    <div className="relative">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-0 right-0 m-3 bg-white/90 p-2 rounded-full">
        {icon}
      </div>
    </div>

    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
      <p className="text-sm text-blue-600 mb-1">{member.position}</p>
      <p className="text-xs text-gray-600 mb-2">{member.specialization}</p>
      <div className="flex items-center gap-1 text-xs text-gray-500">
        <Award size={14} />
        <span>{member.experience}</span>
      </div>
    </div>
  </motion.div>
);

const FacultySection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-16 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              <GraduationCap size={16} />
              <span>Our Expert Faculty</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Teachers
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          </motion.div>
        </div>

        {/* Academic Faculty */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Academic Department
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {academicFaculty.map((member, index) => (
              <FacultyCard
                key={index}
                member={member}
                icon={
                  <BookOpen className="w-auto h-auto text-blue-600 object-contain" />
                }
                delay={index * 0.1}
                inView={inView}
              />
            ))}
          </div>
        </div>

        {/* Music Faculty */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Music Department
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {musicFaculty.map((member, index) => (
              <FacultyCard
                key={index}
                member={member}
                icon={
                  <Music className="w-6 h-6 text-orange-600 object-cover" />
                }
                delay={index * 0.1 + 0.3}
                inView={inView}
              />
            ))}
          </div>
        </div>

        {/* Computer Faculty */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Computer Department
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center ml-[500px]">
            {computerFaculty.length === 1 ? (
              <div className="mx-auto w-full md:w-[80%]">
                <FacultyCard
                  member={computerFaculty[0]}
                  icon={<Code className="w-6 h-6 text-green-600" />}
                  delay={0}
                  inView={inView}
                />
              </div>
            ) : (
              computerFaculty.map((member, index) => (
                <FacultyCard
                  key={index}
                  member={member}
                  icon={<Code className="w-6 h-6 text-green-600" />}
                  delay={index * 0.1 + 0.6}
                  inView={inView}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
