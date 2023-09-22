"use client";
import React, { useState } from "react";
import Image from "next/image";
import stick from "/public/Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png";
import Link from "next/link";
// import ruleBg from "/public/Images/Untitled-2.png";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Page = () => {
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
    <>
      <Image
        alt="bg"
        priority
        src="/Images/events-bg.jpg"
        width={1000}
        height={1000}
        className="-z-10 fixed inset-0 w-full h-full object-cover"
      />
      <div className="min-h-screen">
        <div className="relative min-h-screen p-10 flex justify-start items-center flex-col bg-center bg-cover bg-no-repeat">
          <div className="p-[10px] flex flex-col items-start">
            <div className="font-griffy text-[2.7rem] text-white tracking-wider mt-12">
              Mesmarise
            </div>
            <Image src={stick} alt="stick" className="w-[10rem] my-[-10px]" />
          </div>
          <div className="relative my-[2rem] flex justify-between items-center p-[2rem] bg-[rgba(0,0,0,0.4)] backdrop-blur-[5px] rounded-[7px] w-[90%] max-[640px]:flex-col max-[640px]:w-[100%] max-[640px]:p-4 max-[640px]:justify-start">
            <div className="relative flex items-center max-[640px]:h-[10rem] max-[640px]:mb-[30px]">
              <video controls className="w-[30rem] relative">
                <source src="/Video/video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="relative min-h-[25rem] bg-rule-bg bg-no-repeat bg-cover bg-center min-w-[45%] flex flex-col items-center justify-start max-[640px]:w-[100%] max-[640px]:min-h-[20rem]">
              <div className="font-griffy text-[2.4rem] text-white tracking-widest max-[640px]:text-[1.5rem]">
                Rules
              </div>
              <Image src={stick} alt="stick" className="w-[5rem] my-[-7px]" />
            </div>
          </div>
        </div>
        <div className=" min-h-screen p-10 flex justify-center items-center flex-col bg-center bg-cover bg-no-repeat">
          <div className="p-[10px] flex flex-col">
            <div className="font-griffy text-[2.7rem] text-white tracking-wide max-[280px]:text-[2rem]">
              Event Leaders
            </div>
            <Image src={stick} alt="stick" className="w-[13.5rem] my-[-10px]" />
          </div>
          <div className="my-[2rem] flex flex-col justify-center items-center w-[80%] max-[640px]:w-[90%]">
            <div className="flex justify-between items-center w-[100%] mb-5 max-[640px]:flex-col">
              <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden flex justify-center items-center bg-[rgba(0,0,0,0.4)] backdrop-blur-[10px] max-[640px]:w-[100px] max-[640px]:h-[100px] max-[640px]:mb-[1.2rem]">
                {/* <Image
                src={ruleBg}
                alt="leader"
                layout="fill"
                objectFit="cover"
              /> */}
              </div>
              <div className="leader-details bg-[rgba(0,0,0,0.4)] w-[80%] ml-[10px] min-h-[120px] rounded-[10px] backdrop-blur-[10px] p-3 max-[640px]:w-full">
                <p className="text-white font-poppins">Here is my details</p>
              </div>
            </div>
            <div className="leader-card flex justify-between items-center w-[100%] flex-row-reverse mb-5 max-[640px]:flex-col">
              <div className="leader-image relative w-[150px] h-[150px] rounded-full overflow-hidden flex justify-center items-center bg-[rgba(0,0,0,0.4)] backdrop-blur-[10px] max-[640px]:w-[100px] max-[640px]:h-[100px] max-[640px]:mb-[1.2rem]">
                {/* <Image
                src={ruleBg}
                alt="leader"
                layout="fill"
                objectFit="cover"
              /> */}
              </div>
              <div className="leader-details bg-[rgba(0,0,0,0.4)] w-[80%] ml-[10px] min-h-[120px] rounded-[10px] backdrop-blur-[10px] p-3 max-[640px]:w-full">
                <p className="text-white font-poppins">Here is my details</p>
              </div>
            </div>
            <div className="leader-card flex justify-between items-center w-[100%] mb-5 max-[640px]:flex-col">
              <div className="leader-image relative w-[150px] h-[150px] rounded-full overflow-hidden flex justify-center items-center bg-[rgba(0,0,0,0.4)] backdrop-blur-[10px] max-[640px]:w-[100px] max-[640px]:h-[100px] max-[640px]:mb-[1.2rem]">
                {/* <Image
                src={ruleBg}
                alt="leader"
                layout="fill"
                objectFit="cover"
              /> */}
              </div>
              <div className="leader-details bg-[rgba(0,0,0,0.4)] w-[80%] ml-[10px] min-h-[120px] rounded-[10px] backdrop-blur-[10px] p-3 max-[640px]:w-full">
                <p className="text-white font-poppins">Here is my details</p>
              </div>
            </div>
          </div>
        </div>
        <div className="event-timing min-h-[60vh] flex flex-col items-center justify-start w-full text-white p-10 bg-center bg-cover bg-no-repeat">
          <h2 className="text-[3rem] font-griffy max-[640px]:text-[2rem] max-[280px]:text-[1rem]">
            Venue: Auditorium Hall
          </h2>
          <h1 className="text-[5rem] font-griffy tracking-wider max-[640px]:text-[2.7rem] text-center max-[280px]:text-[1.5rem]">
            we are starting soon
          </h1>
          <div className="timer flex w-[50rem] justify-between my-[3rem] items-center font-griffy max-[640px]:w-[90%]">
            <div className="days bg-[rgba(0,0,0,0.4)] px-[50px] py-[10px] max-[640px]:px-[10px] max-[640px]:py-[3px] backdrop-blur-[10px]">
              <p className="text-7xl max-[640px]:text-[16px]">
                {timeLeft.days}
              </p>
              <span className="text-[24px] max-[640px]:text-[12px]">Days</span>
            </div>
            <div className="hour bg-[rgba(0,0,0,0.4)] px-[50px] py-[10px] max-[640px]:px-[10px] max-[640px]:py-[3px] backdrop-blur-[10px]">
              <p className="text-7xl max-[640px]:text-[16px]">
                {timeLeft.hours}
              </p>
              <span className="text-[24px] max-[640px]:text-[12px]">Hours</span>
            </div>
            <div className="min bg-[rgba(0,0,0,0.4)] px-[50px] py-[10px] max-[640px]:px-[10px] max-[640px]:py-[3px] backdrop-blur-[10px]">
              <p className="text-7xl max-[640px]:text-[16px]">
                {timeLeft.minutes}
              </p>
              <span className="text-[24px] max-[640px]:text-[12px]">
                Minutes
              </span>
            </div>
            <div className="sec bg-[rgba(0,0,0,0.4)] px-[50px] py-[10px] max-[640px]:px-[10px] max-[640px]:py-[3px] backdrop-blur-[10px]">
              <p className="text-7xl max-[640px]:text-[16px]">
                {timeLeft.seconds}
              </p>
              <span className="text-[24px] max-[640px]:text-[12px]">
                Second
              </span>
            </div>
          </div>
          <div className="actions flex justify-between w-[30rem] max-[640px]:w-[20rem] max-[280px]:w-[15rem]">
            <button className="py-[7px] px-[15px] max-[640px]:py-[4px] max-[640px]:px-[8px] max-[640px]:text-[1rem] bg-rule-bg bg-center bg-cover bg-no-repeat text-white font-griffy text-[1.5rem] tracking-wider">
              Register Now
            </button>
            <Link href={'/events/mesmarise/leaderboard'}><button className="py-[7px] px-[15px] max-[640px]:py-[4px] max-[640px]:px-[8px] max-[640px]:text-[1rem] bg-rule-bg bg-center bg-cover bg-no-repeat text-white font-griffy text-[1.5rem] tracking-wider">
              Leatherboard
            </button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
