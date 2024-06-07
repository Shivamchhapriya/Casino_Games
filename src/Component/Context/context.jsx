/* eslint-disable */
import React, { createContext, useState } from "react";

export const authContext = createContext();

export default function GameContext({ children }) {
  const [roulette, setRoulette] = useState([3]);
  return (
    <authContext.Provider
      value={{
        roulette, setRoulette
      }}
    >
      {children}
    </authContext.Provider>
  );
}
