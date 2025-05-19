
export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Image with Overlay */}
        <div className="relative text-center mb-20 h-full rounded-md overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("https://www.centralaxis.com/background.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.25,
              zIndex: 0,
            }}
          />
          {/* Content */}
          <div className="relative z-10 py-8 px-4">
            <h2 className="text-3xl font-bold font-poppins mb-4">Book a Demo</h2>
            <p className="text-textLight mb-6">
              See how CentralAxis can revolutionize your data center operations.
            </p>
            <button className="bg-white text-primary px-6 py-3 text-lg font-poppins rounded-md hover:scale-105 transition-transform duration-300">
              Schedule Now
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <div className="inline-block bg-gray-900 rounded-full px-3 py-0">
            <p className="text-gray-400 font-semibold text-lg mb-0">FAQs</p>
          </div>
          <h2 className="text-3xl font-bold font-poppins mb-4 mt-4">Frequently asked questions</h2>
          <p className="text-gray-400 text-xl mb-6">Find answers to common questions about our solutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-6">
            <div className="bg-primary p-10 rounded-lg">
              <p className="text-white text-left font-semibold text-lg">
                Are these solutions applicable to me if I am operating a co-location?
              </p>
              <p className="text-gray-400 text-left text-sm mt-2">
                Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively.
              </p>
            </div>
            <div className="bg-primary p-10 rounded-lg">
              <p className="text-white text-left font-semibold text-lg">
                How do you ensure data privacy and security?
              </p>
              <p className="text-gray-400 text-left text-sm mt-2">
                We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.
              </p>
            </div>
            <div className="bg-primary p-10 rounded-lg">
              <p className="text-white text-left  font-semibold text-lg">
                How does pricing work?
              </p>
              <p className="text-gray-400 text-left text-sm mt-2">
                Depending on your requirements, we offer flexible pricing models.
              </p>
            </div>
            <div className="bg-primary p-10 rounded-lg">
              <p className="text-white text-left  font-semibold text-lg">
                Do you provide ongoing support and maintenance for your solutions?
              </p>
              <p className="text-gray-400 text-left  text-sm mt-2">
                Absolutely - we offer comprehensive support and maintenance as well as customization for your needs.
              </p>
            </div>
            <div className="bg-primary p-10 rounded-lg">
              <p className="text-white text-left  font-semibold text-lg">
                How do I get started?
              </p>
              <p className="text-gray-400 text-left  text-sm mt-2">
                Set up a demo and we'll guide you through our offerings and start a trial!
              </p>
            </div>
          </div>
          <div className="flex items-center mt-8">
          <img
            src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=48&q=75"
            alt="CentralAxis Logo"
            className="h-8 w-auto mr-2"
          />
          <p>Copyright © {new Date().getFullYear()}</p>
        </div>
          
        </div>
      </div>
    </footer>
  );
}
