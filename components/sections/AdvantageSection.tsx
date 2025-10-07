import React from "react";
import Container from "../Container";
import Image from "next/image";
import VerticalSection from "./VerticalSection";
const AdvantageSection = () => {
  return (
    <section className="pt-[8rem] pb-[8rem] bg-gray-100">
      <Container>
        <VerticalSection />

        <div className="pb-[6.813rem]">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_0.6fr)_minmax(0,_1.4fr)] gap-10 pb-[4rem] items-start">
            {/* LEVÝ SLOUPEC – menší text */}
            <div className="flex flex-col gap-[2.25rem] justify-center">
              <h2 className="text-[2.25rem] md:text-[2.5rem] pb-[1.5rem]">
                Prozkoumejte naši nabídku řešení pro vaší firmu
              </h2>
              <p className="text-[1.125rem] md:text-[1.25rem] leading-relaxed max-w-prose">
                Investujte chytře – plaťte pouze za to, co skutečně potřebujete.
                Díky open-source řešení získáváte maximální svobodu a
                flexibilitu bez skrytých poplatků.
              </p>
            </div>

            {/* PRAVÝ SLOUPEC – větší obrázky */}
            <div className="flex gap-[2.25rem] items-start">
              {/* vyšší užší */}
              <div className="relative w-[220px] md:w-[280px] lg:w-[320px] xl:w-[360px] aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/data.png"
                  alt="Odoo ERP"
                  fill
                  className="object-cover"
                  sizes="(min-width:1280px) 360px, (min-width:1024px) 320px, (min-width:768px) 280px, 220px"
                />
              </div>
              {/* širší */}
              <div className="relative w-[260px] md:w-[340px] lg:w-[400px] xl:w-[460px] aspect-[4/5] rounded-xl overflow-hidden">
                <Image
                  src="/data.png"
                  alt="Odoo ERP"
                  fill
                  className="object-cover"
                  sizes="(min-width:1280px) 460px, (min-width:1024px) 400px, (min-width:768px) 340px, 260px"
                />
              </div>
            </div>
          </div>

          {/* spodní obrázek nechávám přes celý řádek */}

          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1.4fr)_minmax(0,_0.6fr)] gap-8 items-center">
            {/* Obrázek – větší sloupec */}
            <div className="relative w-full h-[360px] md:h-[520px] rounded-xl overflow-hidden">
              <Image
                src="/crm.webp"
                alt="Odoo ERP"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 60vw, (min-width:768px) 70vw, 100vw"
                priority
              />
            </div>

            {/* Text – menší sloupec */}
            <p className="text-[1.25rem] md:text-[1.125rem] lg:text-[1.25rem] leading-relaxed max-w-prose">
              Investujte chytře – plaťte pouze za to, co skutečně potřebujete.
              Díky open-source řešení získáváte maximální svobodu a flexibilitu
              bez skrytých poplatků.
            </p>
          </div>
        </div>
        <div className="pb-[6.813rem]">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1.4fr)_minmax(0,_0.6fr)] gap-10 pb-[4rem] items-start">
            {/* PRAVÝ SLOUPEC – větší obrázky */}
            <div className="flex gap-[2.25rem] items-start">
              {/* vyšší užší */}
              <div className="relative w-[220px] md:w-[280px] lg:w-[320px] xl:w-[360px] aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/data.png"
                  alt="Odoo ERP"
                  fill
                  className="object-cover"
                  sizes="(min-width:1280px) 360px, (min-width:1024px) 320px, (min-width:768px) 280px, 220px"
                />
              </div>
              {/* širší */}
              <div className="relative w-[260px] md:w-[340px] lg:w-[400px] xl:w-[460px] aspect-[4/5] rounded-xl overflow-hidden">
                <Image
                  src="/data.png"
                  alt="Odoo ERP"
                  fill
                  className="object-cover"
                  sizes="(min-width:1280px) 460px, (min-width:1024px) 400px, (min-width:768px) 340px, 260px"
                />
              </div>
            </div>
            {/* LEVÝ SLOUPEC – menší text */}
            <div className="flex flex-col gap-[2.25rem] justify-center">
              <h2 className="text-[2.25rem] md:text-[2.5rem] pb-[1.5rem]">
                Prozkoumejte naši nabídku řešení pro vaší firmu
              </h2>
              <p className="text-[1.125rem] md:text-[1.25rem] leading-relaxed max-w-prose">
                Investujte chytře – plaťte pouze za to, co skutečně potřebujete.
                Díky open-source řešení získáváte maximální svobodu a
                flexibilitu bez skrytých poplatků.
              </p>
            </div>

          </div>

          {/* spodní obrázek nechávám přes celý řádek */}

          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_0.6fr)_minmax(0,_1.4fr)] gap-8 items-center">
            {/* Text – menší sloupec */}
            <p className="text-[1.25rem] md:text-[1.125rem] lg:text-[1.25rem] leading-relaxed max-w-prose">
              Investujte chytře – plaťte pouze za to, co skutečně potřebujete.
              Díky open-source řešení získáváte maximální svobodu a flexibilitu
              bez skrytých poplatků.
            </p>
            {/* Obrázek – větší sloupec */}
            <div className="relative w-full h-[360px] md:h-[520px] rounded-xl overflow-hidden">
              <Image
                src="/crm.webp"
                alt="Odoo ERP"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 60vw, (min-width:768px) 70vw, 100vw"
                priority
              />
            </div>

          </div>
        </div>
    
      </Container>
    </section>
  );
};

export default AdvantageSection;
