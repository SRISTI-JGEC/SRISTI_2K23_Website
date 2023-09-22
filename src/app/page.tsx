import Heading from "@/components/Heading";
import Reviews from "@/components/Reviews";
import Sponsors from "@/components/Sponsors";
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
              />
            </div>
            <div className="flex flex-col items-center">
              {/* Sristi Name */}
              <div className="ml-5 relative top-10">
                <Image
                  src="/Images/Sristi1.png"
                  alt="something"
                  width={400}
                  height={200}
                />
              </div>
              <div className="relative bottom-10">
                <Image
                  src="/Images/2430348-middle-removebg-preview45.png"
                  alt="Broom"
                  width={450}
                  height={250}
                />
              </div>
              <div className="ml-20 relative bottom-20 right-5">
                <Image
                  src="/Images/Sristi2.png"
                  alt="something"
                  width={250}
                  height={150}
                />
              </div>
            </div>
          </div>
          <div className="text-white text-4xl text-center pt-20r">
            <h1>
              <span className="font-bold">NORTH BENGAL’S</span> biggest
            </h1>
            <h1>Techno Management fest</h1>
          </div>
        </div>
        {/* ************************************* About section ******************************************** */}
        <div className="w-full max-w-[1300px] mt-24 min-h-screen mx-auto p-4">
          <Heading />
          <div className="flex flex-col md:flex-row justify-between ">
            <div className="flex flex-col">
              <div className="m-5 relative  flex justify-center items-center ">
                <Image
                  src="/block.png"
                  alt="something"
                  width={600}
                  height={600}
                />
                <div className="absolute top-0 text-[#e4e4e4] w-[80%] mt-8">
                  <div className="my-4 flex justify-center items-center flex-col">
                    <h1 className="capitalize text-3xl text-white font-semibold ">
                      about
                    </h1>
                    <Image
                      src="/underline-wand.png"
                      alt="underline"
                      width={100}
                      height={200}
                      className=""
                    />
                  </div>
                  <p className="text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Necessitatibus nemo rerum asperiores impedit ea eveniet.
                    Vitae impedit nobis perferendis corporis asperiores officiis
                    explicabo delectus facilis hic! Impedit, molestias atque a
                    sit dolorum accusamus. Nostrum itaque vel sint, saepe
                    eveniet assumenda quisquam tempora nobis cum incidunt,
                    laboriosam deserunt. Cum, tenetur quisquam.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
 
          <Sponsors/>
    
 
          <Reviews/>
        
      </div>
    </>
  );
}
