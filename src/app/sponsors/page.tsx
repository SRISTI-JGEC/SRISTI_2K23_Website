import React from "react";
import Image from "next/image";
import stick from "/public/Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png";

const Page = () => {
  return (
    <>
      <Image
        alt="bg"
        priority
        src="/Images/login-bg.jpg"
        width={1000}
        height={1000}
        className="-z-10 fixed inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div className="min-h-[90vh] w-full flex flex-col justify-start py-24 font-griffy">
        <div className=" w-full flex flex-col justify-start items-center">
          <div className="p-[10px] flex flex-col items-center px-8 justify-center">
            <div className="font-griffy text-[2.7rem] text-white tracking-wider max-sm:text-[2rem] ">
              Sponsors
            </div>
            <Image
              src={stick}
              alt="stick"
              className="w-[20rem] my-[-10px]"
              draggable={false}
            />
          </div>
          {/* <div className="flex justify-center items-center mt-5">
            <p className="w-3/4 bg-cover bg-center p-3 backdrop-blur-md text-[#f5f5f5] bg-rule-bg bg-no-repeat min-h-[400px] max-sm:w-[90%] text-md">
              Dear Esteemed Sponsors,
              <br />
              <br />
              We are thrilled to extend a warm and hearty welcome to you as we
              gear up for the most anticipated tech fest of the year, Sristi:
              Igniting Innovation. Your presence here is a testament to your
              unwavering support for innovation, technology, and the future of
              our world.Sristi has always stood as a beacon of creativity and an
              incubator of groundbreaking ideas. It&apos;s a platform where
              technology and imagination converge, sparking solutions that
              redefine the boundaries of what&apos;s possible. None of this would be
              possible without your generous support.
              <br />
              <br />
              Your investment in Sristi goes beyond financial assistance; it&apos;s
              an investment in the dreams and aspirations of countless young
              minds who are eager to make their mark on the tech world. Your
              partnership empowers them to explore, innovate, and create with a
              sense of purpose.Throughout the event, you&apos;ll witness the
              incredible talent, enthusiasm, and dedication of our participants.
              We encourage you to engage with them, exchange ideas, and be
              inspired by the next generation of tech visionaries.
              <br />
              <br />
              Once again, thank you for your invaluable support. Together, we
              will make Sristi: Igniting Innovation an unforgettable experience
              that will inspire, educate, and leave a lasting impact on all who
              participate.Let&apos;s embark on this exciting journey of innovation
              together and make Sristi 2023 a grand success. Welcome to the
              future!
              <br />
              <br />
              With warm regards,
              <br />
              [Your Name]
              <br />
              [Your Title]
              <br />
              Sristi Organizing Committee
            </p>
          </div> */}
          <div className="text-right w-full flex justify-end items-end mt-5 bg-[linear-gradient(90deg,transparent,#232323)] text-white">
            {/* <p className="w-2/4 p-2 max-sm:w-full">
              *Deliverables are subject to negotiation. Interested sponsors may
              contact to us directly for any queries regarding deliverables.
            </p> */}
          </div>
        </div>
        <div className="min-h-screen w-full flex flex-col p-2 ">
          <div className="flex items-end justify-end w-full mt-20">
            <div className="w-3/4 flex justify-end p-5 bg-[rgba(0,0,0,0.7)] backdrop-blur-md text-white items-start max-sm:w-full min-h-full">
              <div className="relative flex flex-col justify-start items-start w-[80%] max-sm:w-full">
                <div className="flex justify-between items-center w-full max-sm:flex-col max-sm:items-start max-sm:justify-start">
                  <div className="px-[10px] flex flex-col items-start justify-center w-full max-sm:items-end">
                    <div className="sm:ps-8 relative font-griffy text-3xl text-yellow-400 tracking-wider max-sm:text-2xl text-center font-semibold max-sm:pe-4">
                      Chaska
                    </div>
                    <Image
                      src={stick}
                      alt="stick"
                      className="w-[12rem] my-[-10px] max-sm:w-[8rem] max-sm:my-[-5px]"
                      draggable={false}
                    />
                  </div>
                  {/* <p className="text-5xl text-right w-full max-sm:text-3xl text-yellow-400 max-sm:pl-2 max-sm:pt-2">
                    {"₹"}75,000
                  </p> */}
                </div>
                <div className="flex justify-evenly mt-6 min-h-full max-sm:flex-col">
                  <Image src={"/Images/chaska.jpg"} alt="images" width={300} height={300} />
                  <div className="sm:ms-8 text-lg sm:text-2xl font-griffy max-sm:my-4">
                    <p>
                      MOB: <span>8101304665 / 8597636327</span>
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src="/Images/QWC_1.png"
                alt="logo"
                height={250}
                width={250}
                className="absolute -top-10 -left-10 max-sm:h[100px] max-sm:w-[200px]"
              />
            </div>
          </div>
          {/* <div className="flex items-end justify-start w-full mt-20 ">
            <div className="w-3/4 flex justify-start p-5 bg-[rgba(0,0,0,0.7)] backdrop-blur-md text-white items-start max-sm:w-full min-h-full">
              <div className="relative flex flex-col justify-start items-start w-[80%] max-sm:w-full">
                <div className="flex justify-between items-center w-full max-sm:flex-col max-sm:items-start max-sm:justify-start">
                  <div className="px-[10px] flex flex-col items-start justify-start w-full">
                    <div className="relative font-griffy text-[2rem] text-yellow-400 tracking-wider max-sm:text-[1.3rem]">
                      Merch Sponsor
                    </div>
                    <Image
                      src={stick}
                      alt="stick"
                      className="w-[16rem] my-[-10px] max-sm:w-[12rem] max-sm:my-[-5px]"
                      draggable={false}
                    />
                  </div>
                  <p className="text-5xl text-right w-full max-sm:text-3xl max-sm:pl-2 text-yellow-400 max-sm:pt-2 max-sm:text-left">
                    {"₹"}40,000
                  </p>
                </div>
                <div className="flex flex-col mt-6 min-h-full">
                  {"- "}Online promotion of your Brand on Social Media Handles
                  <br />
                  {"- "}Promotion of Brand on print
                  media/hoarding/flex/banners/boards/radio
                  <br />
                  {"- "}Spots with logo and name in the college premise.
                  <br />
                  {"- "}Brand promotion on merchandise (T-shirts, Awards and
                  SRISTI mementos)
                  <br />
                  {"- "}Promotion of the Brand during the Pre-SRISTI Workshops &
                  all Online/Offline Events
                  <br />
                  {"- "}Accommodation (Lodging & Fooding) for 1 person who may
                  visit the Campus during SRISTI
                </div>
              </div>
              <Image
                src="/Images/QWC_1.png"
                alt="logo"
                height={250}
                width={250}
                className="absolute -top-10 -right-5 max-sm:h[100px] max-sm:w-[200px]"
              />
            </div>
          </div>
          <div className="flex items-end justify-end w-full mt-20 ">
            <div className="w-3/4 flex justify-end p-5 bg-[rgba(0,0,0,0.7)] backdrop-blur-md text-white items-start max-sm:w-full min-h-full">
              <div className="relative flex flex-col justify-start items-start w-[80%] max-sm:w-full">
                <div className="flex justify-between items-center w-full max-sm:flex-col max-sm:items-start max-sm:justify-start">
                  <div className="px-[10px] flex flex-col items-start justify-start w-full max-sm:items-end">
                    <div className="relative font-griffy text-[2rem] text-yellow-400 tracking-wider max-sm:text-[1.3rem]">
                      Event Sponsor
                    </div>
                    <Image
                      src={stick}
                      alt="stick"
                      className="w-[16rem] my-[-10px] max-sm:w-[12rem] max-sm:my-[-5px]"
                      draggable={false}
                    />
                  </div>
                  <p className="text-5xl text-right w-full max-sm:text-3xl text-yellow-400 max-sm:pl-2 max-sm:pt-2">
                    {"₹"}10,000-30,000
                  </p>
                </div>
                <div className="flex flex-col mt-6 min-h-full">
                  {"- "}Online promotion of your Brand on Social Media Handles
                  <br />
                  {"- "}Brand Promotion on Event Banners/flex/hoardings
                  <br />
                  {"- "}Brand shoutouts during the event
                  <br />
                  {"- "}Brand promotion in Event awards, goodies & mementos.
                </div>
              </div>
              <Image
                src="/Images/QWC_1.png"
                alt="logo"
                height={250}
                width={250}
                className="absolute -top-10 -left-10 max-sm:h[100px] max-sm:w-[200px]"
              />
            </div>
          </div>
          <div className="flex items-end justify-start w-full mt-20 ">
            <div className="w-3/4 flex justify-start p-5 bg-[rgba(0,0,0,0.7)] backdrop-blur-md text-white items-start max-sm:w-full min-h-full">
              <div className="relative flex flex-col justify-start items-start w-[80%] max-sm:w-full">
                <div className="flex justify-between items-center w-full max-sm:flex-col max-sm:items-start max-sm:justify-start">
                  <div className="px-[10px] flex flex-col items-start justify-start w-full">
                    <div className="relative font-griffy text-[2rem] text-yellow-400 tracking-wider max-sm:text-[1.3rem]">
                      Theme Sponsor
                    </div>
                    <Image
                      src={stick}
                      alt="stick"
                      className="w-[16rem] my-[-10px] max-sm:w-[12rem] max-sm:my-[-5px]"
                      draggable={false}
                    />
                  </div>
                  <p className="text-5xl text-right w-full max-sm:text-3xl text-yellow-400 max-sm:pl-2 max-sm:pt-2 max-sm:text-left">
                    {"₹"}30,000
                  </p>
                </div>
                <div className="flex flex-col mt-6 min-h-full">
                  {"- "}CHoose any of our segment and join us as the exclusive
                  sponsor for that segment, i.e. Sponsor Code Chronicles and/or
                  Mech-Mavericks and/or civilised and so on
                  <br />
                  {"- "}Uncompromised promotion of brand & product during the
                  events.
                  <br />
                  {"- "}Use of the branding provided on any and all printed
                  media used for the events, along with social media mention as
                  THEME SPONSOR.
                  <br />
                  {"- "}Accomodation (Lodging & Fooding) for 1 person who may
                  visit the Campus during SRISTI
                  <br />
                  {"- "}One 30 min slot of stage time for marketing and audience
                  interaction.
                </div>
              </div>
              <Image
                src="/Images/QWC_1.png"
                alt="logo"
                height={250}
                width={250}
                className="absolute -top-10 -right-5 max-sm:h[100px] max-sm:w-[200px]"
              />
            </div>
          </div>
        </div>
        <div className="min-h-[50vh] w-full p-10 grid grid-cols-3 gap-10 text-white max-sm:grid-cols-1 max-lg:grid-cols-2 mt-10">
          <div className="min-h-full flex flex-col justify-start items-center p-5 bg-[rgba(0,0,0,0.6)] backdrop-blur-md">
            <h3 className="text-2xl text-yellow-300">Stall For Promotion</h3>
            <h3 className="text-2xl text-yellow-300">{"₹ "}30,000</h3>
            <div className="flex flex-col justify-start items-center mt-5 text-lg">
              {"- "}One stall area to be alloted at the SRISTI - JGEC Campus.
              <br />
              {"- "}Accommodation (Lodging & Fooding) for one person throughout
              the event.
            </div>
          </div>
          <div className="min-h-full flex flex-col justify-start items-center p-5 bg-[rgba(0,0,0,0.6)] backdrop-blur-md">
            <h3 className="text-2xl text-yellow-300">Online Promotion</h3>
            <h3 className="text-2xl text-yellow-300">{"₹ "}12,000</h3>
            <div className="flex flex-col justify-start items-center mt-5 text-lg">
              {"- "}Online Interaction of official SRISTI social media accounts
              with the concerned firm.
              <br />
              {"- "}Promotion through Instagram Reels, videos and creatives.
              <br />
              {"- "}Mentions & Shoutouts on website & promotional content.
            </div>
          </div>
          <div className="min-h-full flex flex-col justify-start items-center p-5 bg-[rgba(0,0,0,0.6)] backdrop-blur-md">
            <h3 className="text-2xl text-yellow-300">Posters and Banners</h3>
            <h3 className="text-2xl text-yellow-300">{"₹ "}8,000</h3>
            <div className="flex flex-col justify-start items-center mt-5 text-lg">
              .{"- "}Print media ad, hoarding flexes poster, banner board and
              radio spot with logo and name in the premises.
              <br />
              {"- "}Posters and banners should be provided by firm
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Page;
