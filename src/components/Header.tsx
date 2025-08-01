import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <motion.button 
              onClick={() => handleNavigation('home')}
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogoEIBM className="h-7 xs:h-8 sm:h-9 lg:h-10" />
            </motion.button>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item.page)}
                  className="relative px-2 xl:px-3 py-2 text-sm xl:text-base text-gray-700 hover:text-blue-700 font-medium transition-colors rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-2 xl:left-3 right-2 xl:right-3 h-0.5 bg-blue-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button - Visible on mobile/tablet */}
            <motion.button
              className="xl:hidden p-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 xs:w-6 xs:h-6" /> : <Menu className="w-5 h-5 xs:w-6 xs:h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay and Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Navigation Sidebar */}
            <motion.div
              className="xl:hidden fixed top-0 right-0 h-full w-72 xs:w-80 sm:w-96 max-w-[85vw] bg-white shadow-2xl z-50 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-4 xs:p-6">
                {/* Mobile Header */}
                <div className="flex justify-between items-center mb-6 xs:mb-8 pb-4 border-b border-gray-200">
                  <motion.button
                    onClick={() => handleNavigation('home')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                  >
                    <LogoEIBM className="h-7 xs:h-8" />
                  </motion.button>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 xs:w-6 xs:h-6" />
                  </button>
                </div>
                
                {/* Mobile Navigation Links */}
                <nav className="space-y-1 xs:space-y-2">
                  <motion.button 
                    onClick={() => handleNavigation('home')}
                    className="flex items-center w-full px-3 xs:px-4 py-3 text-left text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg font-medium transition-colors text-sm xs:text-base"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Heart className="w-4 h-4 xs:w-5 xs:h-5 mr-2 xs:mr-3 text-blue-600 flex-shrink-0" />
                    <span>Início</span>
                  </motion.button>
                  
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavigation(item.page)}
                      className="flex items-center w-full px-3 xs:px-4 py-3 text-left text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg font-medium transition-colors text-sm xs:text-base"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + 2) * 0.1 }}
                    >
                      <span className="break-words">{item.name}</span>
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;