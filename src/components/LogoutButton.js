// src/components/LogoutButton.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import { useNavigate } from "react-router-dom";
//import { NonAuthRoutes } from "../helpers/url";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  //const navigate = useNavigate();

  //window.location.href = "/";

  return (
    isAuthenticated && (
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Log Out
      </button>
    )
  );
};

export default LogoutButton;
