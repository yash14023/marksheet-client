import React from "react";
import { useUser } from "../../contexts/UserContext";
import Credentials from "../Credentials/Credentials";

const Main = () => {
  const { user } = useUser();

  if (!user) {
    return <Credentials />;
  }
  return <div>Main</div>;
};

export default Main;
