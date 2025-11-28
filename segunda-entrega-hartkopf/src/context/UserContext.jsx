import React, { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

  const [user, setUser] = useState({
    email: storedUser?.email || "",
    accessToken: storedUser?.accessToken || "",
  });

  const saveUser = (email, accessToken) => {
    localStorage.setItem("user", JSON.stringify({ email, accessToken }));
    setUser({ email, accessToken });
  };

  const deleteUser = () => {
    localStorage.removeItem("user");
    setUser({});
  };

  return (
    <UserContext.Provider value={{ user, saveUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
