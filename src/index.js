import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Auth0Provider
  //   domain="dev-2ynp8rps3427mm4j.us.auth0.com"
  //   clientId="IF1v2PF2rUaokLQ1Cl5YizCG4Ry1qrMP"
  //   redirectUrl={window.location.origin}
  // >
  //   <BrowserRouter>
  //     <React.StrictMode>
  //       <App />
  //     </React.StrictMode>{" "}
  //   </BrowserRouter>{" "}
  // </Auth0Provider>
  <Auth0Provider
    domain="dev-2ynp8rps3427mm4j.us.auth0.com"
    clientId="Bj4HA5zVdo3hL6XpIkpJXuA53jkKzLHM"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>{" "}
    </BrowserRouter>{" "}
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
