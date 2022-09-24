import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { SideAdvR, SideAdvL, Profiles, BasicFilter, Searchbar ,Advertisement} from "./";

const SearchFeed = ({s,k}) => {
  const navigate = useNavigate();
  //http://localhost:3000/search/all/?keyword=Akshay work under this
  //Function To get the query in search

  // const name =  query.get('keyword','designation')
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
      designation: "Deveeeeloper",
      skill: ["H", "B", "C"],
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      location: "GGN,India",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("keyword");
  const [keyword, setKeyword] = useState("Deveopler");

  const location = useLocation();
  let params = new URLSearchParams(location.search);
  var filters = {
    userName: params.get("userName"),
    designation: params.get("designation"),
    skill: params.get("skill"),
    about: params.get("about"),
    location: params.get("location"),
    keywords: params.get("keyword"),
  };
  console.log("filter::",filters.userName || filters.designation || filters.skill || filters.location || filters.about || filters.keyword);
  // let sT = ""
  // Object.keys(filters).forEach(function(key, index) {
  //   if(filters[key]){
  //     sT =filters[key]
  //   }
  // });
  console.log("Search Term is :  ",searchTerm,"   Keyword IS this :",keyword)
  // setKeyword(sT)
  useEffect(() => {
    async function getUserData() {
      console.log("Search Term is :  ",searchTerm,"   Keyword IS this :",keyword)
      const UserData = await fetch(
        `http://localhost:5000/profiles/search/all/?${searchTerm}=${keyword}`
        );
        
        if (!UserData.ok) {
          const message = `An error occured: ${UserData.status.Text}`;
          window.alert(message);
          return;
        }
        const UserDatas = await UserData.json();
        
        const { getUserData } = UserDatas;
        setProfiles(getUserData);
      }
      getUserData();
      
      navigate(`/search/all/?${searchTerm}=${keyword}`);
    return;
  }, [searchTerm, keyword]);
  console.log("profiles", profiles );
  console.log("profiles", profiles == null );
  return (
    <div className="flex gap-8 pt-8 flex-col">
    <div className="flex flex-col items-center justify-center h-[10vh] ">
    <Searchbar searchCat={searchTerm} setKeyword={setKeyword}  />
    </div>
      <BasicFilter setSearchTerm={setSearchTerm} />
      <div className="flex flex-col items-center align-middle gap-4  w-full sm:grid sm:grid-cols-2 sm:px-8 md:grid-cols-3 lg:px-12 lg:grid-cols-3 xl:grid-cols-4 ">
       {
       
        profiles.length >= 1? <Profiles Profiles={profiles} /> : <div className="text-3xl flex text-white justify-center w-[100vw]">"No Such User Exists "</div>
      }
        
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

export default SearchFeed;
