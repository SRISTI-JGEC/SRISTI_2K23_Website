"use client";
import React, { useState } from "react";
import Image from "next/image";
import stick from "/public/Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png";
import { time } from "console";
// import ruleBg from "/public/Images/Untitled-2.png";
// import { BsFillCalendarEventFill } from "react-icons/bs";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const page: React.FC = () => {
  const eventStartTime = new Date("Oct 3, 2023 12:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  setInterval(() => {
    let now = new Date().getTime();
    let timeLeft = eventStartTime - now;
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    setTimeLeft({ days, hours, minutes, seconds });
  }, 1000);

  return (
    <div className="min-h-screen">
      <div className="relative min-h-screen p-10 flex justify-start items-center flex-col bg-center bg-cover bg-no-repeat bg-event-back-image h-screen">
        <div className="p-[10px] flex flex-col items-start">
          <div className="font-harry text-[2.7rem] text-white tracking-wider">
            Mesmarise
          </div>
          <Image src={stick} alt="stick" className="w-[10rem] my-[-10px]" />
        </div>
        <div className="main-body my-[2rem] flex justify-around items-center p-[2rem] bg-[rgba(0,0,0,0.4)] backdrop-blur-[5px] rounded-[7px] w-[90%]">
          <div className="event-video relative min-h-[50vh] flex items-center">
            <video controls className="w-[500px] relative">
              <source src="/Video/video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="event-rules relative min-h-[60vh] bg-rule-bg bg-no-repeat bg-cover bg-center min-w-[45%] flex flex-col items-center justify-start">
            <div className="font-harry text-[2.4rem] text-white tracking-widest">
              Rules
            </div>
            <Image src={stick} alt="stick" className="w-[5rem] my-[-7px]" />
          </div>
        </div>
      </div>
      <div className="event-leaders min-h-screen p-10 flex justify-center items-center flex-col bg-center bg-cover bg-no-repeat bg-event-back-image h-screen">
        <div className="p-[10px] flex flex-col">
          <div className="font-harry text-[2.7rem] text-white tracking-wide">
            Event Leaders
          </div>
          <Image src={stick} alt="stick" className="w-[13.5rem] my-[-10px]" />
        </div>
        <div className="leaders-body my-[2rem] flex flex-col justify-center items-center w-[80%]">
          <div className="leader-card flex justify-between items-center w-[100%] mb-5">
            <div className="leader-image relative w-[150px] h-[150px] rounded-full overflow-hidden flex justify-center items-center bg-[rgba(0,0,0,0.4)] backdrop-blur-[10px]">
              {/* <Image
                src={ruleBg}
                alt="leader"
                layout="fill"
                objectFit="cover"
              /> */}
            </div>
            <div className="leader-details bg-[rgba(0,0,0,0.4)] w-[80%] ml-[10px] h-[120px] rounded-[10px] backdrop-blur-[10px] p-3">
              <p className="text-white font-poppins">Here is my details</p>
            </div>
          </div>
          <div className="leader-card flex justify-between items-center w-[100%] flex-row-reverse mb-5">
            <div className="leader-image relative w-[150px] h-[150px] rounded-full overflow-hidden flex justify-center items-center bg-[rgba(0,0,0,0.4)] backdrop-blur-[10px]">
              {/* <Image
                src={ruleBg}
                alt="leader"
                layout="fill"
                objectFit="cover"
              /> */}
            </div>
            <div className="leader-details bg-[rgba(0,0,0,0.4)] w-[80%] ml-[10px] h-[120px] rounded-[10px] backdrop-blur-[10px] p-3">
              <p className="text-white font-poppins">Here is my details</p>
            </div>
          </div>
          <div className="leader-card flex justify-between items-center w-[100%] mb-5">
            <div className="leader-image relative w-[150px] h-[150px] rounded-full overflow-hidden flex justify-center items-center bg-[rgba(0,0,0,0.4)] backdrop-blur-[10px]">
              {/* <Image
                src={ruleBg}
                alt="leader"
                layout="fill"
                objectFit="cover"
              /> */}
            </div>
            <div className="leader-details bg-[rgba(0,0,0,0.4)] w-[80%] ml-[10px] h-[120px] rounded-[10px] backdrop-blur-[10px] p-3">
              <p className="text-white font-poppins">Here is my details</p>
            </div>
          </div>
        </div>
      </div>
      <div className="event-timing min-h-[80vh] flex flex-col items-center justify-start w-full text-white p-10 bg-center bg-cover bg-no-repeat bg-event-back-image h-screen">
        <h2 className="text-[3rem] font-harry ">Venue: Auditorium Hall</h2>
        <h1 className="text-[5rem] font-harry tracking-wider">
          we are starting soon
        </h1>
        <div className="timer flex w-[70%] justify-between my-[5rem] items-center font-harry">
          <div className="days bg-[rgba(0,0,0,0.4)] px-[50px] py-[10px] backdrop-blur-[10px]">
            <p className="text-7xl">{timeLeft.days}</p>
            <span className="text-[24px]">Days</span>
          </div>
          <div className="hour bg-[rgba(0,0,0,0.4)] px-[50px] py-[10px] backdrop-blur-[10px]">
            <p className="text-7xl">{timeLeft.hours}</p>
            <span className="text-[24px]">Hours</span>
          </div>
          <div className="min bg-[rgba(0,0,0,0.4)] px-[50px] py-[10px] backdrop-blur-[10px]">
            <p className="text-7xl">{timeLeft.minutes}</p>
            <span className="text-[24px]">Minutes</span>
          </div>
          <div className="sec bg-[rgba(0,0,0,0.4)] px-[50px] py-[10px] backdrop-blur-[10px]">
            <p className="text-7xl">{timeLeft.seconds}</p>
            <span className="text-[24px]">Second</span>
          </div>
        </div>
        <div className="actions flex justify-between min-w-[50%]">
          <button className="py-[7px] px-[15px] bg-rule-bg bg-center bg-cover bg-no-repeat text-white font-harry text-[1.5rem] tracking-wider">
            Register Now
          </button>
          <button className="py-[7px] px-[15px] bg-rule-bg bg-center bg-cover bg-no-repeat text-white font-harry text-[1.5rem] tracking-wider">
            Leatherboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
