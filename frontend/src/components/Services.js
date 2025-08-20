import React from 'react';
import { motion } from 'framer-motion';

// Updated services array
const services = [
  { name: "Home Loan", description: "Secure the keys to your dream home with the best possible mortgage rates from our network of banks." },
  { name: "Loan Against Property", description: "Leverage the value of your existing property for your personal or business financial needs." },
  { name: "Personal Loan", description: "Flexible financing for any personal goal, from weddings and travel to unexpected expenses." },
  { name: "Business Loan", description: "Fuel your company's expansion, purchase inventory, or manage operations with tailored capital." },
  { name: "MSME Loan", description: "Specialized funding solutions designed to empower Micro, Small, and Medium Enterprises." },
  { name: "Working Capital", description: "Ensure your day-to-day business operations run smoothly with accessible working capital loans." },
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Our Loan Services</h1>
          <p className="text-gray-600 mt-2">Comprehensive solutions tailored to your unique financial requirements.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.name} 
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#005A9C] mb-4">{service.name}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;