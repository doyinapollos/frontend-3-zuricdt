import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex justify-center items-center ">
        <div className="mr-[7px] ">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <img
          className="w-[30px] h-[30px] rounded-[50px] "
          src={user.picture}
          alt={user.name}
        />
      </div>
    )
  );
};

export default Profile;
