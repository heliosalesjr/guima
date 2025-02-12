import React from "react";
import { motion } from "framer-motion";
import { Shield, Target, Zap } from "lucide-react";

const Combate = () => {
  const cards = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Atos de Corrupção",
      text: "Atos de corrupção são práticas ilegais que consistem na oferta ou promessa de vantagem indevida com o objetivo de obter favorecimento ou benefício indevido.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Código de Ética e Conduta",
      text: "A empresa exige que todos os seus Integrantes cumpram com o Código de Ética e Conduta e as leis aplicáveis e mantenham os mais altos padrões éticos de conduta em seus negócios.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Tolerância Zero",
      text: "Não será tolerada qualquer retaliação a Integrante ou Terceiro que deixe de realizar negócios que contrariem as regras desta política.",
    },
  ];

  return (
    <div className="w-full p-6">
      <h2 className="text-3xl font-bold mb-6 align-middle text-center">Política de Combate à Corrupção</h2>
      <h3 className="text-lg mb-6 text-center">A corrupção é prejudicial à economia do país e ao desenvolvimento dos negócios na medida em que gera perdas significativas às empresas em geral e cria um ambiente propício a outras condutas inadequadas.</h3>
      <p className="mb-6 bg-slate-100 px-16 py-16 rounded-xl">A Guima tem compromisso permanente com o cumprimento da legislação anticorrupção, com a adoção de boas
práticas de governança corporativa e de condutas éticas na realização de seus negócios. Não serão tolerados atos
de Corrupção. É proibido aos Integrantes prometer, oferecer, dar ou autorizar o pagamento de Vantagem
indevida, direta ou indiretamente, a Agente público ou Terceiro (pessoas físicas ou jurídicas) a ele relacionados,
Clientes, agentes, representantes, distribuidores ou Fornecedores. Também é proibida qualquer atividade que
tenha como objetivo frustrar, fraudar ou manipular procedimentos
licitatórios públicos e/ou contratos públicos.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 border rounded-lg shadow-sm"
          >
            <div className="flex items-center mb-4 text-blue-700 pr-8">
              {card.icon}
              <h4 className="text-xl font-semibold text-slate-600 ml-2">{card.title}</h4>
            </div>
            <p className="text-gray-600">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Combate;