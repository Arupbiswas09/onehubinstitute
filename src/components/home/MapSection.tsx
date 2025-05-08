import React from 'react';
import { MapPin } from 'lucide-react';

const MapSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Our Location
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Find Us Here</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Visit our institute at Nivedita Road By Lane, Near Margaret School, Pradhan Nagar, Siliguri 734003
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-lg">
          {/* <iframe  */}
            onehubinstitute<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14253.500043426562!2d88.40007879240027!3d26.732406470706763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441ff64bdd075%3A0x5d824743bdd1a425!2sOnehub%20Institute!5e0!3m2!1sen!2sin!4v1746699640837!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;