import React, { createContext, useContext } from 'react';
import content from '../data/ldms.json'; // Import your JSON file

const LdContext = createContext();

export const LdProvider = ({ children }) => {
  return (
    <LdContext.Provider value={{ content }}>
      {children}
    </LdContext.Provider>
  );
};

export const useLd = () => useContext(LdContext);

