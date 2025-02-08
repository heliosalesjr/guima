"use client"
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Conduta = () => {
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
          {[1, 2, 3, 4].map((item) => (
            <AccordionItem key={item} value={`item-${item}`}>
              <AccordionTrigger className="text-lg font-semibold">
                Título do Item {item}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Conteúdo detalhado do item {item}.
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