import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Searchbar = ({setKeyword}) => {
  let navigate = useNavigate()
const [value, setvalue] = useState("")
const onhandleSubmit = (e) => {
  e.preventDefault();
if(value){
  setKeyword(value)
} 
}
  return (
    <form  onSubmit={onhandleSubmit}>
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
    