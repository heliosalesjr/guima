"use client"
import React from "react";
import Conduta from "./compliance/Conduta";
import Combate from "./compliance/Combate";
import Regras from "./compliance/Regras";

const Compliance = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <Conduta />
      <Combate />
      <Regras />
    </div>
  );
};

export default Compliance;