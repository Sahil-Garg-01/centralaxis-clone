import React from 'react';

const MiddleComponent = () => {
  return (
    <section className="py-16 px-4">
      {/* Top Purple Gradient Section */}
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white max-w-7xl mx-auto rounded-lg px-8 py-10 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            We've Built the Future of Data Centers
          </h2>
          <p className="text-gray-300">Contact our team for a demo</p>
        </div>
        <div className="mt-6 md:mt-0 flex flex-col items-end">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full mb-2 transition-colors duration-300">
            Set Up a Time
          </button>
          <button className="bg-gray-900 hover:bg-gray-600 text-white px-6 py-2 rounded-full mb-2 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Dynamic Resource Management Section */}
      <div className="max-w-6xl mx-auto mt-16 px-4 text-white grid md:grid-cols-2 gap-10 items-start">
        {/* Left Column: Text Content */}
        <div className="max-w-2xl">
          <div className="inline-block  bg-gray-900 rounded-full px-3 py-0">
            <p className="text-gray-400 font-semibold text-lg mb-0">Built for Scale</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Dynamic Resource Management</h2>
          <p className="text-gray-400 mt-4">
            Seamlessly expand from racks to data centers. Our system grows with you, automatically managing
            resources across your entire infrastructure.
          </p>
        </div>

        {/* Right Column: Feature Cards */}
        <div className="space-y-6">
          {/* Card 1 */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">📩 Resource Management</h3>
            <p className="text-gray-400 text-sm">
              See all of your resources in one place, update issues, and dynamically plan your resources.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">⚡ Deployment Automation</h3>
            <p className="text-gray-400 text-sm">
              From design, sourcing, supply, manufacturing, and deployment – our system automates the entire process.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">📶 Networking</h3>
            <p className="text-gray-400 text-sm">
              Ensure that your networking infrastructure is always in place and ready to scale with your deployments.
            </p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">⚡ Firmware Versioning</h3>
            <p className="text-gray-400 text-sm">
              Ensure that your firmware is always up to date and secure with our automated versioning system.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">📩 Digital Twins</h3>
            <p className="text-gray-400 text-sm">
              Plan capacity intelligently with our digital twin technology.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MiddleComponent;
