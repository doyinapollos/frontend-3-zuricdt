import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LandingPage from "./LandingPage";
import { RingLoader } from "react-spinners";
import LoginButton from "../components/LoginButton";

function Home() {
  const { isLoading, error } = useAuth0();

  return (
    <div>
      {error && <p>Authentication Error </p>}
      {!error && isLoading && (
        <div className="flex justify-center items-center h-screen">
          <RingLoader color="#36D7B7" size={100} />{" "}
        </div>
      )}
      {!error && !isLoading && (
        <>
          <LoginButton />
          {/* <LogoutButton /> */}
          <LandingPage />
        </>
      )}

      {/* <div className=" ">
        <LandingPage />
      </div>{" "}
      {/* <div className="md:hidden lg:hidden ">
                                <MobileView />
                              </div>{" "} */}
    </div>
  );
}

export default Home;
