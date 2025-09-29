import React from "react";
import { Button } from "../ui/button";
import { title } from "process";

import Image from "next/image";

const Producs = () => {
  const content = [
    {
      title: "CRM",
      description: `Odoo ERP je komplexní podnikový systém, který integruje všechny
klíčové oblasti vaší firmy do jednoho řešení. Od řízení zásob,
přes účetnictví až po CRM a e-commerce. S Odoo ERP získáte
nástroj, který vám pomůže optimalizovat procesy, zvýšit efektivitu
a podpořit růst vašeho podnikání.`,
      button: "Zjistete více",
      image: { src: "/crm.webp", alt: "Odoo ERP" },
    },
    {
      title: "SKLADY",
      description: `Odoo ERP je komplexní podnikový systém, který integruje všechny
klíčové oblasti vaší firmy do jednoho řešení. Od řízení zásob,
přes účetnictví až po CRM a e-commerce. S Odoo ERP získáte
nástroj, který vám pomůže optimalizovat procesy, zvýšit efektivitu
a podpořit růst vašeho podnikání.`,
      button: "Zjistete více",
      image: { src: "/crm.webp", alt: "Odoo ERP" },
    },
    {
      title: "PROJEKY",
      description: `Odoo ERP je komplexní podnikový systém, který integruje všechny
klíčové oblasti vaší firmy do jednoho řešení. Od řízení zásob,
přes účetnictví až po CRM a e-commerce. S Odoo ERP získáte
nástroj, který vám pomůže optimalizovat procesy, zvýšit efektivitu
a podpořit růst vašeho podnikání.`,
      button: "Zjistete více",
      image: { src: "/crm.webp", alt: "Odoo ERP" },
    },
  ];

  return (
    <>
      <div>
        <h2 className="text-[1.5rem]">Naše produkty</h2>

        <div>
          <div>
            <h3 className="text-[6rem]">CRM</h3>
            <p className="text-[2rem]">
              Odoo ERP je komplexní podnikový systém, který integruje všechny
              klíčové oblasti vaší firmy do jednoho řešení. Od řízení zásob,
              přes účetnictví až po CRM a e-commerce. S Odoo ERP získáte
              nástroj, který vám pomůže optimalizovat procesy, zvýšit efektivitu
              a podpořit růst vašeho podnikání.
            </p>
            <Button className="text-[1.5rem]">Zjistete více</Button>
          </div>
        </div>
        <img
          src="/crm.webp"
          alt="Odoo ERP"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* If using Next.js, use:
        <Image src="/crm.webp" alt="Odoo ERP" layout="fill" objectFit="cover" />
        */}
        <div className="relative overflow-hidden h-[60vh]  rounded-xl">
          <Image src="/crm.webp" alt="Odoo ERP" className="h-full w-full object-cover"  fill/>
        </div>
      </div>

      <div>
        <Button>Prozkoumejte všechny produkty</Button>
      </div>
    </>
  );
};

export default Producs;
