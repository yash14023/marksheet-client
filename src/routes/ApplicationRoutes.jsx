import React from "react";
import { useUser } from "../contexts/UserContext";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Layout from "../layout/Layout";

const ApplicationRoutes = () => {
  const { user } = useUser();

  return (
    <Layout>
      <Toaster
        toastOptions={{
          style: {
            background: "#181818",
            color: "#fff",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Main />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Main />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default ApplicationRoutes;
