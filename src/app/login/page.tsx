"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faAt, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

//* ---------------------- Type for the userfields -------------------------------------------------------;
type UserFields = {
  email: string;
  password: string;
};

const Page = () => {
  const route = useRouter();
  // *------------------------------useState for password visibility------------------------------
  const [passwordview, setPasswordview] = useState<boolean>(false);
  const handleViewChange = () => {
    setPasswordview(!passwordview);
  };
  // *------------------------------useState for selecting all the userfields------------------------------
  const [userFields, setUserFields] = useState<UserFields>({
    email: "",
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
<<<<<<< HEAD
      const { email, password } = userFields;
=======
      const {  email, password } = userFields;
>>>>>>> 70607b216ef279e8679cba1a5bc76eb5efbc8e67
      const res = await axios.post("/api/users/login", {
        email,
        password,
      });
      // show some effect to user or redirect to home
      console.log(res);
<<<<<<< HEAD
      route.push("/");
    } catch (error) {
=======
    } catch(error) {
>>>>>>> 70607b216ef279e8679cba1a5bc76eb5efbc8e67
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
          <h1 className="text-2xl my-3 font-semibold max-[500px]:text-xl">
            Welcome back
          </h1>
          <form className="flex justify-between items-center w-full flex-col">
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
              className="bg-[#f5f5f5] p-2 w-full my-5 text-black font-semibold text-lg  sm:text-2xl"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
          <p>
            Don&apos;t have an account yet?
            <Link href="/signup" className="text-blue-300 ">
              sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
