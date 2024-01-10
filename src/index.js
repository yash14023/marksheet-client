import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import ApplicationRoutes from "./routes/ApplicationRoutes";
import { DataStoreProvider } from "./contexts/DataStoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataStoreProvider>
      <UserProvider>
        <ApplicationRoutes>
          <App />
        </ApplicationRoutes>
      </UserProvider>
    </DataStoreProvider>
  </React.StrictMode>
);
