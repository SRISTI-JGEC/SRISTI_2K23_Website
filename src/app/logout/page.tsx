"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";

//* ---------------------- Type for the userfields -------------------------------------------------------;

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const route = useRouter();
  useEffect(() => {
    const logout = async () => {
      try {
        localStorage.removeItem("token");
        await axios.delete("/api/users/logout");
        console.log("logout successfully");
        route.push('/login')
      } catch (error) {
        console.log(error);
      }
    };
    logout();
  }, []);

  return (
    <>
      <div className="h-screen w-full bg-home_bg overflow-y-scroll  bg-no-repeat bg-cover">
        <Spinner/>
         </div>
    </>
  );
};

export default Page;
