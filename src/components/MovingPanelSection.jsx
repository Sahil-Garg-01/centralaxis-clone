
import { motion } from 'framer-motion';

export default function MovingPanelSection() {
  return (
    <section className="bg-contentBg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-textLight text-sm mt-6">
            Seamless integrations with any data center hardware
                </p>
                
        {/* Moving Panel */}
        <motion.div
          className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg mb-6"
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 10,
            ease: 'linear',
          }}
        >
          <p className="text-lg md:text-xl font-poppins">
            Empowering the Future of Data Centers with AI
          </p>
        </motion.div>

        {/* Static Text */}
        <div className="space-y-4">
          <p className="text-white text-sm uppercase tracking-wider">
            Built for AI
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white">
            Modernizing the Digital Backbone
          </h2>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
            Streamline operations and drive innovation with intelligent automation.
          </p>
        </div>
      </div>
    </section>
  );
}
