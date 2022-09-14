import React, { useEffect, useState } from "react";
import {
  Advertisement,
  SearchBar,
  Filter,
  FilterProfile,
  ProfileBlock,
  SideAdvR,
  SideAdvL,
} from "./component";

const axios = require("axios").default;

function Search() {
  // const userDatas = await fetch(`http://localhost:5000/profiles`);
  // if (!userDatas.ok) {
  //   const message = `An error occurred: ${userDatas.statusText}`;
  //   window.alert(message);
  //   return;
  // }
  // const userDatasJSON = await userDatas.json();
  // const { allUserData } = userDatasJSON;
  // console.log("Type of ", typeof allUserData, allUserData);
  const [profileData, setProfileData] = useState([{
      about: "Loading",
      designation: "Loading",
      location: "Loading",
      skill: ["L", "O", "D"],
      userName: "Loading",
  }
  ]);

  useEffect(() => {
    async function getUserData() {
      console.log("begin");
      const UserData = await fetch(`http://localhost:5000/profiles`);
      if (!UserData.ok) {
        const message = `An error occured: ${UserData.status.Text}`;
        window.alert(message);
        return;
      }

      const UserDatas = await UserData.json();
      const { allUserData } = UserDatas;
      setProfileData(allUserData);
      console.log("hey", profileData);
    }
    getUserData();
    return;
  });
  console.log("hey", profileData);
  const ProfileElem = profileData.map(
    ({ userName, designation, skill, about, location }) => {
      return (
        <a href="./viewProfile.html">
          <FilterProfile
            userName={userName}
            designation={designation}
            skill={skill}
            about={about}
            location={location}
          />
        </a>
      );
    }
  );

  return (
    <div>
      <Advertisement />
      <SearchBar />
      <div className="  flex gap-2 px-2 pb-3 w-full flex-wrap justify-center md:gap-5 lg:gap-8 xl:gap-12">
        <Filter skills="Skill" />
        <Filter skills="Location" />
        <Filter skills="Title" />
        <Filter skills="College" />
        <Filter skills="Name" />
      </div>
      <div className="flex flex-col items-center align-middle gap-4  w-full sm:grid sm:grid-cols-2 sm:px-8 md:grid-cols-3 lg:px-12 lg:grid-cols-3 xl:grid-cols-4 ">
      {ProfileElem}
      {ProfileElem}
      {ProfileElem}
      {ProfileElem}
      </div>
      <SideAdvR
        Position="30vh"
        HackName="HackRain"
        SDate="25-June-2025"
        EDate="25-June-2025"
        Location="Bhopal"
        HLink="ak123123"
      />
      <SideAdvL
        Position="60vh"
        HackName="HackRain"
        SDate="25-June-2025"
        EDate="25-June-2025"
        Location="Bhopal"
        HLink="www.google.com"
      />
    </div>
  );
}

export default Search;
