import React from "react";

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-center text-lg mb-8">
          We'd love to hear from you! Fill out the form below and we'll get in
          touch.
        </p>

        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message"
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
