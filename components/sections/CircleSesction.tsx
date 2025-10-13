"use client"
import React from "react";
import Container from "../Container";
import { CountUp } from "./CountUp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DrawingCircle } from "./DrawingCircle";
const CircleSesction = () => {

const sectionRef = useRef(null)
const isSectionInView = useInView(sectionRef,{once:true, amount:0.3})

const textVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as const;

const rowVariants = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      delayChildren: 0.3,
    },
  },
} as const;




  return (
    <section ref={sectionRef} className="pt-[2rem] pb-[4rem] bg-gray-100">
      <Container className="flex flex-col gap-[3rem] items-center text-center">
        <motion.div
          variants={rowVariants}
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
        >
          <motion.p
            variants={textVariants}
            className="text-[1.5rem] pb-[2.25rem] self-start text-left"
          >
            Naše produkty
          </motion.p>
          <motion.h2
            variants={textVariants}
            className="text-[4rem] leading-[1.05] self-start  text-left pb-[3rem]"
          >
            Prozkoumejte naši nabídku řešení pro vaši firmu
          </motion.h2>
        </motion.div>

        <div className="flex gap-[6.25rem]">
          <div className="flex flex-col gap-[2rem] justify-center items-center">
            <DrawingCircle percent={75}>
              <CountUp to={75} suffix="%" />
            </DrawingCircle>

            <p>Popis produktu 1</p>
          </div>

          <div className="flex flex-col gap-[2rem] justify-center items-center">
            <DrawingCircle percent={45}>
              <CountUp to={45} suffix="%" />
            </DrawingCircle>
            <p>Popis produktu 1</p>
          </div>

          <div className="flex flex-col gap-[2rem] justify-center items-center">
            <DrawingCircle percent={30}>
              <CountUp to={30} suffix="%" />
            </DrawingCircle>

            <p>Popis produktu 1</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CircleSesction;
