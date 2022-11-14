import { createContext, useState } from "react";

export const authContext = createContext();

export const authContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
};
