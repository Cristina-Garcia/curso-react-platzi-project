import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App/index";
import "./index.css";

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// const domContainer = document.querySelector("#like_button_container");
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(LikeButton));
