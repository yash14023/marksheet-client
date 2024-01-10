import React from "react";
import { useUser } from "../contexts/UserContext";
import Navigation from "../Components/Navigation/Navigation";
import { useDataStore } from "../contexts/DataStoreContext";
import Loading from "../reusables/Loading";

const Layout = (props) => {
  const { user } = useUser();
  const { isFetching } = useDataStore();
  if (user) {
    return (
      <>
        {isFetching && <Loading />}
        <Navigation />
        <div className="w-full min-h-screen font-lexend bg-black-main flex justify-start items-start text-white mt-16">
          <div className=" w-full   p-8 h-screen">{props.children}</div>
        </div>
      </>
    );
  }
  return (
    <>
      {isFetching && <Loading />}
      <div className="w-full min-h-screen font-lexend bg-black-main flex justify-start items-start text-white">
        <div className=" w-full   p-8 h-screen">{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
