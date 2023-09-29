import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Image
        alt="bg"
        priority
        src="/Images/43.harry-potter-following-the-darkness-4k-tp.jpg"
        width={1000}
        height={1000}
        className="-z-10 fixed inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div className="min-h-screen w-full flex justify-between items-start mt-20 font-griffy text-white ">
        <div className="w-1/2 flex justify-center items-center py-10 px-4">
          <div className="h-[500px] w-[400px] bg-[rgba(0,0,0,0.6)] backdrop-blur-md p-5 flex flex-col justify-between items-start">
            <div className="flex justify-between items-center w-full text-lg">
              <h4>Name :</h4>
              <p className="font-normal">Saikat Samanta</p>
            </div>
            <div className="flex justify-between items-center w-full text-lg">
              <h4>Email :</h4>
              <p className="font-normal">MyMail@gmail.com</p>
            </div>
            <div className="flex justify-between items-center w-full text-lg">
              <h4>Mobile No :</h4>
              <p className="font-normal">+91 2482348781</p>
            </div>
            <div className="flex justify-between items-center w-full text-lg">
              <h4>Department :</h4>
              <p className="font-normal">Information Technology</p>
            </div>
            <div className="flex justify-between items-center w-full text-lg">
              <h4>Year :</h4>
              <p className="font-normal">1st Year</p>
            </div>
            <div className="flex justify-between items-center w-full text-lg">
              <h4>Roll No :</h4>
              <p className="font-normal">21101106027</p>
            </div>
            <div className="flex justify-between items-center w-full text-lg">
              <h4>Bill No :</h4>
              <p className="font-normal">wri238ry2e28</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 py-10 px-4 flex justify-start items-center flex-col">
          {/* <h1 className="text-4xl font-bold mb-5">My Events</h1> */}
          <div className="min-h-[500px] w-[600px] bg-[rgba(0,0,0,0.6)] p-5 backdrop-blur-sm grid grid-cols-3">
            <button className="card-box h-[80px] w-[160px] flex justify-center items-center text-xl cursor-pointer rounded-md border-white border-2">
              Mesmarise
            </button>
            <button className="card-box h-[80px] w-[160px] flex justify-center items-center text-xl cursor-pointer rounded-md border-white border-2">
              CSS Battle
            </button>
            <button className="card-box h-[80px] w-[160px] flex justify-center items-center text-xl cursor-pointer rounded-md border-white border-2">
              Code Cronicles
            </button>
            <button className="card-box h-[80px] w-[160px] flex justify-center items-center text-xl cursor-pointer rounded-md border-white border-2">
              Rocketary
            </button>
            <button className="card-box h-[80px] w-[160px] flex justify-center items-center text-xl cursor-pointer rounded-md border-white border-2">
              Rocketary
            </button>
            <button className="card-box h-[80px] w-[160px] flex justify-center items-center text-xl cursor-pointer rounded-md border-white border-2">
              Rocketary
            </button>
            <button className="card-box h-[80px] w-[160px] flex justify-center items-center text-xl cursor-pointer rounded-md border-white border-2">
              Rocketary
            </button>
            <button className="card-box h-[80px] w-[160px] flex justify-center items-center text-xl cursor-pointer rounded-md border-white border-2">
              Rocketary
            </button>
            <button className="card-box h-[80px] w-[160px] flex justify-center items-center text-xl cursor-pointer rounded-md border-white border-2">
              Rocketary
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
