import { motion } from 'framer-motion';

export default function MovingPanelSection() {
  const logos = [
    '/logos/amd.png',
    '/logos/cisco.png',
    '/logos/dell.png',
    '/logos/hpe.png',
    '/logos/intel.png',
    '/logos/lenovo.png',
    '/logos/schneider.png',
  ];

  return (
    <section className="bg-contentBg py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-textLight text-sm mt-6">
          Seamless integrations with any data center hardware
        </p>

        {/* Scrolling Logos Panel */}
        <div className="overflow-hidden my-6">
          <motion.div
            className="flex space-x-12 w-max"
            initial={{ x: '0%' }}
            animate={{ x: '-50%' }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            }}
          >
            {logos.concat(logos).map((src, index) => (
              <img
                key={index}
                src={src}
                alt="partner logo"
                className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </motion.div>
        </div>

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
