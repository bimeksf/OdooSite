"use client"
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { ArrowUpRight } from "lucide-react";
import { motion } from 'motion/react';
const CardComponent = () => {
  const MotionCard = motion(Card);
  return (
    <MotionCard
      initial={{
        borderRadius: 0,
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        color: "#000000",
      }}
      whileHover={{
        background: "#ebe9da",
        color: "#3e4f42",
        borderTopRightRadius: 100,
        borderColor: "transparent",
      }}
      transition={{
        type: "tween",
        duration: 0.25, // celková doba
        ease: "easeOut",
        borderRadius: { duration: 0.3 },
        backgroundColor: { duration: 0.25 },
        borderColor: { duration: 0.25 },
      }}
      className="w-[25.875rem] h-[31.25rem] flex items-start   p-[1.5rem] text-left border-4 border-black rounded-none"
    >
      <CardHeader className="p-0 flex-shrink-0 pb-[1rem]">
        <Avatar className="h-[5rem] w-[5rem]">
          <AvatarImage src="/crm.svg" alt="Odoo ERP" />
        </Avatar>
      </CardHeader>

      <CardContent className="p-0  ">
        <h3 className="text-[3.75rem] leading-none pb-[1.25rem]">CRM</h3>
        <p className="text-[1.5rem] pb-[2rem]">
          ElimirepetitsElimtasduhuman error with intelligent automation across
          all business processes
        </p>
      </CardContent>

      <CardFooter className="p-0 self-start ">
        <Button className="text-[1.5rem] rounded-full h-[3.75rem] w-[3.75rem]">
          <ArrowUpRight style={{ width: "50px", height: "50px" }} />
        </Button>
      </CardFooter>
    </MotionCard>
  );
}

export default CardComponent