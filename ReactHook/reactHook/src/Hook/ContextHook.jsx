import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const userDetails = {
    name: "avay",
    age: 24,
  };

  return (
    <AppContext.Provider value={userDetails}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
