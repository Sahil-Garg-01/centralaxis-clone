
import { motion } from 'framer-motion';

export default function ContentSection({ title, subtitle, features, image, imageAlt, builtForAI }) {
  return (
    <section className="bg-contentBg py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cardBg rounded-lg shadow-lg p-8 border border-gray-800 h-[375px] flex flex-col lg:flex-row items-center">
          <div
            className="lg:w-1/2 mb-8 lg:mb-0 h-full overflow-y-auto pr-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {builtForAI && (
              <p className="text-white text-sm mb-2">Built for AI</p>
            )}
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 line-clamp-2 text-white">{title}</h2>
            <p className="text-white mb-6 line-clamp-3">{subtitle}</p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-white mr-2">✔</span>
                  <span className="text-white line-clamp-2">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="lg:w-1/2 aspect-[3/2] flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <video
              src={image}
              title={imageAlt}
              className="w-full h-[350px] object-cover rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
