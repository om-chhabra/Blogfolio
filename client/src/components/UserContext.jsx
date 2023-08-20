import { createContext, useState } from "react";

export const UserContext = createContext({});

export default function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const provider = { userInfo, setUserInfo };
  return (
    <UserContext.Provider value={provider}>{children}</UserContext.Provider>
  );
}
