import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import PlayerContextProvider from "./context/PlayerContext.jsx";
import AdminContextProvider from "./context/AdminContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <AdminContextProvider>
        <PlayerContextProvider>
          <App />
        </PlayerContextProvider>
      </AdminContextProvider>
    </BrowserRouter>
  </StrictMode>
);
