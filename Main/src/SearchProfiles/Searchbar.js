import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = ({setKeyword}) => {
  let navigation = useNavigate()
const [value, setvalue] = useState("")
if(value){
  setKeyword(value)
} 
  return (
    <form>
      <input
      placeholder="Find Your Mate...."
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        className="px-4 py-1 rounded-md text-white bg-[#ffffff5d]  sm:w-[50vw] "
      />
    </form>
  );
};

export default Searchbar;
    