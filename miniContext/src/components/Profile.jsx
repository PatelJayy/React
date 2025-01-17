import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <h1>not loggedin</h1>;
  }
  return (
    <div>
      <h1>Profile : {user.username}</h1>
      <h5>more component</h5>
    </div>
  );
}

export default Profile;
