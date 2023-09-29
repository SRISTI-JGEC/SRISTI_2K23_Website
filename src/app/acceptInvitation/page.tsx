"use client";

import axios from "axios";
import { getCookieParser } from "next/dist/server/api-utils";
import Link from "next/link";
import { NextRequest } from "next/server";
import React, { useEffect, useState } from "react";


export default function VerifyEmailPage(request : NextRequest) {

    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post('/api/users/acceptInvitation', {token})
            setVerified(true);
        } catch (error:any) {
            setError(true);
            console.log(error.reponse.data); 
        }

    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        console.log(urlToken);
        setToken(urlToken || "");
    }, []);


    useEffect(() => {
        if(token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">

            <h1 className="text-4xl">Accepting Invitation</h1>
            <h2 className="p-2 bg-orange-500 text-black">{token ? `${token}` : "no token"}</h2>

            {verified && (
                <div>
                    <h2 className="text-2xl">Invitation Accepted</h2>
                    <Link href="/">
                        Home Page
                    </Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className="text-2xl bg-red-500 text-black">Error</h2>
                    
                </div>
            )}
        </div>
    )

}