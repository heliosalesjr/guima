"use client";
import React from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react"

import solarImage from "../public/img/edmar.png"; 

const WhoWeAre = () => {
  return (
    <div className="bg-slate-100">
        <div className=" flex flex-col lg:flex-row items-center lg:items-stretch max-w-6xl mx-auto min-h-[80vh] py-20 px-6 gap-12">
        {/* Coluna Direita */}
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

        {/* Coluna Esquerda */}
        <div className="lg:w-1/2 space-y-8 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-800">
            <span className="font-black">Edmar Diogo </span>
            <span className="text-sky-700 font-bold">|</span>
            <span className="text-blue-700"> Diretor Executivo de Operações</span>
            </h2>
            
            {/* Botão com espaçamento responsivo */}
            <div className="space-y-8 lg:space-y-20">
            <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-slate-500">
            <Linkedin size={20}/>
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

export default WhoWeAre;
