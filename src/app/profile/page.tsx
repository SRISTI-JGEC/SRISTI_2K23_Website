"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/users/profile');
                setUser(response);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchData();
    
    }, []);

    return (
        <div>
            user
        </div>
    );
};

export default Page;