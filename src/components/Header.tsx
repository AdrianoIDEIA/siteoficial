import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Menu, X } from 'lucide-react';
import LogoEIBM from './LogoEIBM';

interface HeaderProps {
  onNavigateHome?: () => void;
  onNavigateToPage?: (page: string) => void;
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome, onNavigateToPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Terapia Ocupacional', page: 'terapia-ocupacional' },
    { name: 'Fonoaudiologia', page: 'fonoaudiologia' },
    { name: 'Psicologia', page: 'psicologia' },
    { name: 'Psicopedagogia', page: 'psicopedagogia' },
    { name: 'IDEIA', page: 'ideia' },
    { name: 'Contacto', page: 'contacto' }
  ];

  const handleNavigation = (page: string) => {
    if (page === 'home') {
      if (onNavigateHome) {
        onNavigateHome();
      }
    } else if (onNavigateToPage) {
      onNavigateToPage(page);
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full bg-white shadow-md rounded-b-xl z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.button 
          onClick={() => handleNavigation('home')}
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <LogoEIBM className="h-10" />
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavigation(item.page)}
              className="text-black hover:text-blue-700 font-medium transition-colors relative"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 hover:text-orange-500 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 p-5"
        initial={{ x: '-100%' }}
        animate={{ x: mobileMenuOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-6">
          <LogoEIBM className="h-8" />
          <button onClick={() => setMobileMenuOpen(false)}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <ul className="space-y-4">
          <motion.li>
            <button 
              onClick={() => handleNavigation('home')}
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left"
            >
              Início
            </button>
          </motion.li>
          {navItems.map((item, index) => (
            <motion.li key={item.name}>
              <button 
                onClick={() => handleNavigation(item.page)}
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left"
              >
                {item.name}
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Header;