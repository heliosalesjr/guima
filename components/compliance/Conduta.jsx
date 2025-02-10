"use client"
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Conduta = () => {

  const items = [
    { title: "1", description: "Conteúdo detalhado do item 1." },
    { title: "2", description: "Conteúdo detalhado do item 2." },
    { title: "3", description: "Conteúdo detalhado do item 3." },
    { title: "4", description: "Conteúdo detalhado do item 4." },
  ];

  return (
    <div className="flex w-full">
      {/* Parte 1: Título, subtítulo e parágrafo */}
      <div className="w-1/3 p-6">
        <h2 className="text-2xl font-bold mb-4">Conduta</h2>
        <h3 className="text-lg font-semibold mb-2">Subtítulo</h3>
        <p className="text-gray-600">
          Este é um parágrafo explicativo sobre a conduta.
        </p>
      </div>

      {/* Parte 2: Accordion */}
      <div className="w-2/3 p-6">
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-lg font-semibold">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Conduta;