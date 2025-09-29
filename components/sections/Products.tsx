import React from "react";
import { Button } from "../ui/button";
import { title } from "process";

const Producs = () => {

const content =[
  {
    title: "CRM",
    description: `Odoo ERP je komplexní podnikový systém, který integruje všechny
klíčové oblasti vaší firmy do jednoho řešení. Od řízení zásob,
přes účetnictví až po CRM a e-commerce. S Odoo ERP získáte
nástroj, který vám pomůže optimalizovat procesy, zvýšit efektivitu
a podpořit růst vašeho podnikání.`,
    button: "Zjistete více",
    image: { src: "/crm.webp", alt: "Odoo ERP" }
  },
  {
    title: "SKLADY",
    description: `Odoo ERP je komplexní podnikový systém, který integruje všechny
klíčové oblasti vaší firmy do jednoho řešení. Od řízení zásob,
přes účetnictví až po CRM a e-commerce. S Odoo ERP získáte
nástroj, který vám pomůže optimalizovat procesy, zvýšit efektivitu
a podpořit růst vašeho podnikání.`,
    button: "Zjistete více",
    image: { src: "/crm.webp", alt: "Odoo ERP" }
  },
  {
    title: "PROJEKY",
    description: `Odoo ERP je komplexní podnikový systém, který integruje všechny
klíčové oblasti vaší firmy do jednoho řešení. Od řízení zásob,
přes účetnictví až po CRM a e-commerce. S Odoo ERP získáte
nástroj, který vám pomůže optimalizovat procesy, zvýšit efektivitu
a podpořit růst vašeho podnikání.`,
    button: "Zjistete více",
    image: { src: "/crm.webp", alt: "Odoo ERP" }
  }
]

  return (
    <>
      <div>
        <h2>Naše produkty</h2>

        <div>
          <div>
            <h3>Odoo ERP</h3>
            <p>
              Odoo ERP je komplexní podnikový systém, který integruje všechny
              klíčové oblasti vaší firmy do jednoho řešení. Od řízení zásob,
              přes účetnictví až po CRM a e-commerce. S Odoo ERP získáte
              nástroj, který vám pomůže optimalizovat procesy, zvýšit efektivitu
              a podpořit růst vašeho podnikání.
            </p>
            <Button>Zjistete více</Button>
          </div>
        </div>

        <img src="/crm.webp" alt="Odoo ERP" />
      </div>

      <div>
        <Button>Prozkoumejte všechny produkty</Button>
      </div>
    </>
  );
};

export default Producs;
