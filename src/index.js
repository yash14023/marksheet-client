import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import ApplicationRoutes from "./routes/ApplicationRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ApplicationRoutes>
        <App />
      </ApplicationRoutes>
    </UserProvider>
  </React.StrictMode>
);
