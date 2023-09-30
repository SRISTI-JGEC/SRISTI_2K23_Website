"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { EventData } from "@/app/events/[eventname]/page";
import {
  BsMicrosoftTeams,
  BsFillPersonFill,
  BsFillPersonPlusFill,
  BsFillTelephoneFill,
  BsFillTelephonePlusFill,
} from "react-icons/bs";
import axios from "axios";
import { eventNames } from "process";

const EventRegistration = ({ props }: { props: EventData }) => {
  const router = useRouter();
  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const memberInputs = [];

  for (let i = 2; i < 5; i++) {
    memberInputs.push(
      <div key={i}>
        <div className="flex items-center justify-between max-sm:flex-col">
          <div className="flex items-center w-full md:w-[45%] ">
            <BsFillPersonPlusFill size={25} />
            <input
              {...register(`member${i}name`, { required: false })}
              className="w-full mb-4 p-2  bg-transparent border-b-2 outline-none text-lg sm:text-xl ms-2 "
              placeholder={`Member ${i - 1} name`}
              autoComplete="off"
            />
          </div>
          <div className="flex items-center w-full md:w-[45%] ">
            <BsFillTelephonePlusFill size={25} />
            <input
              {...register(`member${i}number`, { required: false })}
              className="w-full mb-4 p-2  bg-transparent border-b-2 outline-none text-lg sm:text-xl ms-2 "
              placeholder={`Member ${i - 1} mobile no`}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    );
  }

  // Handle form submission
  const onSubmit = async (data: any) => {
    console.log(props);
    console.log(data);
    // teamName, eventName, members;
    const {
      member4number,
      member4name,
      member3number,
      member3name,
      member2number,
      member2name,
      teamname,
    } = data;
    const res = await axios.post("/api/teams/signup", {
      teamName: teamname,
      eventName: props.name,
      members: [
        { name: member2name, email: member2number },
        { name: member3name, email: member3number },
        { name: member4name, email: member4number },
      ],
    });
    console.log(res);
    toast.success("Successfully Registered!");
  };

  return (
    <>
      <Image
        alt="bg"
        priority
        src="/Images/10.541378.jpg"
        width={1000}
        height={1000}
        className="-z-10 fixed inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div className="w-full flex justify-center">
        <div className="mt-40 mb-12 ">
          <div className="bg-[rgba(0,0,0,0.6)]   backdrop-blur-sm text-white font-griffy p-6 sm:p-10 rounded-3xl  shadow-md">
            <div className="flex justify-center pb-2">
              <Image
                src="/Images/Sristi 3.png"
                alt="logo"
                height={50}
                width={150}
              />
            </div>
            <h1 className="text-2xl sm:text-4xl text-white text-center  font-griffy mb-8 capitalize">
              Registration form
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
              <Toaster position="bottom-right" reverseOrder={false}  />
              <div className="flex items-center justify-between max-sm:flex-col">
                <div className="flex items-center w-full md:w-[45%] ">
                  <BsMicrosoftTeams size={25} />
                  <input
                    {...register("teamname")}
                    className="w-full mb-4 p-2  bg-transparent border-b-2 outline-none text-lg sm:text-xl ms-2 "
                    placeholder="Unique Team name*"
                    autoComplete={"off"}
                  />
                </div>
                {errors.teamname && (
                  <p className="text-red-500">Team Name is required.</p>
                )}
                <h1 className="  text-lg md:text-2xl  capitalize w-full md:w-[45%] ">
                  event name : {props.name}
                </h1>
              </div>

              <div className="flex items-center justify-between max-sm:flex-col">
                <div className="flex items-center w-full md:w-[45%] ">
                  <BsFillPersonFill size={25} />
                  <input
                    {...register("leadName", { required: true })}
                    className="w-full mb-4 p-2  bg-transparent border-b-2 outline-none text-lg sm:text-xl ms-2 "
                    placeholder="Team leader name*"
                    autoComplete={"off"}
                  />
                </div>
                {errors.leadName && (
                  <p className="text-red-500">Lead Name is required.</p>
                )}
                <div className="flex items-center w-full md:w-[45%] ">
                  <BsFillTelephoneFill size={25} />
                  <input
                    {...register("leadnumber", { required: true })}
                    className="w-full mb-4 p-2  bg-transparent border-b-2 outline-none text-lg sm:text-xl ms-2 "
                    placeholder="Team leader phone no*"
                    autoComplete="off"
                  />
                  {errors.leadnumber && (
                    <p className="text-red-500">Lead Number is required.</p>
                  )}
                </div>
              </div>
              <h1 className="text-xl text-blue-500">Enter team members data</h1>
              {memberInputs}
              <div className="flex justify-between">
                <div className="w-[45%] ">
                  <input
                    type="submit"
                    className="w-full bg-gradient-to-b from-blue-500 to-blue-900 hover:from-blue-600 hover:to-blue-800
                text-white font-bold py-2 px-4 rounded-lg text-lg"
                    value="Submit"
                  />
                </div>
                <div className="w-[45%] ">
                  <button type="reset" className="bg-red-600 rounded-lg w-full py-2 hover:bg-red-500 ">
                    Reset
                  </button>
                </div>
              </div>

              <span className="text-red-500 text-lg ">
                * fields are required
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventRegistration;
