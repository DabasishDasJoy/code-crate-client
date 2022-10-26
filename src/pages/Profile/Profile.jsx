import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Profile: {user.email}</h1>
    </div>
  );
};

export default Profile;
