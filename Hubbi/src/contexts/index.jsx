import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [lista, setLista] = useState("");

  return (
    <UserContext.Provider value={{ data, setData, input, setInput }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
