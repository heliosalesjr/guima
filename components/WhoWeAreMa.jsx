"use client";
import React from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

import solarImage from "../public/img/Marina.jpeg";

const WhoWeAreMa = () => {
  return (
    <div className="bg-slate-100" >
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-stretch max-w-6xl mx-auto min-h-[80vh] py-20 px-6 gap-12">
        {/* Coluna Direita (Imagem) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full flex justify-center items-center"
        >
          <div className="relative w-full h-[500px] lg:h-full rounded-2xl overflow-hidden md:max-w-[400px] sm:max-w-[400px]">
            <Image
              src={solarImage}
              alt="Marina Guimarães Nassim"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Coluna Esquerda (Texto e Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-8 flex flex-col justify-center items-end text-right"
        >
          <h2 className="text-3xl font-semibold text-gray-800">
            <span className="font-black">Marina Guimarães Nassim</span>
            <span className="text-slate-500 font-bold"> |</span>
            <span className="text-blue-700"> Sócia Administradora</span>
          </h2>

          {/* Botão do LinkedIn alinhado à direita */}
          <div className="w-full flex justify-end">
            <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-slate-500">
              <Linkedin size={20} />
              <span>Conecte-se</span>
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {[
              { number: "20+", title: "Coordenando processos jurídicos complexos, incluindo M&A e IPO." },
              { number: "10+", title: "Há mais de 10 anos certificada em programas de compliance e integridade." },
              { number: "5+", title: "5 anos de experiência na área comercial e atendimento ao cliente." },
              { number: "100%", title: "Focada em atendimento seguro e personalizado." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 * (index + 1) }}
                viewport={{ once: true }}
                className="flex bg-white flex-col justify-between border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <span className="text-gray-400 font-bold text-lg">{item.number}</span>
                <h3 className="text-gray-800 font-semibold mt-2">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeAreMa;
