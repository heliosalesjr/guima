"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Regras.css"; // Importe o arquivo CSS

const items = [
  {
    image: "/img/concorrentes.jpg",
    title: "Concorrentes",
    text: "A Guima repudia qualquer forma de restrição ao livre-comércio ou à livre concorrência, em especial a formação de cartel, fraudes a licitações e abusos de poder. Estamos comprometidos com o fiel cumprimento das leis que regem a concorrência em nosso país, adotando a qualidade técnica de nossos produtos e serviços como o único motivador para nossas vendas.",
  },
  {
    image: "/img/fornecedores.jpg",
    title: "Fornecedores",
    text: "Os fornecedores da Guima devem demonstrar: plena capacidade técnica para executar o que propõe, a prática de preços totalmente adequados, conduta profissional absolutamente idônea, baseada no cumprimento de leis e de altos padrões éticos.",
  },
  {
    image: "/img/agentespublicos.jpg",
    title: "Agentes Públicos",
    text: "A Guima, no ato das pessoas físicas que a representam, estão proibidas de prometer, oferecer ou dar, direta ou indiretamente, qualquer pagamento ou outra vantagem indevida a agente público, a terceiro a ele relacionado ou a uma pessoa física ou jurídica privada, visando à obtenção de qualquer favorecimento ou expectativa de favorecimento.",
  },
  {
    image: "/img/terceiros.jpeg",
    title: "Terceiros",
    text: "Os integrantes se comprometem a informar a seus parceiros comerciais, clientes, fornecedores e agentes públicos com quem interagem sobre as normas e os princípios éticos aqui contidos, para que sejam praticados em toda a sua cadeia de negócios.",
  },
  {
    image: "/img/legal.jpg",
    title: "Embasamento legal",
    text: "LEI No 12.846/2013 (Lei Anticorrupção) e e DECRETO No 11.129/2022 (decreto regulamentador). Ainda: LEI No 12.813/2013 – Lei de conflito de Interesses, LEI No 14.133/20121 – Nova Lei de Licitações e Contratos Administrativos, CÓDIGO PENAL – Decreto-Lei no 2.848, de 7 de dezembro de 1940, LEI No 8.429/1992 – Lei de Improbidade Administrativa e DECRETO No 10.889/2021, que regulamenta as audiências de agentes públicos.",
  },
];

export default function Regras() {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <div>
      <h2 className="text-4xl text-center font-bold text-white leading-snug mb-6">Compromisso com Ética e Compliance</h2>
      <p className="text-white max-w-5xl text-center mx-auto text-lg pb-16 leading-relaxed">Nossa empresa segue rigorosamente as leis de compliance brasileiras, garantindo a total conformidade com as normas e regulamentos. Atuamos com transparência, integridade e respeito às legislações vigentes, promovendo um ambiente ético e seguro para nossos clientes, colaboradores e parceiros.</p>
      
      <div className="relative max-w-5xl mx-auto h-[400px] flex flex-wrap overflow-hidden regras-container">
        {items.map((item, index) => {
          const isActive = selected === index;
          const isShrunk = selected !== null && !isActive;
          const width = isActive ? "60%" : isShrunk ? "10%" : "20%";

          return (
            <motion.div
              key={index}
              className={`relative h-full cursor-pointer transition-all duration-500 ease-in-out ${
                isActive ? "active" : ""
              }`}
              style={{ width }}
              onClick={() => setSelected(isActive ? null : index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Imagem de fundo */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Overlay escuro */}
              <motion.div
                className="absolute inset-0 bg-black transition-all duration-500"
                animate={{
                  opacity: isActive ? 0.5 : hovered === index ? 0.2 : 0.5, 
                }}
              />
              
              {/* Título */}
              <motion.h2
                className="absolute flex items-center justify-center w-full h-full text-white text-xl font-bold transition-all duration-500"
                animate={{
                  opacity: isShrunk ? 0 : 1,
                  scale: isActive ? 0 : 1,
                }}
                initial={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                {item.title}
              </motion.h2>
              
              {/* Texto (só aparece no ativo) */}
              <AnimatePresence>
                {isActive && (
                  <motion.p
                    className="absolute bottom-5 left-5 right-5 text-white transition-opacity"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {item.text}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
      
      <div className="flex flex-col items-center justify-center text-center p-4">
          <p className="text-lg mb-4 text-white pt-16">
            Você pode baixar o nosso documento de Compliance completo clicando no botão:
          </p>
          <a 
            href="/compliance_Guima.pdf" 
            download 
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Download
          </a>
        </div>

    </div>
    
  );
}