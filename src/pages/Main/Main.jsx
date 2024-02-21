import React from "react";
import { useUser } from "../../contexts/UserContext";
import Credentials from "../Credentials/Credentials";
import Dashboard from "../Dashboard/Dashboard";

const Main = () => {
  const { user } = useUser();

  if (!user) {
    return <Credentials />;
  }
  return <Dashboard />;
};

export default Main;
