import React, { useState } from "react";
import { motion } from "framer-motion";

const Regras = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      image: "https://via.placeholder.com/150",
      title: "Item 1",
      text: "Texto do item 1.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Item 2",
      text: "Texto do item 2.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Item 3",
      text: "Texto do item 3.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Item 4",
      text: "Texto do item 4.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Item 5",
      text: "Texto do item 5.",
    },
  ];

  return (
    <div className="w-full p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Regras</h2>
      <h3 className="text-lg font-semibold mb-4">Subtítulo</h3>
      <p className="text-gray-600 mb-8">
        Este é um parágrafo explicativo sobre as regras.
      </p>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          style={{ width: `${items.length * 100}%`, x: `-${activeIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 p-4">
              <img src={item.image} alt={item.title} className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              activeIndex === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Regras;