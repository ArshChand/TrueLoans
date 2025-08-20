import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

// Data for testimonials
const testimonials = [
  {id: 1,name: "Sarah J.",rating: 5, quote: "TrueLoans made the process so simple and transparent. I got my funds faster than I ever expected! From the very first interaction, their team guided me step by step, making sure I understood every detail of the loan process."},
  {id: 2,name: "Michael B.",rating: 5,quote: "The customer service was outstanding. They answered all my questions and found the perfect loan for me. I was initially overwhelmed by the number of loan options out there, but the team at TrueLoans took the time to really understand my financial situation. " },
  {id: 3,name: "Emily K.",rating: 4,quote: "I was hesitant at first, but TrueLoans' professionalism and clear terms put me at ease. Highly recommend! I’ve always been skeptical of loan companies because of hidden fees and confusing terms, but with TrueLoans, everything was laid out in simple, straightforward language." },
  {id: 4,name: "David L.",rating: 5,quote: "A fantastic experience from start to finish. I wouldn't go anywhere else for my financial needs. From the moment I filled out my application, the process was smooth and efficient. The platform was user-friendly, the staff was incredibly attentive, and I always felt like my needs were the top priority."},
];
// Data for stats cards
const stats = [
  { id: 1, name: 'Happy Customers', value: '1,200+' },
  { id: 2, name: 'Loans Funded', value: '$50M+' },
  { id: 3, name: 'Years of Experience', value: '10+' },
];

const Home = () => {
  // State to track the current active testimonial index
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect to handle the automatic 3-second cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">
            One Application. Many Banks. The Best Rate.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We compare offers from all government, private, and MNC banks to find you the lowest interest rates and charges.
          </p>
          <button className="mt-8 px-8 py-3 bg-[#005A9C] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
            Find My Best Loan
          </button>
        </div>
      </div>

      {/* Stats Section with Animations */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Our Proven Track Record</h2>
            <p className="text-gray-600 mt-2">Trust and transparency are at the core of what we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="bg-gray-50 p-8 rounded-xl shadow-lg text-center transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-bold text-[#005A9C]">{stat.value}</p>
                <p className="mt-2 text-xl font-semibold text-gray-700">{stat.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Slider Section (Lighter Colors) */}
      <div className="bg-gray-100 py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            
            {/* Left 1/3: Static Description */}
            <div className="md:pr-8 text-gray-700">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
              <p>Hear what others are saying about their experience with TrueLoans.</p>
            </div>

            {/* Right 2/3: Animated Slider */}
            {/* UPDATED: Added px-10 to create space for the peek-out effect */}
            <div className="md:col-span-2 relative h-64 px-10">
              {testimonials.map((testimonial, index) => {
                let position = "hidden";
                if (index === activeIndex) {
                  position = "front";
                } else if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) {
                  position = "exit";
                } else if (index === (activeIndex + 1) % testimonials.length) {
                  position = "back";
                }

                return (
                  <motion.div
                    key={testimonial.id}
                    className="absolute w-5/6 h-full p-8 rounded-lg bg-white shadow-xl border border-gray-200 flex flex-col justify-between"
                    initial="hidden"
                    animate={position}
                    variants={{
                      front: { x: -80, scale: 0.9, opacity: 1, zIndex: 3 },
                      back: { x: 180, scale: 0.7, opacity: 0.7, zIndex: 2 },
                      exit: { x: -150, scale: 0.7, opacity: 0, zIndex: 1 },
                      hidden: { x: 100, scale: 0.4, opacity: 0, zIndex: 1 },
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    <p className="italic text-lg text-gray-700">"{testimonial.quote}"</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-[#005A9C]">- {testimonial.name}</p>
                      <div className="flex space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;