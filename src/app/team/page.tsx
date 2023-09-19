import StudentsTeam from "@/components/StudentsTeam";
import TeachersTeam from "@/components/TeachersTeam";
import React from "react";
import Image from "../../../node_modules/next/image";

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
      />
      <div className="flex flex-col items-center pb-10 text-white">
        <h1 className="text-center font-bold text-5xl lg:text-6xl pt-10 pb-5">
          Our Team
        </h1>

        <TeachersTeam />
        <StudentsTeam />
      </div>
    </>
  );
}

export default page;
