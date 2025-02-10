"use client";
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Conduta = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold my-6 text-center">Nosso Programa de Compliance e Código de Conduta</h2>
      <div className="flex flex-col md:flex-row w-full">
        {/* Parte 1: Título, subtítulo e parágrafo */}
        <div className="w-full md:w-1/3 p-6 text-center md:text-left">
          
          <h3 className="text-xl font-semibold mb-2">Princípios básicos dos valores empresariais</h3>
          <p className="text-gray-600">
            Explore as abas ao lado para conhecer nossos princípios e valores e ainda nossa visão de futuro de compliance.
          </p>
        </div>

        {/* Parte 2: Accordion */}
        <div className="w-full md:w-2/3 p-6">
          <Accordion type="single" collapsible>
            {/* Item 1 */}
            <AccordionItem value="item-1" className="hover:bg-slate-100 rounded-xl px-2 my-2">
              <AccordionTrigger className="text-lg font-semibold">
                Respeito Total
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <p className="text-gray-600 mb-2">
                  Entre colaboradores, à legislação vigente, a terceiros (clientes, fornecedores, prestadores de serviços etc.).
                </p>
                <p className="text-gray-600 mb-2">
                  Comprometimento, responsabilidade e qualidade na execução de tarefas.
                </p>
                <p className="text-gray-600 mb-2">
                  Atuação com honestidade, integridade, ética e justiça.
                </p>
                <p className="text-gray-600 mb-2">
                  Não manipular, distorcer ou esconder informações.
                </p>
                <p className="text-gray-600 mb-2">
                  Não agir de forma antiética, mesmo se solicitado.
                </p>
                <p className="text-gray-600 mb-2">
                  Não solicitar a ninguém a prática de uma conduta antiética.
                </p>
                <p className="text-gray-600 mb-2">
                  Não tolerar nenhuma conduta antiética, denunciando e contribuindo com as investigações.
                </p>
                <p className="text-gray-600">
                  Ter preocupação permanente na tomada de decisões tendo como referência as consequências positivas e negativas do futuro.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Item 2 */}
            <AccordionItem value="item-2" className="hover:bg-slate-100 rounded-xl px-2 my-2">
              <AccordionTrigger className="text-lg font-semibold">
                Valores Respeitosos e Morais
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <p className="text-gray-600 mb-2 font-bold">
                  Assédio moral:
                </p>
                <p className="text-gray-600 mb-2">
                  Não são tolerados atos humilhantes praticados por superiores hierárquicos sobre subordinados, ou mesmo entre eventuais colaboradores.
                </p>
                <p className="text-gray-600 mb-2 font-bold">
                  Assédio sexual:
                </p>
                <p className="text-gray-600 mb-2">
                  Não são tolerados atos de constrangimento praticados por superiores hierárquicos sobre subordinados, ou mesmo entre colaboradores, no intuito de obter vantagens de cunho sexual.
                </p>
                <p className="text-gray-600 mb-2 font-bold">
                  Agressões e atos discriminatórios:
                </p>
                <p className="text-gray-600 mb-2">
                  Não são toleradas agressões físicas ou verbais, atitudes ofensivas, humilhantes, ameaçadoras, desrespeitosas ou discriminatórias de qualquer natureza (por raça, religião, sexo, gênero, necessidades especiais, posição socioeconômica etc.).
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Item 3 */}
            <AccordionItem value="item-3" className="hover:bg-slate-100 rounded-xl px-2 my-2">
              <AccordionTrigger className="text-lg font-semibold">
                Relacionamentos Comerciais Éticos e Sólidos
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <p className="text-gray-600 mb-2">
                  Ao estabelecermos relações com outras empresas e com seus profissionais, a licitude das ações será sempre a pauta principal. As pessoas de nosso ciclo devem compreender a importância de nossos valores e que atuem em alinhamento com nossos princípios. Cabe a nós construirmos o ambiente de negócios de forma positiva para as partes envolvidas.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Item 4 */}
            <AccordionItem value="item-4" className="hover:bg-slate-100 rounded-xl px-2 my-2">
              <AccordionTrigger className="text-lg font-semibold">
                Benefícios Indevidos Não São Tolerados
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <p className="text-gray-600 mb-2">
                  Beneficiamentos (promoções, mudança de cargo, aumento de remuneração, participação em eventos, concessão de bônus e prêmios etc.) que não sejam decorrentes exclusivamente do mérito do beneficiado no exercício de suas funções. São exemplos de beneficiamentos indevidos os decorrentes de laços pessoais, do oferecimento de vantagens indevidas, de posição socioeconômica e de solicitações externas, dentre outros.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
    
  );
};

export default Conduta;