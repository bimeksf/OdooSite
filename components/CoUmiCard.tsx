import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const CoUmiCard = ({ className = "" }: { className?: string }) => {
  return (
    <Card
      className={`
        relative w-full aspect-[4/3] overflow-hidden
        p-6 text-left rounded-none group 
        ${className}
      `}
    >
      {/* background */}
      <Image src="/data.png" alt="Odoo ERP" fill className="object-cover z-0" />

      {/* overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* content */}

        <CardContent className=" flex flex-row h-full items-end p-0 z-20">
          <div className=" pr-4">

          <h3 className="text-white text-[2rem] md:text-[2.5rem] leading-none pb-3">
            FINANCE
          </h3>
          <p className="text-white/90 text-[1rem] md:text-[1.125rem] pb-6 leading-relaxed line-clamp-3">
            Eliminate repetitive tasks and reduce human error with intelligent
            automation across all business processes…
          </p>
          </div>

          <CardFooter className="p-0 z-20">
            <Button
              className="rounded-full h-[3rem] w-[3rem]"
              aria-label="Open Finance"
            >
              <ArrowUpRight />
            </Button>
          </CardFooter>
        </CardContent>
    </Card>
  );
};

export default CoUmiCard;
