import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { X } from 'lucide-react';

interface HeroCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  modalContent: React.ReactNode;
  index: number;
}

export const HeroCard = ({ icon, title, description, modalContent, index }: HeroCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="group cursor-pointer"
        onClick={openModal}
      >
        <Card className="p-8 h-full bg-white/80 backdrop-blur-sm border-orange-200 hover:border-orange-300 transition-all duration-300 shadow-lg hover:shadow-xl">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
            <div className="mt-4 text-orange-600 font-medium group-hover:text-orange-700 transition-colors">
              Saiba mais →
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white">
                    {icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="space-y-4">
                {modalContent}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};