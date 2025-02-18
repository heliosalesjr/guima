"use client"
import React from "react";
import Conduta from "./compliance/Conduta";
import Combate from "./compliance/Combate";
import Regras from "./compliance/Regras";

const Compliance = () => {
  return (
    <div className="py-16 px-4 bg-slate-900  " id="compliance">
      
      <Regras />
    </div>
  );
};

export default Compliance;