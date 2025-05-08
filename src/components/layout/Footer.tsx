import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-4">
              <div className="mr-2 h-10 w-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-xl">OH</div>
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-blue-400">One</span>
                  <span className="text-orange-400">Hub</span>
                  <span className="text-white"> Institute</span>
                </h3>
                <p className="text-sm text-gray-400">One Destination Infinite Possibilities</p>
              </div>
            </div>
            <p className="mb-4">
              OneHub Institute is Siliguri's leading coaching and skill development center offering expert-led classes across all subjects and boards, along with certified music courses and practical computer training.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 w-9 h-9 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 w-9 h-9 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 w-9 h-9 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 w-9 h-9 rounded-full flex items-center justify-center transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-orange-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Our Courses
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="hover:text-orange-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Faculty Members
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-orange-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Testimonials
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-orange-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-orange-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Blog & News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Our Programs
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/academic/cbse" className="hover:text-orange-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> CBSE Coaching
                </Link>
              </li>
              <li>
                <Link to="/academic/icse" className="hover:text-orange-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> ICSE Coaching
                </Link>
              </li>
              <li>
                <Link to="/academic/state-board" className="hover:text-orange-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> State Board Coaching
                </Link>
              </li>
              <li>
                <Link to="/music/guitar" className="hover:text-orange-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Music Classes
                </Link>
              </li>
              <li>
                <Link to="/computer/programming" className="hover:text-orange-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Computer Training
                </Link>
              </li>
              <li>
                <Link to="/courses/special" className="hover:text-orange-400 transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Special Programs
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-orange-400" />
                <span>Nivedita Road By Lane, Pradhan Nagar, Siliguri 734003</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-orange-400" />
                <span>97496 55934 / 97496 28507</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-orange-400" />
                <span>onehubinstitute@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-3 text-orange-400" />
                <span>Mon - Sat: 7:00 AM - 9:00 PM</span>
              </li>
            </ul>
            
            {/* Newsletter Subscription */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 text-gray-900 bg-gray-100 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-r-md transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} OneHub Institute. All Rights Reserved.</p>
          <p className="mt-2">
            <Link to="/privacy-policy" className="hover:text-orange-400 transition-colors mx-2">Privacy Policy</Link> | 
            <Link to="/terms-of-service" className="hover:text-orange-400 transition-colors mx-2">Terms of Service</Link> | 
            <Link to="/sitemap" className="hover:text-orange-400 transition-colors mx-2">Sitemap</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;