"use client";
import React from "react";
import Container from "../Container";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="pt-[8rem] pb-[4rem] bg-gray-100">
      <Container className="flex flex-col items-center justify-center ">
        <div className="pb-[4rem] text-center">
          <h2 className="text-[5rem] pb-[2rem]">
            Odoo ERP: systém, který roste s vaší firmou.
          </h2>
          <p className="text-[2rem]">
            Zrychlete procesy, získejte přehled a ušetřete čas i peníze
          </p>
        </div>

        <div className="mb-[2rem] flex gap-[1rem] justify-center pb-[2rem]">
          <Button className="text-[1.5rem]">Začněte</Button>
          <Button className="text-[1.5rem]">Zkuste Demo</Button>
        </div>

        {/* ⬇⬇ DŮLEŽITÉ: výška větší než viewport */}
        <div className="relative overflow-hidden h-[80vh]  ">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
          >
            <source src="/heroVideo.mp4" type="video/mp4" />
            Váš prohlížeč nepodporuje HTML5 video.
          </video>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
