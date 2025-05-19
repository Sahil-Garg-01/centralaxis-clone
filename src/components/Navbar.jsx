import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=48&q=75"
            alt="CentralAxis Logo"
            className="h-8 w-auto mr-2"
          />
          <span className="text-xl font-bold font-poppins">CentralAxis</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-sm">
          {[
            {
              label: 'Data Center Infrastructure Management',
              items: [
                'Monitoring Devices',
                'Asset Tracking',
                'Network Management',
                'Change Management',
                'Colocation Management',
                'Data Center Planner',
                'Firmware Management',
                'IP Address Management',
                'Customer Portal',
                'Custom Insights',
                'Custom Data Center Solutions',
              ],
            },
            {
              label: 'Intelligent Solutions',
              items: ['Digital Twins', 'Smart Power Mapping', 'Predictive Failure and Alerting','Smart Control Systems','Automated Discovery'],
            },
            {
              label: 'Data Center Compliance',
              items: ['DCOI Complaince', '(EU) 2023/1791','EN 505600','LEED Certification','ISO/IEC 30134-2','(EPA) ENERGY STAR','European Commission Joint Research Centre(JRC)'],
            },
            {
              label: 'Sustainability Blog',
              items: ['Energy Efficiency', 'Standard Energy Map','Environmental Product Declaration','Renewable Integration','Power Resource Management'],
            },
          ].map((menu, idx) => (
            <div key={idx} className="relative group">
              <span className="cursor-pointer flex items-center hover:text-gray-300">
                {menu.label} <span className="ml-1">▼</span>
              </span>
              <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-[#1a1a1a] text-white rounded-md shadow-lg py-2 w-64 border border-gray-700 z-50">
                {menu.items.map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block px-4 py-2 hover:text-gray-400"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-2xl" onClick={toggleMenu} aria-label="Toggle Menu">
          ☰
        </button>
      </nav>

      {/* Mobile menu content */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 py-2 text-sm space-y-2">
          <a href="#" className="block py-2 hover:text-textLight">
            Data Center Infrastructure Management
          </a>
          <a href="#" className="block py-2 hover:text-textLight">
            Intelligent Solutions
          </a>
          <a href="#" className="block py-2 hover:text-textLight">
            Data Center Compliance
          </a>
          <a href="#" className="block py-2 hover:text-textLight">
            Sustainability Blog
          </a>
        </div>
      )}
    </header>
  );
}
