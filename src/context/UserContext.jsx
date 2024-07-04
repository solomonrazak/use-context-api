import { createContext, useContext, useState } from "react";

// main createContext
export const userContext = createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
});

//initial state
const USER = { name: "Guest", isGuestUser: true };

// provider

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(USER);

  function logIn(username) {
    setUser({ isGuestUser: false, name: username });
  }
  function logOut() {
    setUser(USER);
  }

  return (
    <userContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </userContext.Provider>
  );
}

// consumer
export function UseUseContext() {
  const { user, logIn, logOut } = useContext(userContext);
  return { user, logIn, logOut };
}
