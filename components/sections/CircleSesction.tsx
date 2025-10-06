import React from "react";
import Container from "../Container";
import { Circle } from "lucide-react";

const CircleSesction = () => {
  return (
    <section className="pt-[2rem] pb-[4rem] bg-gray-100">
      <Container>
        <h2 className="text-[1.5rem] pb-[2.25rem]">Naše produkty</h2>

        <div className="grid grid-cols-2  ">
          <p className="text-[4rem] leading-[1.05]  ">
            Prozkoumejte naši nabídku řešení pro vaši firmu
          </p>

          <div className="flex gap-[6.25rem]">
            <div className="flex flex-col gap-[2rem] justify-center items-center">
              <div className="border-6 border-black rounded-full p-4 flex items-center justify-center h-[256px] w-[256px] text-[1.5rem] font-bold">
                75%
              </div>
              <p>Popis produktu 1</p>
            </div>

            <div className="flex flex-col gap-[2rem] justify-center items-center">
              <div className="border-6 border-black rounded-full p-4 flex items-center justify-center h-[256px] w-[256px] text-[1.5rem] font-bold">
                75%
              </div>
              <p>Popis produktu 1</p>
            </div>

            <div className="flex flex-col gap-[2rem] justify-center items-center">
              <div className="border-6 border-black rounded-full p-4 flex items-center justify-center h-[256px] w-[256px] text-[1.5rem] font-bold">
                75%
              </div>
              <p>Popis produktu 1</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CircleSesction;
