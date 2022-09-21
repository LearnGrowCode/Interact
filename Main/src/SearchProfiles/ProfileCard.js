import React from 'react'

const ProfileCard = ({userName,designation,skill,about,location}) => {
  return (
    <div id="Profile-block" className="  flex  flex-col gap-4 h-fit w-[85vw] p-5  rounded-md items-center text-white bg-[#ffffff79] sm:w-auto sm:h-[40vh]">
    <div id="top " className="grid grid-cols-2 grid-rows-2 w-full   justify-items-center items-center  ">
      <div id="userName" className="row-start-1 row-span-1 h-4 Rajdhani text-3xl tracking-widest
      ">{userName}</div>
      <div id="Designation" className="row-start-2 row-span-1 h-4 text-xl text-[#72FFE6] ">{designation}</div>
      <div id="photo" className="col-start-2 row-span-2 border-4 border-white  p-8 rounded-full    ">Photo</div>
    </div>
  <div id="mid1" className="flex  justify-between px-12  w-full   text-[#3770FF]  text-center md:px-0 md:gap-1">
    <div id="skill1" className=" border-2 rounded-3xl bg-white    border-[#3770FF] h-8 w-24">{skill[0]}</div>
    <div id="skill2" className=" border-2 rounded-3xl bg-white    border-[#3770FF] h-8 w-24">{skill[1]}</div>
    <div id="skill3" className=" border-2 rounded-3xl bg-white    border-[#3770FF] h-8 w-24">{skill[2]}</div>
  </div>
    <div id="mid2" className=" sm:h-[50ch]">
     {about}
  </div>
    <div id="bottom" className="flex justify-end text-end w-full text-[#9FED92]">{location}</div>
</div>
  )
}

export default ProfileCard;
