"use client";
import React from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";

import solarImage from "../public/img/Marina.jpeg";

const WhoWeAreMa = () => {
  return (
    <div className="bg-slate-100" id="sobre">
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-stretch max-w-6xl mx-auto min-h-[80vh] py-20 px-6 gap-12">
        {/* Coluna Direita (agora à esquerda em telas grandes) */}
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <div className="relative w-full h-[500px] lg:h-full rounded-2xl overflow-hidden md:max-w-[400px] sm:max-w-[400px]">
            <Image
              src={solarImage}
              alt="Man holding solar panel"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-2xl"
            />
          </div>
        </div>

        {/* Coluna Esquerda (agora à direita em telas grandes) */}
        <div className="lg:w-1/2 space-y-8 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            <span className="font-black">Marina Guimarães Nassim</span>
            <span className="text-slate-500 font-bold"> |</span>
            <span className="text-blue-700"> Sócia Administradora</span>
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
                { number: "20+", title: "coordenando processos jurídicos complexos, incluindo M&A e IPO." },
                { number: "10+", title: "A mais de 10 anos certificada em programas de compliance e integridades." },
                { number: "5+", title: "5 anos de experiencia na área comercial e atendimento ao cliente." },
                { number: "100%", title: "Focada em atendimento seguro e personalizado." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex bg-white flex-col justify-between border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <span className="text-gray-400 font-bold text-lg">{item.number}</span>
                  <h3 className="text-gray-800 font-semibold mt-2">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreMa;