"use client"
import EventCard from "@/components/events-page/EventCard";
import Image from "next/image";
import { motion } from "framer-motion";

const techeEvents = [
  {
    id: 1,
    category: "Robotics",
    events: [
      { name: "TECHZIBITION", link: "/events/hii" },
      { name: "ROBO-SOCCER", link: "/events/" },
      { name: "MAZE-MERIZE", link: "/events/" },
    ],
    image: "/Images/batch1.png",
    inverted: false,
  },
  {
    id: 2,
    category: "Civilised",
    events: [
      { name: "BRIDGE-THE-GAP", link: "/events/" },
      { name: "ROTOLARE", link: "/events/" },
    ],
    image: "/Images/batch1.png",
    inverted: true,
  },
  {
    id: 3,
    category: "Robotics",
    events: [
      { name: "TECHZIBITION", link: "/events/" },
      { name: "ROBO-SOCCER", link: "/events/" },
      { name: "MAZE-MERIZE", link: "/events/" },
    ],
    image: "/Images/batch1.png",
    inverted: false,
  },
  {
    id: 4,
    category: "Civilised",
    events: [
      { name: "BRIDGE-THE-GAP", link: "/events/" },
      { name: "ROTOLARE", link: "/events/" },
    ],
    image: "/Images/batch1.png",
    inverted: true,
  },
  {
    id: 5,
    category: "Robotics",
    events: [
      { name: "TECHZIBITION", link: "/events/" },
      { name: "ROBO-SOCCER", link: "/events/" },
      { name: "MAZE-MERIZE", link: "/events/" },
    ],
    image: "/Images/Batch2.png",
    inverted: false,
  },
];

const Page = () => {
  return (
    <>
      <div className=" overflow-x-hidden h-screen w-full bg-leaderboard_Image overflow-y-scroll  bg-no-repeat bg-cover">
        <motion.div
        className="relative text-white mb-2">
          <div className=" flex justify-center items-center flex-col mt-24  text-center w-full text-6xl font-semibold">
            <p>Events</p>
            <Image
              src={
                "/Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png"
              }
              alt={"something"}
              width={300}
              height={300}
              draggable={false}
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

export default Page;
