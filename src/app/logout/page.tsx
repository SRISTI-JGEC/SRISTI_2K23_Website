"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

//* ---------------------- Type for the userfields -------------------------------------------------------;

const Page = () => {

  useEffect(() => {
    const logout = async () => {
        try {
            await axios.delete('/api/users/logout');
            console.log("logout successfully");
        } catch (error) {
            console.log(error);
        }
    }
    logout();
  }, [])

  return (
    <>
      <div>logout</div>
    </>
  );
};

export default Page;
