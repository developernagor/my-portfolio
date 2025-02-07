import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";


function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="container mx-auto px-8 py-16" id="contact-me">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">📩 Get in Touch</h2>

      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-xl p-8">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800">Let's Talk</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                placeholder="Write your message..."
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-4 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
            >
              Send Message 🚀
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-xl p-8">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800">Contact Information</h3>
          <div className="space-y-6 text-gray-700">
            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm">
              <FaLocationDot className="text-blue-600 text-2xl" />
              <p>Pabna, Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm">
              <MdEmail className="text-blue-600 text-2xl" />
              <p>developernagor@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm">
              <IoCall className="text-blue-600 text-2xl" />
              <p>+8801575439591</p>
            </div>
            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm">
  <FaWhatsapp className="text-green-600 text-2xl" />
  <p>+8801575439591</p>  {/* Change this to your WhatsApp number */}
</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
