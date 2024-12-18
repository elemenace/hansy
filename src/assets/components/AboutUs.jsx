import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <p className="text-center text-lg mb-8">
          Learn more about our mission, values, and the team behind our success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="/random1.jpg"
              alt="Our Mission"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Our Mission
            </h3>
            <p className="text-center">
              We strive to provide the best services and solutions to meet our
              customers' needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="/random2.jpg"
              alt="Our Vision"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Our Vision
            </h3>
            <p className="text-center">
              To be a leader in our industry and set the standard for
              excellence.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="/random3.jpg"
              alt="Our Team"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">Our Team</h3>
            <p className="text-center">
              A group of passionate individuals committed to achieving great
              results.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="/random6.jpg"
              alt="Innovation"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Innovation
            </h3>
            <p className="text-center">
              We embrace technology to innovate and create solutions for modern
              challenges.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="/random4.jpg"
              alt="Customer Focus"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Customer Focus
            </h3>
            <p className="text-center">
              Prioritizing our customers' needs and delivering exceptional
              service.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img
              src="/random5.jpg"
              alt="Integrity"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Integrity
            </h3>
            <p className="text-center">
              Upholding honesty, transparency, and ethics in everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
