import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href="tel:+919749655934"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
        title="Call us"
      >
        <Phone size={24} />
      </a>
      <a
        href="https://wa.me/919749655934"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
        title="WhatsApp us"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
};

export default FloatingContact;