import React from "react";

import axonLogo from "../assets/axon.png";
import jetstarLogo from "../assets/jetstar.png";
import expediaLogo from "../assets/expedia.png";
import qantasLogo from "../assets/qantas.png";
import alitaliaLogo from "../assets/alitalia.png";

const partners = [
  { name: "axon", logo: axonLogo },
  { name: "jetstar", logo: jetstarLogo },
  { name: "expedia", logo: expediaLogo },
  { name: "qantas", logo: qantasLogo },
  { name: "alitalia", logo: alitaliaLogo },
];

const Partners = () => (
  <section className="py-8 px-8 bg-white">
    <div className="flex flex-wrap justify-center items-center gap-12">
      {partners.map((p, i) => (
        <img key={i} src={p.logo} alt={p.name} className="h-8 object-contain grayscale" />
      ))}
    </div>
  </section>
);

export default Partners;