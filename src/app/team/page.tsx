"use client";
import StudentsTeam from "@/components/StudentsTeam";
import TeachersTeam from "@/components/TeachersTeam";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function page() {
  return (
    <>
      <Image
        alt=""
        priority
        width={1000}
        height={1000}
        className="-z-10 fixed inset-0 w-full h-full object-cover"
        src="/team-bg.jpg"
        draggable={false}
      />
      <div className="flex flex-col items-center mt-24 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center font-bold text-3xl lg:text-6xl  font-griffy"
        >
          Our Team
          <Image
            alt=""
            height={300}
            width={300}
            className="w-48 lg:w-full"
            src={`/underline-wand.png`}
            draggable={false}
          />
        </motion.h1>
        <TeachersTeam />
        <StudentsTeam />
      </div>
    </>
  );
}

export default page;
