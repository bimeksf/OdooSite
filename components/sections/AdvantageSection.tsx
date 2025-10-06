import React from 'react'
import Container from '../Container'
import Image from 'next/image'
const AdvantageSection = () => {
  return (
    <section className="pt-[8rem] pb-[8rem] bg-gray-100">
      <Container>
        <div className="grid grid-cols-3 gap-[6.25rem] pb-[6.813rem]">
          <h2 className="text-[4rem]  rotate-[-90deg]">
            Odoo ERP: systém, který roste s vaší firmou.
          </h2>

          <div className=" col-span-2 flex flex-col gap-[2.25rem] justify-center">
            <h2 className="text-[3rem] pb-[2.25rem]">
              Prozkoumejte naši nabídku řešeni pro vaší firmu{" "}
            </h2>
            <p className="text-[2.5rem] ">
              Investujete pouze do služeb, které vám přinesou skutečnou hodnotu
              profesionální implementace, odborné konzultace a přizpůsobení
              systému vašim potřebám.  
            </p>
          </div>
        </div>

        <div className='pb-[6.813rem]'>
          <div className="flex gap-4 pb-[4rem]">
            <div className=" col-span-2 flex flex-col gap-[2.25rem] justify-center">
              <h2 className="text-[3rem] pb-[2.25rem]">
                Prozkoumejte naši nabídku řešeni pro vaší firmu{" "}
              </h2>
              <p className="text-[2.5rem] ">
                Investujete pouze do služeb, které vám přinesou skutečnou
                hodnotu profesionální implementace, odborné konzultace a
                přizpůsobení systému vašim potřebám.  
              </p>
            </div>

            <div className="flex gap-[2.25rem]">
              <div>
                <Image
                  src="/crm.webp"
                  alt="Odoo ERP"
                  width={311}
                  height={454}
                />
              </div>
              <div>
                <Image
                  src="/crm.webp"
                  alt="Odoo ERP"
                  width={426}
                  height={499}
                />
              </div>
            </div>
          </div>

          <div>
            <Image src="/crm.webp" alt="Odoo ERP" width={4100} height={499} />
          </div>
        </div>
        <div>
          <div className="flex gap-4 pb-[4rem]">
            <div className=" col-span-2 flex flex-col gap-[2.25rem] justify-center order-2">
              <h2 className="text-[3rem] pb-[2.25rem]">
                Prozkoumejte naši nabídku řešeni pro vaší firmu{" "}
              </h2>
              <p className="text-[2.5rem] ">
                Investujete pouze do služeb, které vám přinesou skutečnou
                hodnotu profesionální implementace, odborné konzultace a
                přizpůsobení systému vašim potřebám.  
              </p>
            </div>

            <div className="flex gap-[2.25rem]">
              <div>
                <Image
                  src="/crm.webp"
                  alt="Odoo ERP"
                  width={311}
                  height={454}
                />
              </div>
              <div>
                <Image
                  src="/crm.webp"
                  alt="Odoo ERP"
                  width={426}
                  height={499}
                />
              </div>
            </div>
          </div>

          <div>
            <Image src="/crm.webp" alt="Odoo ERP" width={4100} height={499} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AdvantageSection