import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// custom stylesheet root
import "./styles/app.scss";
import { app } from "./Helpers/firebaseConfig.js";

console.log("Firebase app initialized:", app);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
