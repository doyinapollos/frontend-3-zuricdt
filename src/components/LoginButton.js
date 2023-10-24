import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./Footer";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="w-full h-auto flex justify-center items-center flex-col">
        <div className="w-full h-auto bg-green-700 flex flex-col justify-start items-center ">
          <div className="flex justify-between items-center w-[90%] h-[70px] p-4">
            <div className="text-white text-lg font-bold"> Logo </div>
            <button
              onClick={() => loginWithRedirect()}
              className="tex-[12px] lg:bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Log In / Sign Up{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <section className="w-full h-[500px] bg-green-800 flex justify-center items-center  ">
          <div className="w-[50%] h-[70%] font-bold text-white flex flex-col justify-around items-center shadow-2xl p-8 ">
            <p className="text-[24px] md:text-[40px] "> WELCOME! </p>{" "}
            <p className="text-[18px] md:text-[32px] ">
              Please use the login button at the top right corner to login or
              sign up{" "}
            </p>
            <p className="text-[16px] md:text-[24px] text-red-500 ">
              {" "}
              to view your Portfolio{" "}
            </p>{" "}
          </div>{" "}
        </section>{" "}
        <Footer />
      </div>
    )
  );
};

export default LoginButton;
