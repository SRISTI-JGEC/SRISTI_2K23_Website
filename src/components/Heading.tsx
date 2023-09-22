import Image from "next/image";
function Heading() {
  return (
    <>
      <div className="my-4">
        <h1 className="capitalize text-6xl text-white font-semibold ms-4">about</h1>
        <Image
          src="/underline-wand.png"
          alt="underline"
          width={200}
          height={200}
          className=""
        />
      </div>
    </>
  );
}
export default Heading;
