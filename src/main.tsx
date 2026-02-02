import React from "react";
import ReactDOM from "react-dom/client";
import App2 from "../App2";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

// Disable console logs in production
if (process.env.NODE_ENV === "production") {
  console.log = function () { };
  console.info = function () { };
  console.warn = function () { };
  console.error = function () { };
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App2 />
    </BrowserRouter>
  </React.StrictMode>
);
