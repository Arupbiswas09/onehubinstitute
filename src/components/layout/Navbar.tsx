import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Toggle dropdown for mobile
  const toggleDropdown = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-700 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 97496 55934 / 97496 28507</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>onehubinstitute@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Mon - Sat: 8:00 AM - 9:00 PM</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200 transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              <Twitter size={16} />
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="logo.jpg"
                className="mr-2 h-10 w-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-xl"
              />
              <div>
                <h1 className="text-xl font-bold">
                  <span className="text-blue-600">One</span>
                  <span className="text-orange-500">Hub</span>
                  <span></span>
                  <span className="text-gray-700"> Institute</span>
                </h1>
                <p className="text-xs text-gray-500 -mt-1">
                  Empowering Future Minds
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-1">
                <li>
                  <Link
                    to="/"
                    className={`block px-4 py-2 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors ${
                      location.pathname === "/"
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    to="/academic"
                    className={`flex items-center px-4 py-2 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors ${
                      location.pathname.includes("/academic")
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700"
                    }`}
                  >
                    Academic Coaching <ChevronDown size={16} className="ml-1" />
                  </Link>
                  <div className="absolute left-0 top-full mt-1 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64 z-50">
                    <div className="py-2">
                      <div className="px-4 py-2 text-sm font-medium text-gray-500 border-b">
                        Classes
                      </div>
                      <div className="grid grid-cols-2">
                        {[5, 6, 7, 8, 9, 10, 11, 12].map((classNum) => (
                          <Link
                            key={classNum}
                            to={`/academic/class-${classNum}`}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center"
                          >
                            Class {classNum}
                          </Link>
                        ))}
                      </div>
                      <div className="px-4 py-2 text-sm font-medium text-gray-500 border-b border-t">
                        Boards
                      </div>
                      <Link
                        to="/academic/cbse"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        CBSE
                      </Link>
                      <Link
                        to="/academic/icse"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        ICSE
                      </Link>
                      <Link
                        to="/academic/state-board"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        State Board
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="relative group">
                  <Link
                    to="/music"
                    className={`flex items-center px-4 py-2 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors ${
                      location.pathname.includes("/music")
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700"
                    }`}
                  >
                    Music Classes <ChevronDown size={16} className="ml-1" />
                  </Link>
                  <div className="absolute left-0 top-full mt-1 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64 z-50">
                    <div className="py-2">
                      <Link
                        to="/music/guitar"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Guitar
                      </Link>
                      <Link
                        to="/music/keyboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Keyboard
                      </Link>
                      <Link
                        to="/music/vocals"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Vocals
                      </Link>
                      <Link
                        to="/music/trinity"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Trinity Certifications
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="relative group">
                  <Link
                    to="/computer"
                    className={`flex items-center px-4 py-2 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors ${
                      location.pathname.includes("/computer")
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700"
                    }`}
                  >
                    Computer Training <ChevronDown size={16} className="ml-1" />
                  </Link>
                  <div className="absolute left-0 top-full mt-1 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64 z-50">
                    <div className="py-2">
                      <Link
                        to="/computer/basic"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Basic Computer Applications
                      </Link>
                      <Link
                        to="/computer/programming"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Programming Languages
                      </Link>
                      <Link
                        to="/computer/web"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Web Development
                      </Link>
                      <Link
                        to="/computer/app"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        App Development
                      </Link>
                      <Link
                        to="/computer/robotics"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Robotics
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`block px-4 py-2 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors ${
                      location.pathname === "/about"
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700"
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faculty"
                    className={`block px-4 py-2 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors ${
                      location.pathname === "/faculty"
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700"
                    }`}
                  >
                    Faculty
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`block px-4 py-2 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors ${
                      location.pathname === "/contact"
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/enroll"
                className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md shadow-md hover:shadow-lg transition-all"
              >
                Enroll Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <ul className="py-2">
              <li>
                <Link
                  to="/"
                  className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => toggleDropdown(1)}
                >
                  <span>Academic Coaching</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      activeDropdown === 1 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gray-50 py-2"
                  >
                    <div className="px-6 py-2 text-sm font-medium text-gray-500">
                      Classes
                    </div>
                    <div className="grid grid-cols-2">
                      {[5, 6, 7, 8, 9, 10, 11, 12].map((classNum) => (
                        <Link
                          key={classNum}
                          to={`/academic/class-${classNum}`}
                          className="px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          Class {classNum}
                        </Link>
                      ))}
                    </div>
                    <div className="px-6 py-2 text-sm font-medium text-gray-500">
                      Boards
                    </div>
                    <Link
                      to="/academic/cbse"
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      CBSE
                    </Link>
                    <Link
                      to="/academic/icse"
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      ICSE
                    </Link>
                    <Link
                      to="/academic/state-board"
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      State Board
                    </Link>
                  </motion.div>
                )}
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => toggleDropdown(2)}
                >
                  <span>Music Classes</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      activeDropdown === 2 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === 2 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gray-50 py-2"
                  >
                    <Link
                      to="/music/guitar"
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Guitar
                    </Link>
                    <Link
                      to="/music/keyboard"
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Keyboard
                    </Link>
                    <Link
                      to="/music/vocals"
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Vocals
                    </Link>
                    <Link
                      to="/music/trinity"
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Trinity Certifications
                    </Link>
                  </motion.div>
                )}
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => toggleDropdown(3)}
                >
                  <span>Computer Training</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      activeDropdown === 3 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === 3 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gray-50 py-2"
                  >
                    <Link
                      to="/computer/basic"
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Basic Computer Applications
                    </Link>
                    <Link
                      to="/computer/programming"
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Programming Languages
                    </Link>
                    <Link
                      to="/computer/web"
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Web Development
                    </Link>
                    <Link
                      to="/computer/app"
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      App Development
                    </Link>
                    <Link
                      to="/computer/robotics"
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Robotics
                    </Link>
                  </motion.div>
                )}
              </li>
              <li>
                <Link
                  to="/about"
                  className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faculty"
                  className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Faculty
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
              <li className="mt-2 px-6 py-3">
                <Link
                  to="/enroll"
                  className="block w-full py-2 text-center bg-orange-500 hover:bg-orange-600 text-white rounded-md shadow-md hover:shadow-lg transition-all"
                >
                  Enroll Now
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
