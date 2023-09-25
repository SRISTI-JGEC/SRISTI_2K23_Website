import React from "react";
import Image from "next/image";
import stick from "/public/Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png";

const History = () => {
  return (
    <div className="min-h-[80vh] w-full flex flex-col justify-start font-griffy">
      <div className="p-[10px] flex flex-col items-start px-8 justify-start">
        <div className="font-griffy text-[2.7rem] text-white tracking-wider max-sm:text-[2rem]">
          Sristi and JGEC
        </div>
        <Image
          src={stick}
          alt="stick"
          className="w-[20rem] my-[-10px]"
          draggable={false}
        />
      </div>
      <div className="w-full flex justify-end items-end min-h-[20%] mt-5 flex-col">
        <p className="w-[60%] max-sm:w-full min-h-full bg-[rgba(0,0,0,0.5)] p-5 text-yellow-300 text-lg backdrop-blur-md">
          SRISTI has been at the pinnacle of innovation in JGEC since its
          inception in 2010. Since then, we have seen hordes of enthusiastic
          minds. Geeks and acholastic maters add to its glory every year.
        </p>
        <div className="min-h-full w-full flex flex-col justify-start items-start p-10 text-white text-2xl max-sm:text-lg max-sm:p-5">
          {"- "} 12 Years of experience in tech and innovation
          <br />
          {"- "} 20+ unique events with attractive prizes
          <br />
          {"- "} above 2,00,000 worth of prize and gifts
          <br />
          {"- "} 07, A week long of workshops and pre-events
          <br />
          {"- "} 04 Days of technological grandeur
          <br />
          {"- "} 15+ partner college involved
          <br />
          {"- "} 2000+ cumulative footfall
        </div>
      </div>
    </div>
  );
};

export default History;
