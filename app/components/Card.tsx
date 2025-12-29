import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Card({ children, className = '', delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: 'easeInOut' }}
      whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(29, 185, 84, 0.15)' }}
      className={`bg-offwhite/5 backdrop-blur-sm border border-offwhite/10 rounded-2xl p-8 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
