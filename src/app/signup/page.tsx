"use client";
import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faUser,
  faAt,
  faPhone,
  faGraduationCap,
  faChevronDown,
  faCheck,
  faChartSimple,
  faHashtag,
  faMoneyBill1,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

// *--------------------- Variable for selecting department and year --------------------------------------;
const department = ["CE", "ME", "EE", "ECE", "CSE", "IT"];
const year = ["1st Year", "2nd Year"];

//* ---------------------- Type for the userfields -------------------------------------------------------;
type UserFields = {
  name: string;
  email: string;
  mobile: string;
  rollno: string;
  bill: string;
  password: string;
};

const Page = () => {
  // *------------------------------useState for password visibility------------------------------
  const [passwordview, setPasswordview] = useState<boolean>(false);
  const handleViewChange = () => {
    setPasswordview(!passwordview);
  };
  // *------------------------------useState for selecting all the userfields------------------------------
  const [selectdept, setSelectdept] = useState(department[0]);
  const [selectyear, setSelectyear] = useState(year[0]);
  const [userFields, setUserFields] = useState<UserFields>({
    name: "",
    email: "",
    mobile: "",
    rollno: "",
    bill: "",
    password: "",
  });

  // *---------------------------------- Input field handleChange Function ---------------------------------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserFields((prevState) => ({ ...prevState, [name]: value }));
  };

  // *---------------------------------- Login Button handleSubmit Function ---------------------------------
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      // name, year, dept, roll, phone, email, password, payReceipt;
      const { name, email, mobile, rollno, bill, password } = userFields;
      const res = await axios.post("/api/users/signup", {
        name,
        year: selectyear === year[0] ? 1 : 2,
        dept: selectdept,
        roll: rollno,
        phone: mobile,
        email,
        password,
        payReceipt: bill,
      });
      // Show successful Registration and to verify email
      console.log(res);
    } catch (error) {
      // Show Error to user also
      console.log(error);
    }
  };

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
      <div className="relative min-h-screen w-full flex justify-center items-center font-griffy text-white pt-32 pb-16">
        <div className="relative bg-[rgba(0,0,0,0.6)] flex flex-col items-center w-[450px] p-5 shadow-2xl backdrop-blur-sm rounded-md max-[500px]:w-[90%]">
          <div className="event-img">
            <Image
              src="/Images/Sristi 3.png"
              alt="logo"
              height={50}
              width={150}
            />
          </div>
          <h1 className="text-3xl my-3 font-semibold max-[500px]:text-2xl">
            Create your account
          </h1>
          <form className="flex justify-between items-center w-full flex-col">
            <div className="username flex justify-between items-center w-full my-1 border-b-2 border-b-white border-solid">
              <FontAwesomeIcon
                icon={faUser}
                className="mr-2 cursor-pointer text-xl text-white"
              />
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                className="flex-1 p-3 bg-transparent  focus:outline-none focus:ring-0"
                value={userFields.name}
                onChange={handleChange}
              />
            </div>
            <div className="email flex justify-between items-center w-full my-1 border-b-2 border-b-white border-solid">
              <FontAwesomeIcon
                icon={faAt}
                className="mr-2 cursor-pointer text-xl text-white"
              />
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                className="flex-1 p-3 bg-transparent  focus:outline-none focus:ring-0"
                value={userFields.email}
                onChange={handleChange}
              />
            </div>
            <div className="mobile flex justify-between items-center w-full my-1 border-b-2 border-b-white border-solid">
              <FontAwesomeIcon
                icon={faPhone}
                className="mr-2 cursor-pointer text-xl text-white"
              />
              <input
                type="text"
                placeholder="Mobile No"
                id="mobile"
                name="mobile"
                className="flex-1 p-3 bg-transparent focus:outline-none focus:ring-0"
                value={userFields.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="dept flex justify-between items-center w-full text-black my-1 border-b-2 border-b-white border-solid">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="mr-2 cursor-pointer text-xl text-white"
              />
              <Listbox value={selectdept} onChange={setSelectdept}>
                <div className="relative mt-1 w-full">
                  <Listbox.Button className="relative w-full cursor-default rounded-sm bg-none px-5 py-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm text-white ">
                    <span className="block truncate">{selectdept}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                      {department.map((dept) => (
                        <Listbox.Option
                          key={dept}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
                            }`
                          }
                          value={dept}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {dept}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <div className="year flex justify-between items-center w-full text-black my-1 border-b-2 border-b-white border-solid">
              <FontAwesomeIcon
                icon={faChartSimple}
                className="mr-2 cursor-pointer text-xl text-white"
              />
              <Listbox value={selectyear} onChange={setSelectyear}>
                <div className="relative mt-1 w-full">
                  <Listbox.Button className="relative w-full cursor-default rounded-sm bg-none px-5 py-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm text-white">
                    <span className="block truncate">{selectyear}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {year.map((y) => (
                        <Listbox.Option
                          key={y}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
                            }`
                          }
                          value={y}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {y}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <div className="rollno flex justify-between items-center w-full my-1 border-b-2 border-b-white border-solid">
              <FontAwesomeIcon
                icon={faHashtag}
                className="mr-2 cursor-pointer text-xl text-white"
              />
              <input
                type="string"
                placeholder="Roll No"
                id="rollno"
                name="rollno"
                className="flex-1 p-3 bg-transparent focus:outline-none focus:ring-0"
                value={userFields.rollno}
                onChange={handleChange}
              />
            </div>
            <div className="biil flex justify-between items-center w-full my-1 bg-transparent border-b-2 border-solid border-b-white">
              <FontAwesomeIcon
                icon={faMoneyBill1}
                className="mr-2 cursor-pointer text-xl text-white"
              />
              <input
                type="string"
                placeholder="Bill No"
                id="bill"
                name="bill"
                className="flex-1 p-3 bg-transparent focus:outline-none focus:ring-0"
                value={userFields.bill}
                onChange={handleChange}
              />
            </div>
            <div className="password flex justify-between items-center w-full my-1 bg-transparent border-b-2 border-solid border-b-white">
              {passwordview ? (
                <FontAwesomeIcon
                  icon={faEye}
                  className="mr-2 cursor-pointer text-xl text-white"
                  onClick={handleViewChange}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="mr-2 cursor-pointer text-xl text-white"
                  onClick={handleViewChange}
                />
              )}
              <input
                type={!passwordview ? "password" : "text"}
                placeholder="Password"
                id="password"
                name="password"
                className="flex-1 p-3 bg-transparent focus:outline-none focus:ring-0"
                value={userFields.password}
                onChange={handleChange}
              />
            </div>
            <button
              className="bg-[#f5f5f5] p-2 w-full my-5 text-black font-semibold text-lg  sm:text-2xl capitalize"
              onClick={handleSubmit}
            >
              Sign up
            </button>
          </form>
          <p>
            Already have an account ?{" "}
            <Link href="/login" className="text-blue-300">
              log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
