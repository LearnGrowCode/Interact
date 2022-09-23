import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {  SideAdvR, SideAdvL, Profiles,Searchbar,Advertisement } from "./";


const Feed = () => {
    const [profiles, setProfiles] = useState([
        {
      userName: "Akshay",
      designation: "Devloper",
      skill: ["H", "B", "C"],
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        location: "GGN,India",
    },
    {
        userName: "Akshay",
        designation: "Devloper",
        skill: ["H", "B", "C"],
        about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        location: "GGN,India",
    },
    {
        userName: "Akshay",
        designation: "Devloper",
        skill: ["H", "B", "C"],
        about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        location: "GGN,India",
    },
    {
        userName: "Akshay",
        designation: "Devloper",
        skill: ["H", "B", "C"],
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          location: "GGN,India",
        },
        
    ]);
    console.log('Profiles',profiles)
    useEffect(() => {
        async function getUserData() {
          const UserData = await fetch(`http://localhost:5000/profiles`);
          console.log('USerDAta',UserData)
          if (!UserData.ok) {
            const message = `An error occured: ${UserData.status.Text}`;
            window.alert(message);
            return;
          }
    
          const UserDatas = await UserData.json();
          const { allUserData } = UserDatas;

          setProfiles(allUserData)
        }
        getUserData();
        return;
      },[]);
    return (
        <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center">
        <Advertisement/> 
        <Link to='/search/all' className=' text-center rounded-sm border-2 w-[50%] bg-white  hover:text-yellow-200 hover:bg-black p-2'>Customize Search</Link>
    </div>


        <div className="flex flex-col items-center align-middle gap-4  w-full sm:grid sm:grid-cols-2 sm:px-8 md:grid-cols-3 lg:px-12 lg:grid-cols-3 xl:grid-cols-4 ">
        <Profiles Profiles={profiles} />
        </div>
        <SideAdvR
        Position="30vh"
        HackName="HackRain"
        SDate="20/12/2025"
        EDate="23/12/2025"
        Location="Bhopal"
        HLink="ak123123"
        />
        <SideAdvL
        Position="60vh"
        HackName="HackRain"
        SDate="25/11/2025"
        EDate="29/11/2025"
        Location="Bhopal"
        HLink="www.google.com"
      />
    </div>
  );
};

export default Feed;
