import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BoardifyProvider } from "./context/BoardifyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BoardifyProvider>
      <App />
    </BoardifyProvider>
  </React.StrictMode>
);
