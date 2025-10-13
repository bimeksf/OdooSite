"use client";

import React from "react";
import CoUmiCard from "../CoUmiCard";
import Container from "../Container";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
const CoUmiSection = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  return (
    <section ref={sectionRef} className="pt-[8rem] pb-[8rem] bg-gray-100">
      <Container>
        <h2 className="text-[6rem] font-bold ">
          Co vše
          <br /> Odoo umí ?
        </h2>
        <div
          className="
        grid grid-cols-1 md:grid-cols-2
        gap-x-2 gap-y-2
        md:[&>*:nth-child(2n)]:mt-[-5rem]
      "
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.8 + i * 0.15,
              }}
              className=""
              key={i}
            >
              <CoUmiCard />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoUmiSection;
