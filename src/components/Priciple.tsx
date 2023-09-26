import React from "react";
import Image from "next/image";
import stick from "/public/Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png";

const Priciple = () => {
  return (
    <div className="min-h-screen w-full p-2 flex flex-col">
      <div className="p-[10px] flex flex-col items-center">
        <div className="font-griffy text-[2.5rem] text-white tracking-wider mt-12 max-sm:text-[1.6rem] ">
          From Priciples Desk
        </div>
        <Image
          src={stick}
          alt="stick"
          className="w-[30rem] my-[-10px] max-sm:w-[10rem]"
          draggable={false}
        />
      </div>
      <div className="main-message min-h-[70vh] flex justify-between p-5 align-bottom mt-4">
        <Image
          src="/Images/owl.png"
          alt="owl"
          height={150}
          width={150}
          className="object-contain mr-5 max-sm:hidden"
        />
        <div className="font-griffy p-6 relative w-[80%] min-h-full max-sm:w-full  bg-[rgba(0,0,0,0.5)] backdrop-blur-md shadow-md text-white rounded-md">
          <p>
            Today the world economy is experiencing an unprecedented change. At
            present India stands as world&apos;s fifth largest economic power. Indian
            Entrepreneurs emerging as global entrepreneurs. India&apos;s knowledge
            has made it as a preferred destination for outsourcing services from
            India & also India is emerging as a destination for world class RGO
            centres and Innovation hubs. New developments in science and
            technology. media revolution. Internationalization of education and
            the ever expanding competitive environment are revolutionizing, the
            education scene.
            <br />
            <br /> We should therefore conjointly explore new horizons and
            strive to develop a place where we can plant our contributions to
            build the world we dream to live in.
            <br />
            <br /> SRISTI plays a vital role in developing said qualities,
            nurturing talents & acts as a launchpad for innovative Ideas &
            emerging leaders in the technical domain.
            <br />
            <br /> I truly endorse this spirit in the students which forces them
            to bring out the best from each batch & bear the flame of knowledge
            in the name of development & progress.
            <br />
            <br /> I welcome everyone who wants to be a part of this mission &
            Join hands as we shape the world of tomorrow.
          </p>
          <br/>
          <h3 className="text-right">{"~ "}Dr. Amitava Ray</h3>
          <h3 className="text-right">Principal</h3>
          <h3 className="text-right">JGEC</h3>
        </div>
      </div>
    </div>
  );
};

export default Priciple;
