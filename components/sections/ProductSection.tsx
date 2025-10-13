"use client";
import Container from "../Container";
import CardComponent from "../CardComponent";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const ProductSection = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.3 });

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
    <section className="pt-[8rem] pb-[4rem] bg-gray-100" ref={sectionRef}>
      <Container className="flex flex-col">
        <motion.h2
          variants={textVariants}
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          className="text-[1.5rem] pb-[5.25rem]"
        >
          Naše produkty
        </motion.h2>

        <motion.div
          variants={rowVariants}
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row pb-[6.813rem]"
        >
          <motion.p
            variants={textVariants}
            className="text-[4rem] leading-[1.05] md:flex-1"
          >
            Prozkoumejte naši nabídku řešení pro vaši firmu
          </motion.p>

          <motion.p
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-[2rem] md:ml-auto md:max-w-[36rem] md:pl-[5rem] self-end"
          >
            Zrychlete procesy, získejte přehled a ušetřete čas i peníze
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.8 + i * 0.15,
              }}
            >
              <CardComponent />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
