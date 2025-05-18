
export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-poppins mb-4">Book a Demo</h2>
          <p className="text-textLight mb-6">
            See how CentralAxis can revolutionize your data center operations.
          </p>
          <button className="bg-white text-primary px-6 py-3 text-lg font-poppins rounded-md hover:scale-105 transition-transform duration-300">
            Schedule Now
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold font-poppins mb-4">Frequently Asked Questions</h2>
          <p className="text-textLight mb-6">Find answers to common questions about our solutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <p>Are these solutions applicable to me if I am operating a co-location?</p>
            <p>How do you ensure data privacy and security?</p>
            <p>How does pricing work?</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
