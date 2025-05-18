
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary to-secondary text-white py-20 flex items-center justify-center text-center">
      <motion.div
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
          Data Center Management
          <br />
          <span >Software</span>
        </h1>
        <p className="text-textLight text-lg mb-4">
          Increase uptime, reduce costs, automate operations, and stay compliant.
          <br />
          Built for colocations, data centers, and cloud providers.
        </p>
        <button className="bg-accent text-white px-6 py-3 text-lg font-poppins rounded-md hover:scale-105 transition-transform duration-300">
          Request Demo
        </button>
        
      </motion.div>
    </section>
  );
}
