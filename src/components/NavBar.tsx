"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [closedNav, setClosedNav] = useState(false);
  return (
    <>
      <div className="w-full h-20 bg-gray-800/40 backdrop-blur-md fixed top-0 z-40 flex justify-between items-center max-sm:px-4 px-12 text-white font-griffy">
        <div>
          <Link href={"/"}>
            <Image
              src="/Images/Sristi 3.png"
              alt="logo"
              width={100}
              height={100}
              draggable={false}
            />
          </Link>
        </div>
        <ul className="flex justify-center items-center text-xl max-sm:hidden">
          <Link href={"/"}>
            <li className="mx-4 cursor-pointer capitalize">Home</li>
          </Link>
          <Link href={"/events"}>
            <li className="mx-4 cursor-pointer capitalize">Events</li>
          </Link>
          <Link href={"/team"}>
            <li className="mx-4 cursor-pointer capitalize">Teams</li>
          </Link>
          <Link href={"/login"}>
            <li className="mx-4 cursor-pointer capitalize">Log in</li>
          </Link>
        </ul>
        <div
          className="max-sm:flex hidden"
          onClick={() => setClosedNav(!closedNav)}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="h-8 w-10"
            aria-hidden="true"
          />
        </div>
        <div
          className={
            closedNav
              ? "w-full h-screen bg-[rgba(0,0,0)] backdrop-blur-md  z-50 fixed top-0 left-0 p-8"
              : "hidden"
          }
        >
          <div className="float-right" onClick={() => setClosedNav(!closedNav)}>
            <FontAwesomeIcon
              icon={faXmark}
              className="h-8 w-10"
              aria-hidden="true"
            />
          </div>
          <div className="pt-4 flex justify-center">
            <Link href={"/"}>
              <Image
                src="/Images/Sristi 3.png"
                alt="logo"
                width={200}
                height={200}
                draggable={false}
              />
            </Link>
          </div>
          <ul className="flex justify-center items-center flex-col text-xl  mt-6">
            <Link href={"/"}>
              <li
                className="my-2 cursor-pointer capitalize text-xl"
                onClick={() => setClosedNav(!closedNav)}
              >
                Home
              </li>
            </Link>
            <Link href={"/events"}>
              <li
                className="my-2 cursor-pointer capitalize"
                onClick={() => setClosedNav(!closedNav)}
              >
                Events
              </li>
            </Link>
            <Link href={"/team"}>
              <li
                className="my-2 cursor-pointer capitalize"
                onClick={() => setClosedNav(!closedNav)}
              >
                Teams
              </li>
            </Link>
            <Link href={"/login"}>
              <li
                className="my-2 cursor-pointer capitalize"
                onClick={() => setClosedNav(!closedNav)}
              >
                Log in
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
