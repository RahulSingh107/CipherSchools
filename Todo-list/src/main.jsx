import React from "react";
import ReactDOM from "react-dom/client";
import ToDoScreen from "./screens/ToDoScreen.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToDoScreen />
  </React.StrictMode>
);
