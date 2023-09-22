import EventCard from "@/components/events-page/EventCard";
import Image from "next/image";

const techeEvents = [
  {
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
    category: "Civilised",
    events: [
      { name: "BRIDGE-THE-GAP", link: "/events/" },
      { name: "ROTOLARE", link: "/events/" },
    ],
    image: "/Images/batch1.png",
    inverted: true,
  },
  {
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
    category: "Civilised",
    events: [
      { name: "BRIDGE-THE-GAP", link: "/events/" },
      { name: "ROTOLARE", link: "/events/" },
    ],
    image: "/Images/batch1.png",
    inverted: true,
  },
  {
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

const page = () => {
  return (
    <>
      <div className="h-screen w-full bg-leaderboard_Image overflow-y-scroll  bg-no-repeat bg-cover">
        <div className="relative text-white">
          <div className=" flex justify-center items-center flex-col mt-24  text-center w-full text-6xl font-semibold">
            <p>Events</p>
            <Image
              src={
                "/Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png"
              }
              alt={"something"}
              width={300}
              height={300}
            />
          </div>
          {techeEvents.map((event, index) => (
            <EventCard key={index} props={event} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
