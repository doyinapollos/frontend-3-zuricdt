import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { AuthRoutes, NonAuthRoutes } from "./url";
import LandingPage from "../pages/LandingPage";
import LogoutButton from "../components/LogoutButton";
import LoginButton from "../components/LoginButton";

function routers() {
  return (
    <div>
      <Routes>
        <Route path={NonAuthRoutes.home} element={<Home />} />{" "}
        <Route path={NonAuthRoutes.signin} element={<LoginButton />} />{" "}
        <Route path={NonAuthRoutes.logout} element={<LogoutButton />} />{" "}
        <Route path={AuthRoutes.landingpage} element={<LandingPage />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default routers;
