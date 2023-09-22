import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Image
        src="/Images/7.wp3067427.jpg"
        alt="events-background"
        height={1000}
        width={1000}
        className="w-full h-screen object-cover fixed top-0 z-0"
      />
      <div className="relative top-10">
        <div className="flex md:flex-row flex-col items-center justify-center">
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
        <div className="text-white text-4xl text-center">
          <h1>
            <span className="font-bold">NORTH BENGAL’S</span> biggest
          </h1>
          <h1>Techno Management fest</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="flex flex-col">
            <div className="m-5">
              <Image
                src="/underline-wand.png"
                alt="something"
                width={400}
                height={200}
                className="z-40"
              />
            </div>
            <div className="m-5 relative">
              <div className="w-96 h-96 relative">
                <div
                  className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-[url('/block.png')] overflow-y-auto scrollbar scrollbar-none "
                ><div className="absolute top-0 left-0 text-white p-4 z-10">
                    <h2 className="text-3xl font-semibold">Your Text Here</h2>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
                  </div></div>

              </div>
            </div>

          </div>
          <div className="m-10 md:mt-10">
            <Image
              src="/Images/Sristi3.png"
              alt="something"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
}
