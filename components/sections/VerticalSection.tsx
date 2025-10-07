import React from "react";

const VerticalSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[minmax(0,_0.4fr)_minmax(0,_1.6fr)]  gap-10 md:gap-14 min-h-[70vh] pb-[6.813rem]">
      {/* Levý sloupec – wrapper zajistí plnou výšku a centrování */}
      <div className="relative   w-full md:h-full items-center flex">
        <h2
          className=" inset-0 m-0 flex items-center justify-center
                     text-[2.25rem] md:text-[2rem] font-bold leading-none
                     rotate-[-90deg] origin-center"
        >
          Odoo ERP: systém, který roste s vaší firmou.
        </h2>
      </div>

      {/* Pravý sloupec – konzistentní vertikální rytmus + max šířka pro čitelnost */}
      <div className="flex flex-col justify-center gap-6 md:gap-8">
        <h2 className="text-[2rem] md:text-[3rem] font-semibold leading-tight">
          Prozkoumejte naši nabídku řešení pro vaší firmu
        </h2>
        <p className="text-[1.125rem] md:text-[1.5rem] leading-relaxed max-w-[60ch]">
          Investujete pouze do služeb, které vám přinesou skutečnou hodnotu –
          profesionální implementace, odborné konzultace a přizpůsobení systému
          vašim potřebám.
        </p>
      </div>
    </section>
  );
};

export default VerticalSection;
