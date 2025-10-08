import React from "react";
import Image from "next/image";
import Container from "../Container";

const TextSection = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className=" ">
          {/* Nadpis: dvě nezávislé řádky v gridu */}
          <h2
            className="
            gap-y-[4rem]
             flex flex-col
              leading-[1]
              uppercase
            "
          >
            <span
              className="
                font-bold tracking-tight
                [font-size:clamp(2.4rem,6vw,5rem)]

              "
            >
              Svobodné řešení bez

              
            </span>

            <span
              className="
                
                font-bold tracking-tight
                md:text-right

                [font-size:clamp(2.4rem,6vw,5rem)]
              "
            >
              licenčních poplatků
            </span>
          </h2>
        </div>

          {/* Levý odstavec */}
          <p className=" text-[1.8rem] md:text-[2rem] leading-relaxed w-[25rem] mt-[-7rem]">
            Investujete pouze do služeb, které vám přinesou skutečnou hodnotu
            profesionální implementace, odborné konzultace a přizpůsobení
            systému vašim potřebám.
          </p>


        {/* Obrázek jen v levém sloupci pod textem */}
        <div className="grid grid-cols-2 gap-[4rem] pt-[4rem]">
          <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src="/crm.webp"
              alt="Odoo ERP"
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw, (min-width:768px) 70vw, 100vw"
              priority
            />
          </div>
        {/* Pravý odstavec */}
        <p className=" text-[1.8rem] md:text-[2rem] leading-relaxed mt-[-5rem]">
          Investujete pouze do služeb, které vám přinesou skutečnou hodnotu
          profesionální implementace, odborné konzultace a přizpůsobení systému
          vašim potřebám.
        </p>
        </div>
      </Container>
    </section>
  );
};

export default TextSection;
