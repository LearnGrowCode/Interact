import React from "react";

import { filter } from "./utils/constants";

const BasicFilter = ({ setSearchTerm }) => {
  return (
    <div className="flex flex-cols justify-center align-middle gap-4  w-full ">
      {filter.map((filter) => {
        return (
          <button
            className=" bg-white text-[#3770FF]  border-2 border-[#3770FF] px-6 py-1  rounded-3xl "
            onClick={() => {
              setSearchTerm(filter.name);
            }}
          >
            {filter.name}
          </button>
        );
      })}
    </div>
  );
};

export default BasicFilter;
