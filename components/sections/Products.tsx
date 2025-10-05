import React from "react";
import { Button } from "../ui/button";
import { title } from "process";

import Image from "next/image";
import Container from "../Container";

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
    <section className="pt-[8rem] pb-[4rem] bg-gray-100  ">
      <Container>

          <div className="grid grid-cols-2 gap-10 pb-[4rem]">
            <div className=" justify-start">
          <h2 className="text-[1.5rem] pb-[10rem]">Naše produkty</h2>
              <div  className="flex flex-col gap-4 pb-[2rem]">

              <h3 className="text-[6rem] max-w-xl">CRM</h3>
              <p className="text-[2rem] max-w-xl">
                Odoo ERP je komplexní podnikový systém, který integruje všechny
                klíčové oblasti vaší firmy do jednoho řešení. Od řízení zásob,
                přes účetnictví až po CRM a e-commerce. S Odoo ERP získáte
                nástroj, který vám pomůže optimalizovat procesy, zvýšit
                efektivitu a podpořit růst vašeho podnikání.
              </p>
              </div>
              <Button className="text-[1.5rem]">Zjistete více</Button>
            </div>

            <div className="relative overflow-hidden h-[500px] w-[1100px] rounded-xl self-center">
              <Image
                src="/crm.webp"
                alt="Odoo ERP"
                className="h-full w-full object-cover"
                fill
              />
            </div>
          </div>

        <div>
          <Button>Prozkoumejte všechny produkty</Button>
        </div>
      </Container>
    </section>
  );
};

export default Producs;
