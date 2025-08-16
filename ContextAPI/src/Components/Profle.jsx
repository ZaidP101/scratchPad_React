import React, { useContext } from "react";
import userContext from "../Context/userContext";

function Profile() {
  const { user } = useContext(userContext);

  if (!user) {
    return (
      <div className="text-center text-gray-600">
        Please login
      </div>
    );
  }

  return (
    <div className="text-center text-green-600 font-semibold">
      Welcome {user.username}
    </div>
  );
}

export default Profile;
