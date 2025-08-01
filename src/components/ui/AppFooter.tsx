import React from 'react';

export const AppFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-left">
        <p className="text-gray-400">&copy; 2025 EIBM - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

// Alias para compatibilidade
export const Footer = AppFooter;