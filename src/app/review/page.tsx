"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

type reviewFormData = {
  name: string;
  email: string;
  department: string;
  year: string;
  review: string;
};

const Page = () => {
    const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<reviewFormData>();

  const submitHandler = async (data: reviewFormData) => {
    try {
      const res = await axios.post("/api/reviews", data);
        route.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Image
        width={900}
        height={900}
        src="/Images/10.541378.jpg"
        alt="background image"
        className="-z-10 fixed top-0 w-full h-screen object-cover"
      />
      <div className="w-full h-screen flex flex-col z-10 justify-around items-center text-white ">
        <div className="mt-24 flex flex-col items-center">
          <h2 className=" text-4xl md:text-5xl font-semibold font-griffy">
            Review
          </h2>
          <Image
            src={
              "/Images/toppng.com-elder-wand1-harry-potter-wand-draw-transparent-635x50.png"
            }
            alt={"something"}
            width={300}
            height={300}
            draggable={false}
            className="max-sm:w-[10rem]"
          />
        </div>
        <div className="w-[90%] lg:w-2/5 border border-text-gray-300 bg-black/75 backdrop-blur-sm p-6 rounded-lg text-gray-100">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col gap-3"
          >
            <div className="relative z-0 w-full mb-2 group">
              <label
                className="peer-focus:font-medium
                            peer-focus:text-blue-600 peer-focus:dark:text-blue-500 text-sm"
              >
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                id="name"
                className="block p-1 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <label
                className="peer-focus:font-medium text-gray-300 dark:text-gray-400
                            peer-focus:text-blue-600 peer-focus:dark:text-blue-500 text-sm"
              >
                Email address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                id="email"
                className="block p-1 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="relative z-0 w-[45%] mb-2 group ">
                <label
                  className="peer-focus:font-medium text-gray-300 dark:text-gray-400
                            peer-focus:text-blue-600 peer-focus:dark:text-blue-500 text-sm"
                >
                  Department
                </label>
                <select
                  {...register("department", { required: true })}
                  id="department"
                  name="department"
                  className="block p-1 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white/75 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                >
                  <option className="text-black hidden" value="">
                    Select Department
                  </option>
                  <option className="text-black" value="CE">
                    CE
                  </option>
                  <option className="text-black" value="CSE">
                    CSE
                  </option>
                  <option className="text-black" value="EE">
                    EE
                  </option>
                  <option className="text-black" value="ECE">
                    ECE
                  </option>
                  <option className="text-black" value="IT">
                    IT
                  </option>
                  <option className="text-black" value="ME">
                    ME
                  </option>
                </select>
              </div>
              <div className="relative z-0 w-[45%] mb-2 group">
                <label
                  className="peer-focus:font-medium text-gray-300 dark:text-gray-400
                            peer-focus:text-blue-600 peer-focus:dark:text-blue-500 text-sm"
                >
                  Year
                </label>
                <select
                  {...register("year", { required: true })}
                  id="year"
                  name="year"
                  className="block p-1 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white/75 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                >
                  <option className="text-black hidden" value="">
                    Seclect year
                  </option>
                  <option className="text-black" value="1">
                    1st
                  </option>
                  <option className="text-black" value="2">
                    2nd
                  </option>
                  <option className="text-black" value="3">
                    3rd
                  </option>
                  <option className="text-black" value="4">
                    4th
                  </option>
                </select>
              </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                className="peer-focus:font-medium text-gray-300 dark:text-gray-400
                            peer-focus:text-blue-600 peer-focus:dark:text-blue-500 text-sm"
              >
                Review
              </label>
              <textarea
                {...register("review", { required: true })}
                id="review"
                name="review"
                className="block p-1 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Your honest review about SRISTI "
                required
              />
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-700 w-[45%] p-2 rounded-md hover:scale-95 hover:bg-blue-700 transition-all duration-100">
                Submit
              </button>
              <button type="reset" className="bg-red-700 w-[45%] p-2 rounded-md hover:scale-95 hover:bg-blue-700 transition-all duration-100">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
