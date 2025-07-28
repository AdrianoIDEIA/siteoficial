import React from 'react';
import { motion } from 'framer-motion';
import LogoEIBM from './LogoEIBM';

interface FooterProps {
  specialtyName: string;
  specialtyDescription: string;
  specialtyIcon: React.ReactNode;
  areas: string[];
  treatments: string[];
  aboutText: string;
}

const Footer: React.FC<FooterProps> = ({
  specialtyName,
  specialtyDescription,
  specialtyIcon,
  areas,
  treatments,
  aboutText
}) => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <LogoEIBM className="h-8 w-auto" />
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-1.5 sm:p-2">
                {specialtyIcon}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold">{specialtyName}</h3>
                <p className="text-xs sm:text-sm text-gray-400">{specialtyDescription}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
              Especialistas com abordagem científica e humanizada para todas as idades.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm sm:text-base font-bold mb-4 sm:mb-6">Áreas de Atuação</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-xs sm:text-sm">
              {areas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm sm:text-base font-bold mb-4 sm:mb-6">Distúrbios Tratados</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-xs sm:text-sm">
              {treatments.map((treatment, index) => (
                <li key={index}>{treatment}</li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-sm sm:text-base font-bold mb-4 sm:mb-6">Sobre a EIBM</h4>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              {aboutText}
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm">&copy; 2025 EIBM {specialtyName} - Todos os direitos reservados</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;