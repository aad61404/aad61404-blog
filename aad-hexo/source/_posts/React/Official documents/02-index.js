import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";
import TodoApp from "./TodoApp.js";
import Timer from "./Timer.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <TodoApp />
    <Timer />
  </React.StrictMode>,
  rootElement
);
