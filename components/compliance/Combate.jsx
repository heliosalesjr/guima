import React from "react";
import { motion } from "framer-motion";
import { Shield, Target, Zap } from "lucide-react";

const Combate = () => {
  const cards = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Card 1",
      text: "Texto do card 1.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Card 2",
      text: "Texto do card 2.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Card 3",
      text: "Texto do card 3.",
    },
  ];

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold mb-4">Combate</h2>
      <h3 className="text-lg font-semibold mb-6">Subtítulo</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 border rounded-lg shadow-sm"
          >
            <div className="flex items-center mb-4">
              {card.icon}
              <h4 className="text-xl font-semibold ml-2">{card.title}</h4>
            </div>
            <p className="text-gray-600">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Combate;