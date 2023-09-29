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
    image: "/Images/batch3.png",
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
    image: "/Images/batch2.png",
    inverted: false,
  },
  {
    id: 4,
    category: "management",
    events: [
      { name: "shark tank jolu", link: "/events/sharkTankJolu" },
      { name: "g-mun", link: "/events/gmun" },
      { name: "Troubleshooter ", link: "/events/troubleshooter  " },
    ],
    image: "/Images/batch5.png",
    inverted: true,
  },

  {
    id: 5,
    category: "Tech-mania",
    events: [
      { name: "techzibition", link: "/events/techzibition" },
      { name: "intra Ricerca", link: "/events/intraRicerca" },
      { name: "Tech Quiz", link: "/events/techQuiz" },
    ],

    image: "/Images/batch1.png",
    inverted: false,
  },
  {
    id: 6,
    category: "J-Buzz",
    events: [
      { name: "chess", link: "/events/chess" },
      { name: "mathemania", link: "/events/mathemania" },
      { name: "code hunt", link: "/events/codeHunt" },
    ],
    image: "/Images/batch3.png",
    inverted: true,
  },
];

const page = () => {
  return (
    <>
      <div className=" overflow-x-hidden h-screen w-full bg-leaderboard_Image overflow-y-scroll  bg-no-repeat bg-cover">
        <motion.div className="relative text-white mb-2">
          <div className=" flex justify-center items-center flex-col mt-24">
            <h1 className="capitalize text-5xl sm:text-6xl text-white font-semibold font-griffy">
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
