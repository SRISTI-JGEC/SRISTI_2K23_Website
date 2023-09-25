import Heading from "@/components/Heading";
import Reviews from "@/components/Reviews";
import Sponsors from "@/components/Sponsors";
import Priciple from "@/components/Priciple";
import History from "@/components/History";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-home_bg overflow-y-scroll  bg-no-repeat bg-cover">
        <div className="w-full max-w-[1300px] mt-24 min-h-screen mx-auto p-4">
          <div className="flex md:flex-row flex-col items-center justify-evenly">
            <div>
              <Image
                src="/Images/Sristi3.png"
                alt="Sristi Logo"
                width={400}
                height={300}
                draggable={false}
                className="max-sm:w-[15rem]"
              />
            </div>
            <div className="flex flex-col items-center">
              {/* Sristi Name */}
              <div className="sm:ml-5 relative top-10">
                <Image
                  src="/Images/Sristi1.png"
                  alt="something"
                  width={400}
                  height={200}
                  draggable={false}
                  className="max-sm:w-[15rem]"
                />
              </div>
              <div className="relative sm:bottom-10 bottom-0">
                <Image
                  src="/Images/2430348-middle-removebg-preview45.png"
                  alt="Broom"
                  width={450}
                  height={250}
                  draggable={false}
                  className="max-sm:w-[15rem]"
                />
              </div>
              <div className="sm:ml-20 relative bottom-4 sm:bottom-20 right-5 flex items-center justify-center">
                <Image
                  src="/Images/Sristi2.png"
                  alt="something"
                  width={250}
                  height={150}
                  draggable={false}
                  className="max-sm:w-[10rem] mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="text-white text-xl font-semibold  sm:text-4xl text-center pt-20r">
            <h1>
              <span className="font-bold text-3xl">NORTH BENGAL’S</span> biggest
            </h1>
            <h1>Techno Management fest</h1>
          </div>
        </div>
        {/* ************************************* About section ******************************************** */}
        <div className="w-full max-w-[1300px] mt-24 min-h-screen mx-auto p-4">
          <Heading header={"About"} />
          <div className="flex flex-col md:flex-row justify-between ">
            <div className="flex flex-col">
              <div className="sm:m-5 relative  flex justify-center items-center ">
                <Image
                  src="/block.png"
                  alt="something"
                  width={600}
                  height={600}
                  draggable={false}
                  className="max-sm:h-[25rem]"
                />
                <div className="absolute top-0 text-[#e4e4e4] w-[80%] mt-4 sm:mt-8">
                  <p className="text-sm sm:text-lg">
                    Welcome to Sristi, North Bengal&apos;s largest
                    Techno-Management Fest!founded with a vision to inspire and
                    nurture the leaders ,thinkers and creators of tomorrow,
                    Sristi has evolved into the biggest annual event in the
                    region. Our mission is to bridge the gap between academia
                    and industry, offering a diverse range of competitions,
                    workshops and networking opportunities.With expert speakers,
                    an innovation hub,and a focus on learning and growth, Sristi
                    is more than an event, it&apos;s a moment.Join us in
                    celebrating innovation, collaboration and excellence at
                    Sristi, where we engineer a brighter tomorrow!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Priciple />
        <History />
        <Sponsors />
        <Reviews />
      </div>
    </>
  );
}
