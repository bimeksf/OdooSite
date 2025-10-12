"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const MotionCard = motion(Card);




const CardComponent = () => {
  return (
    <MotionCard
      initial={{
        borderRadius: 0,
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        color: "#000000",
      }}
      whileHover={{
        backgroundColor: "#ebe9da",
        color: "#3e4f42",
        borderTopRightRadius: 100,
        borderColor: "transparent",
      }}
      transition={{
        type: "tween",
        duration: 0.25,
        ease: "easeOut",
        borderRadius: { duration: 0.3 },
        backgroundColor: { duration: 0.25 },
        borderColor: { duration: 0.25 },
      }}
      className="group w-[25.875rem] h-[31.25rem] flex items-start p-[1.5rem] text-left border-4 border-black rounded-none"
    >
      <CardHeader className="p-0 flex-shrink-0 pb-[1rem]">
        <Avatar className="h-[5rem] w-[5rem]">
          <AvatarImage src="/crm.svg" alt="Odoo ERP" />
        </Avatar>
      </CardHeader>

      <CardContent className="p-0">
        <h3 className="text-[3.75rem] leading-none pb-[1.25rem]">CRM</h3>
        <p className="text-[1.5rem] pb-[2rem]">
          ElimirepetitsElimtasduhuman error with intelligent automation across
          all business processes
        </p>
      </CardContent>

      <CardFooter className="p-0 self-start">
       
        <Button
          className="text-[1.5rem] rounded-full h-[3.75rem] w-[3.75rem]
                     bg-transparent border-2 border-gray-400
                     transition-[background-color,border-color,transform] duration-200
                     group-hover:bg-[#3e4f42] group-hover:border-transparent"
        >
        
          <ArrowUpRight className="w-[50px] h-[50px] text-black transition-colors duration-200 group-hover:text-white" />
        </Button>
      </CardFooter>
    </MotionCard>
  );
};

export default CardComponent;
