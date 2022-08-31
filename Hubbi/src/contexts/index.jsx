import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(10);
  const [loading, setLoading] = useState(false);
  const [requestSelected, setRequestSelected] = useState({});

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        search,
        setSearch,
        setPage,
        page,
        requestSelected,
        setRequestSelected,
        totalItems,
        setTotalItems,
        setLoading,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
