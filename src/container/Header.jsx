import React from "react";
import { UseUseContext } from "../context/UserContext";

const Header = () => {
  const { user, logOut } = UseUseContext();
  return (
    <div>
      <div className="flex justify-between">
        <h2>React Contextapi</h2>

        <div>
          <h3>Welcome, {user.name}</h3>
        </div>
      </div>
      {!user.isGuestUser && <button onClick={logOut}>Logout</button>}
    </div>
  );
};

export default Header;
