"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

function TeachersTeam() {
  const teachersDetails = [
    {
      name: "Prof. Subranta Roy Choudhury",
      designation: "Chairman",
      imgLink:
        "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg",
    },
    {
      name: "Dr. Santanu Das",
      designation: "Member",
      imgLink:
        "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg",
    },
    {
      name: "Dr. Dipak Kumar Kole",
      designation: "Member",
      imgLink:
        "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg",
    },
    {
      name: "Dr. Jishan Mahedi",
      designation: "Member",
      imgLink:
        "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg",
    },
    {
      name: "Prof. Debjyoti Chatterjee",
      designation: "Member",
      imgLink:
        "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg",
    },
    {
      name: "Mr. Vivekananda Biswas",
      designation: "Converner",
      imgLink:
        "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, y: 0 });
    }
  }, [isInView]);

  return (
    <div className="w-full">
      <motion.h1
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className=" flex flex-col items-center text-2xl lg:text-4xl  text-[#ecebeb] py-4 pb-8"
      >
        Teachers Team
        <Image
          alt=""
          height={200}
          width={200}
          className="w-36 lg:w-60"
          src={`/underline-wand.png`}
          draggable={false}
        />
      </motion.h1>
      <div>
        <div
          ref={ref}
          className="flex max-w-[90rem] mx-auto justify-center items-center flex-wrap gap-x-5 sm:gap-x-20 pb-10 gap-y-4 lg:px-10"
        >
          {teachersDetails.map((details, ind) => (
            <motion.div
              initial={{ opacity: 0, y: 75 }}
              animate={mainControls}
              transition={{ duration: 0.8, delay: 0.3 }}
              key={ind}
              className="flex flex-col items-center justify-start w-36 h-56 sm:w-44 sm:h-72 gap-4 "
            >
              <div className="relative ">
                <Image
                  height={150}
                  width={150}
                  src={details.imgLink}
                  alt={details.name}
                  className="rounded-full p-1 mx-auto h-32 w-32 sm:w-44 sm:h-44 "
                />
              </div>
              <div>
                <p className="text-center font-bold">{details.name}</p>
                <p className="text-center">{details.designation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeachersTeam;
