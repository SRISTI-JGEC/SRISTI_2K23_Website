import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="h-screen text-white py-8">
      <div className="w-full text-3xl md:text-5xl font-medium px-24 p-9">
        Our sponsors
        <Image
          src={
            "/Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png"
          }
          alt={"something"}
          width={300}
          height={300}
          className="h-5 md:h-8 mt-2"
          draggable={false}
        />
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-y-24 md:gap-y-0 mt-20">
          <div>
            <Image
              src={"/Images/Untitled-2.png"}
              alt={"something"}
              width={600}
              height={600}
              className=""
              draggable={false}
            />
          </div>
          <div>
            <h1>10000</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
