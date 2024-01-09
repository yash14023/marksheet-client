import React from "react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] h-16 px-5 text-white font-lexend bg-black-main flex justify-between items-center border-b-2 border-[#131313]">
      <div className="w-14 h-14 flex justify-center items-center  ">
        <h1 className="text-blue-500 font-semibold">JHC</h1>
      </div>
      <div className="h-14 flex justify-center items-center "></div>
    </nav>
  );
};

export default Navigation;
