import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-2">We're here to help. Reach out to us with any questions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32" id="message" placeholder="Your message..."></textarea>
              </div>
              <button className="bg-[#005A9C] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-opacity-90 transition duration-300" type="button">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Information</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Address:</strong> XXXXX, XXXXX, XXXXX</p>
              <p><strong>Phone:</strong> (XXX) XXX-XXXX</p>
              <p><strong>Email:</strong> contact@trueloans.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;