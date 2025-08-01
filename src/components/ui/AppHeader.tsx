import React from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../constants/modalData';

interface HeaderProps {
  mobileMenuOpen: boolean;
  onMobileMenuToggle: (e: React.MouseEvent) => void;
  onMobileMenuClose: (e: React.MouseEvent) => void;
  onMobileMenuClick: (e: React.MouseEvent) => void;
  onNavigateToPage?: (page: string) => void;
}

export const AppHeader: React.FC<HeaderProps> = ({
  mobileMenuOpen,
  onMobileMenuToggle,
  onMobileMenuClose,
  onMobileMenuClick,
  onNavigateToPage
}) => {
  
  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href === '/terapias' && onNavigateToPage) {
      onNavigateToPage('terapias');
    } else {
      // Para outros links, usar navegação normal
      window.location.href = href;
    }
  };
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 2k:px-6 4k:px-8 py-3 2k:py-4 4k:py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="index.html">
                <div className="h-12 md:h-16 2k:h-20 4k:h-24 w-32 2k:w-40 4k:w-48 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold 2k:text-lg 4k:text-xl">EIBM</span>
                </div>
              </a>
            </div>
            
            {/* Menu Desktop - Aparece em telas a partir de 578px (xs:) incluindo 2K e 4K */}
            <nav className="hidden xs:block">
              <ul className="flex space-x-6 2k:space-x-8 4k:space-x-12">
                {NAVIGATION_LINKS.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-blue-700 hover:text-blue-900 font-medium transition-colors duration-200 2k:text-lg 4k:text-xl"
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Botão do Menu Mobile - Aparece em telas menores que xs (menos que 578px) */}
            <div className="xs:hidden">
              <button 
                id="mobile-menu-button"
                onClick={onMobileMenuToggle}
                className="text-blue-700 focus:outline-none p-2 2k:p-3 4k:p-4 rounded-md hover:bg-gray-100 transition-colors duration-200"
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 2k:w-8 2k:h-8 4k:w-10 4k:h-10" />
                ) : (
                  <Menu className="w-6 h-6 2k:w-8 2k:h-8 4k:w-10 4k:h-10" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay de fundo - Só aparece quando menu mobile está aberto em telas menores que xs e quando explicitamente aberto */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[80] xs:hidden transition-opacity duration-300 ease-in-out"
          style={{
            opacity: mobileMenuOpen ? 0.5 : 0,
            visibility: mobileMenuOpen ? 'visible' : 'hidden'
          }}
          onClick={onMobileMenuClose}
        />
      )}

      {/* Painel do Menu Mobile - Só aparece em telas menores que xs e quando explicitamente aberto */}
      <div 
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-72 2k:w-80 4k:w-96 bg-white shadow-lg p-6 2k:p-8 4k:p-10 transform transition-all duration-300 ease-in-out z-[90] xs:hidden ${
          mobileMenuOpen 
            ? 'translate-x-0 opacity-100 visible' 
            : 'translate-x-full opacity-0 invisible'
        }`}
        style={{
          display: mobileMenuOpen ? 'block' : 'none'
        }}
        onClick={onMobileMenuClick}
      >
        {/* Botão de Fechar */}
        <div className="flex justify-end mb-8 2k:mb-10 4k:mb-12">
          <button 
            onClick={onMobileMenuClose}
            className="text-gray-600 hover:text-blue-700 p-2 2k:p-3 4k:p-4 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Fechar menu mobile"
          >
            <X className="w-8 h-8 2k:w-10 2k:h-10 4k:w-12 4k:h-12" />
          </button>
        </div>
        
        {/* Links do Menu */}
        <nav>
          <ul className="space-y-6 2k:space-y-8 4k:space-y-10">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="block text-blue-700 hover:text-blue-900 font-medium text-lg 2k:text-xl 4k:text-2xl py-2 2k:py-3 4k:py-4 px-4 2k:px-6 4k:px-8 rounded-md hover:bg-blue-50 transition-colors"
                  onClick={(e) => {
                    handleLinkClick(e, link.href);
                    onMobileMenuClose(e); // Fecha o menu após clicar em um link
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};