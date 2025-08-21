import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

interface MenuItem {
  label: string;
  id?: string;
  href?: string;
  onClick?: () => void;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  logoText?: string;
  logoSrc?: string;
  menuItems?: MenuItem[];
  onLogoClick?: () => void;
  showBackButton?: boolean;
  onBackClick?: () => void;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  logoText = "EIBM",
  logoSrc,
  menuItems = [],
  onLogoClick,
  showBackButton = false,
  onBackClick,
  className
}: PageHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuItemClick = (item: MenuItem) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.href) {
      window.location.href = item.href;
    } else if (item.id) {
      const element = document.getElementById(item.id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header 
      className={cn(
        `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'header-glass' : 'bg-transparent'
        }`,
        className
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 30 
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-primary via-primary-medium to-primary-light rounded-xl flex items-center justify-center shadow-lg"
              whileHover={{ 
                rotate: 360,
                boxShadow: "0 0 20px rgba(25, 81, 132, 0.4)"
              }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white font-bold text-lg select-none">{logoText}</span>
            </motion.div>
            <div className="hidden md:block">
              <motion.div 
                className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {title}
              </motion.div>
              {subtitle && (
                <motion.div 
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {subtitle}
                </motion.div>
              )}
            </div>
          </motion.button>

          {/* Back Button */}
          {showBackButton && onBackClick && (
            <motion.button
              onClick={onBackClick}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ x: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Voltar</span>
            </motion.button>
          )}

          {/* Desktop Navigation */}
          {menuItems.length > 0 && (
            <nav className="hidden md:flex">
              <ul className="flex items-center space-x-8">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.id || item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <motion.button
                      onClick={() => handleMenuItemClick(item)}
                      className="relative text-foreground hover:text-primary transition-colors duration-300 cursor-pointer group"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      {item.label}
                      <motion.div
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-300"
                        whileHover={{ width: "100%" }}
                      />
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {menuItems.length > 0 && (
            <motion.button 
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'glass' : 'glass-hover'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </motion.svg>
            </motion.button>
          )}
        </div>

        {/* Mobile Navigation */}
        {menuItems.length > 0 && (
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                className="md:hidden mt-4 glass rounded-xl p-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="space-y-3">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.id || item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <motion.button
                        onClick={() => handleMenuItemClick(item)}
                        className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                      </motion.button>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        )}
      </div>
    </motion.header>
  );
}