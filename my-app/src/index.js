import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import "./index.css";
import { App } from "components/App/App";
import { theme } from "./constants";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// //////////////// Render by lections/////////////////////
// const elem1 = <span>Hello</span>;
// const elem2 = <span>world</span>;

// const jsxElements = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log(jsxElements);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.querySelector("#root")
// );
