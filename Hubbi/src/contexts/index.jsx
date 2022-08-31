import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        search,
        setSearch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
