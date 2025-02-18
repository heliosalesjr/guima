"use client";

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FloatingWhatsAppButton() {
  const whatsappNumber = "+5511961725623";
  
  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-8 right-8 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Contact us on WhatsApp"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop"
      }}
    >
      <FaWhatsapp size={32} color="white" />
    </motion.button>
  );
}
