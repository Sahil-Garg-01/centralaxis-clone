
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=48&q=75"
            alt="CentralAxis Logo"
            className="h-8 w-auto mr-2"
          />
          <span className="text-xl font-bold font-poppins">CentralAxis</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <div className="relative">
            <a
              href="#"
              className="hover:text-textLight transition-colors duration-300 flex items-center"
              onClick={toggleDropdown}
            >
              Data Center Infrastructure Management <span className="ml-1">▼</span>
            </a>
            {dropdownOpen && (
              <div className="absolute bg-primary text-white mt-2 rounded-md shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-secondary">Monitoring</a>
                <a href="#" className="block px-4 py-2 hover:bg-secondary">Optimization</a>
              </div>
            )}
          </div>
          <a href="#" className="hover:text-textLight transition-colors duration-300 flex items-center">
            Intelligent Solutions <span className="ml-1">▼</span>
          </a>
          <a href="#" className="hover:text-textLight transition-colors duration-300 flex items-center">
            Data Center Compliance <span className="ml-1">▼</span>
          </a>
          <a href="#" className="hover:text-textLight transition-colors duration-300 flex items-center">
            Sustainability Blog <span className="ml-1">▼</span>
          </a>
        </div>
        <button className="md:hidden text-2xl" onClick={toggleMenu} aria-label="Toggle Menu">
          ☰
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-primary px-4 py-2">
          <a href="#" className="block py-2 hover:text-textLight transition-colors duration-300">
            Data Center Infrastructure Management
          </a>
          <a href="#" className="block py-2 hover:text-textLight transition-colors duration-300">
            Intelligent Solutions
          </a>
          <a href="#" className="block py-2 hover:text-textLight transition-colors duration-300">
            Data Center Compliance
          </a>
          <a href="#" className="block py-2 hover:text-textLight transition-colors duration-300">
            Sustainability Blog
          </a>
        </div>
      )}
    </header>
  );
}
