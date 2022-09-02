export default function FilterProfile({name,title,skill,about,location}){
    return(
    <div id="Profile-block" class="  flex  flex-col gap-4 h-fit w-[85vw] p-5  rounded-md items-center text-white bg-[#ffffff79] sm:w-auto sm:h-[40vh]">
        <div id="top "class="grid grid-cols-2 grid-rows-2 w-full   justify-items-center items-center  ">
          <div id="name" class="row-start-1 row-span-1 h-4 Rajdhani text-3xl tracking-widest
          ">{name}</div>
          <div id="Designation" class="row-start-2 row-span-1 h-4 text-xl text-[#72FFE6] ">{title}</div>
          <div id="photo" class="col-start-2 row-span-2 border-4 border-white  p-8 rounded-full    ">Photo</div>
        </div>
      <div id="mid1" class="flex  justify-between px-12  w-full   text-[#3770FF]  text-center md:px-0 md:gap-1">
        <div id="skill1" class=" border-2 rounded-3xl bg-white    border-[#3770FF] h-8 w-24">{skill[0]}</div>
        <div id="skill2" class=" border-2 rounded-3xl bg-white    border-[#3770FF] h-8 w-24">{skill[1]}</div>
        <div id="skill3" class=" border-2 rounded-3xl bg-white    border-[#3770FF] h-8 w-24">{skill[2]}</div>
      </div>
        <div id="mid2" className=" sm:h-[50ch]">
         {about}
      </div>
        <div id="bottom" class="flex justify-end text-end w-full text-[#9FED92]">{location}</div>
    </div>
    )
}