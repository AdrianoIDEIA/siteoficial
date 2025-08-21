import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface StandardHeaderProps {
  onNavigateHome?: () => void;
  onNavigateToPage?: (page: string) => void;
  currentPage?: string;
}

export const StandardHeader: React.FC<StandardHeaderProps> = ({
  onNavigateHome,
  onNavigateToPage,
  currentPage
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', page: 'home' },
    { label: 'Terapias', page: 'terapias' },
    { label: 'Especialidades', page: 'clinica' },
    { label: 'IDEA', page: 'ideia' },
    { label: 'GETTON', page: 'gatton' },
    { label: 'Contato', page: 'contatos' }
  ];

  const handleMenuClick = (page: string) => {
    if (page === 'home') {
      onNavigateHome?.();
    } else {
      onNavigateToPage?.(page);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={() => handleMenuClick('home')}
          >
            <img src="/logo_eibm_clinica_escrito.svg" alt="EIBM Clínica" className="h-10 w-auto" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.page}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleMenuClick(item.page)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.page
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-blue-600 hover:text-blue-800 cursor-pointer'
                } py-2`}

              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden bg-white border-t border-gray-200"
        >
          <div className="py-4 space-y-2">
            {menuItems.map((item) => (
              <motion.button
                key={item.page}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleMenuClick(item.page)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.page
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-blue-600 hover:text-blue-800 hover:bg-blue-50 cursor-pointer'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};