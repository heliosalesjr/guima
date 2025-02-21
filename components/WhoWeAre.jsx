"use client";
import React from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

import solarImage from "../public/img/edmar.png"; 

const WhoWeAre = () => {
  return (
    <div className="bg-slate-100" >
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch max-w-6xl mx-auto min-h-[80vh] py-20 px-6 gap-12">
        {/* Coluna Direita */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[500px] lg:h-full rounded-2xl overflow-hidden md:max-w-[400px] sm:max-w-[400px]">
            <Image
              src={solarImage}
              alt="Man holding solar panel"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Coluna Esquerda */}
        <motion.div
          className="lg:w-1/2 space-y-8 flex flex-col justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-800">
            <span className="font-black">Edmar Diogo </span>
            <span className="text-sky-700 font-bold">|</span>
            <span className="text-blue-700">Cofundador e CEO</span>
          </h2>

          {/* Botão com espaçamento responsivo */}
          <div className="space-y-8 lg:space-y-20">
            <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-slate-500">
              <Linkedin size={20} />
              <span>Conecte-se</span>
            </button>

            {/* Cards com espaçamento menor em mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[ 
                { number: "25+", title: "Mais de 25 anos de experiência no mercado nacional." },
                { number: "50+", title: "Soluções personalizadas entregues em 2024" },
                { number: "500+", title: "Clientes atendidos em todo o Brasil." },
                { number: "100%", title: "Focado em soluções personalizadas." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex bg-white flex-col justify-between border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-gray-400 font-bold text-lg">{item.number}</span>
                  <h3 className="text-gray-800 font-semibold mt-2">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeAre;