import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Regras = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      image: "/img/concorrentes.jpg",
      title: "RELACIONAMENTO COM CONCORRENTES",
      text: "A Guima repudia qualquer forma de restrição ao livre-comércio ou à livre concorrência, em especial a formação de cartel, fraudes a licitações e abusos de poder. Estamos comprometidos com o fiel cumprimento das leis que regem a concorrência em nosso país, adotando a qualidade técnica de nossos produtos e serviços como o único motivador para nossas vendas.",
    },
    {
      image: "/img/fornecedores.jpg",
      title: "RELACIONAMENTO COM FORNECEDORES",
      text: "Os fornecedores da Guima devem demonstrar: plena capacidade técnica para executar o que propõe, a prática de preços totalmente adequados, conduta profissional absolutamente idônea, baseada no cumprimento de leis e de altos padrões éticos.",
    },
    {
      image: "/img/agentespublicos.jpg",
      title: "RELACIONAMENTO COM AGENTES PÚBLICOS",
      text: "A Guima, no ato das pessoas físicas que a representam, estão proibidas de prometer, oferecer ou dar, direta ou indiretamente, qualquer pagamento ou outra vantagem indevida a agente público, a terceiro a ele relacionado ou a uma pessoa física ou jurídica privada, visando à obtenção de qualquer favorecimento ou expectativa de favorecimento.",
    },
    {
      image: "/img/terceiros.jpeg",
      title: "PROPAGAÇÃO DA EXISTÊNCIA DO CÓDIGO PARA TERCEIROS",
      text: "Os integrantes se comprometem a informar a seus parceiros comerciais, clientes, fornecedores e agentes públicos com quem interagem sobre as normas e os princípios éticos aqui contidos, para que sejam praticados em toda a sua cadeia de negócios. ",
    },
    {
      image: "/img/legal.jpg",
      title: "EMBASAMENTO LEGAL DO DOCUMENTO",
      text: "LEI No 12.846/2013 (Lei Anticorrupção) e e DECRETO No 11.129/2022 (decreto regulamentador). Ainda: LEI No 12.813/2013 – Lei de conflito de Interesses, LEI No 14.133/20121 – Nova Lei de Licitações e Contratos Administrativos, CÓDIGO PENAL – Decreto-Lei no 2.848, de 7 de dezembro de 1940, LEI No 8.429/1992 – Lei de Improbidade Administrativa e DECRETO No 10.889/2021, que regulamenta as audiências de agentes públicos.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="w-full p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Comportamentos</h2>
     
      <p className="text-gray-600 mb-8">
        É proibido exercer atividades relacionadas à empresa sob efeito de álcool ou drogas, ou permanecer no ambiente de trabalho alterado por essas substâncias. É proibido portar armas nas dependências da empresa ou em eventos profissionais. É proibido trocar, armazenar ou utilizar conteúdo obsceno, pornográfico, violento, discriminatório, racista ou difamatório.
      </p>
      <div className="relative w-full h-[400px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute w-full h-full "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={items[activeIndex].image}
              alt={items[activeIndex].title}
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-slate-600 bg-opacity-80 p-4 text-white rounded-xl">
              <h4 className="text-xl font-semibold mb-2">{items[activeIndex].title}</h4>
              <p className="text-gray-200">{items[activeIndex].text}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-6 ">
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
      <div className="text-center p-6">
        <p className="text-lg text-gray-700 mb-4">
          Você pode baixar o nosso documento de Compliance completo clicando no botão abaixo:
        </p>
        <Button className="bg-blue-700 hover:bg-blue-900 text-white">
          Download
        </Button>
      </div>
    </div>
  );
};

export default Regras;
