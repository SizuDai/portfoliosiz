import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Disable console logs in production
if (process.env.NODE_ENV === "production") {
  console.log = function () {};
  console.info = function () {};
  console.warn = function () {};
  console.error = function () {};
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
