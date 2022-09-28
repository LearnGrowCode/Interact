import React from 'react'

const ProfileCard = ({userName,designation,skill,about,location}) => {
  console.log("length",skill.length)
  return (
    <div className=' bg-[#ffffff79] p-2 rounded-sm hover:bg-[#00000079] hover:rounded-md '>
    <div id="Profile-block" className="  flex  flex-col gap-4 h-fit w-fit p-2  rounded-md items-center text-white md:h-[45vh] sm:w-auto sm:h-[40vh]">
    <div id="top " className="grid grid-cols-2 grid-rows-2 w-full   justify-items-center items-center  ">
    <div id="userName" className="row-start-1 row-span-1 h-4 Rajdhani text-3xl tracking-widest
      ">{userName}</div>
      <div id="photo" className="col-start-2 row-span-2 border-4 border-white  p-8 rounded-full">Photo</div>
      </div>
      <div id="Designation" className="row-start-2 row-span-1 h-4 w-fit  text-[#72FFE6] ">{designation}</div>
      <div id="mid1" className="flex flex-wrap px-12  w-full   text-[#3770FF]  text-center md:px-0 md:gap-1">
      {skill.map((a,key)=>( 
        <div  className=" border-2 rounded-3xl bg-white    border-[#3770FF] h-8 w-24">{skill[key]}</div>
    

        
        ))}
        </div>
        <div id="mid2" className=" sm:h-[40ch]">
        <span className='text-ellipsis overflow-hidden whitespace-wrap w-[13ch]'> {about}</span>
        </div>
        <div id="bottom" className="flex justify-end text-end w-full text-[#9FED92]">{location}</div>
        </div>
        </div>
        )
}

export default ProfileCard;
