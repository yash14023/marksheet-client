import React from "react";
import { useUser } from "../contexts/UserContext";
import Navigation from "../Components/Navigation/Navigation";

const Layout = (props) => {
  const { user } = useUser();
  if (user) {
    return (
      <>
        <Navigation />
        <div className="w-full min-h-screen font-lexend bg-black-main flex justify-start items-start text-white mt-16">
          <div className=" w-full   p-8 h-screen">{props.children}</div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="w-full min-h-screen font-lexend bg-black-main flex justify-start items-start text-white">
        <div className=" w-full   p-8 h-screen">{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
