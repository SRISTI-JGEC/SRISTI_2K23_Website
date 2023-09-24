"use client";
import EventCard from "@/components/events-page/EventCard";
import Image from "next/image";
import { motion } from "framer-motion";

const techeEvents = [
  {
    id: 1,
    category: "robotics",
    events: [
      { name: "mazemarize", link: "/events/mazemarize" },
      { name: "robo soccer", link: "/events/roboSoccer" },
      { name: "sputnik", link: "/events/sputnik" },
    ],
    image: "/Images/batch1.png",
    inverted: false,
  },
  {
    id: 2,
    category: "civilised",
    events: [
      { name: "rotolare", link: "/events/rotolare" },
      { name: "bridge the gap", link: "/events/bridgeTheGap" },
    ],
    image: "/Images/batch2.png",
    inverted: true,
  },
  {
    id: 3,
    category: "techmania",
    events: [
      { name: "code chronicles", link: "/events/codeChronicles" },
      { name: "css battle", link: "/events/cssBattle" },
      { name: "capture the flag", link: "/events/captureTheFlag" },
    ],
    image: "/Images/batch3.png",
    inverted: false,
  },
  {
    id: 4,
    category: "management",
    events: [
      { name: "shark tank jolu", link: "/events/sharkTankJolu" },
      { name: "j-buzz", link: "/events/jBuzz" },
    ],
    image: "/Images/batch5.png",
    inverted: true,
  },
  {
    id: 5,
    category: "exhibition",
    events: [{ name: "techzibition", link: "/events/techzibition" }],
    image: "/Images/Batch1.png",
    inverted: false,
  },
];

const page = () => {
  return (
    <>
      <div className=" overflow-x-hidden h-screen w-full bg-leaderboard_Image overflow-y-scroll  bg-no-repeat bg-cover">
        <motion.div className="relative text-white mb-2">
          <div className=" flex justify-center items-center flex-col mt-24">
            <h1 className="capitalize text-5xl sm:text-6xl text-white font-semibold ">
              Events
            </h1>
            <Image
              src={
                "/Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png"
              }
              alt={"something"}
              width={300}
              height={300}
              draggable={false}
              className="max-sm:w-[15rem]"
            />
          </div>
          {techeEvents.map((event, index) => (
            <EventCard key={index} props={event} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default page;
