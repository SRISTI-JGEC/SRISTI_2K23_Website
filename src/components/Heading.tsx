import Image from "next/image";
function Heading(props: any) {
  return (
    <>
      <div className="mb-4 flex flex-col justify-center items-center">
        <h1 className="capitalize text-5xl sm:text-6xl text-white font-semibold ">
          {props.header}
        </h1>
        <Image
          src="/underline-wand.png"
          alt="underline"
          width={300}
          height={300}
          className="max-sm:w-[15rem]"
        />
      </div>
    </>
  );
}
export default Heading;
