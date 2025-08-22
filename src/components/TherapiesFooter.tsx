import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const TherapiesFooter: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/60 rounded-xl px-4 py-4 flex items-center justify-between">
          <p className="text-xs sm:text-sm text-gray-400">&copy; {new Date().getFullYear()} EIBM Terapias. Todos os direitos reservados.</p>
          <div className="flex items-center gap-3 sm:gap-4 text-gray-300">
            <a
              href="https://instagram.com/eibmterapias"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram eibmterapias"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              aria-label="Ir para página de Contatos"
              className="hover:text-white transition-colors"
              onClick={() => {
                try {
                  (window as any).navigateToPage?.('contatos');
                } catch (_) {
                  window.location.href = '/contatos';
                }
              }}
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TherapiesFooter;


