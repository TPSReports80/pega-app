import React, { useContext, createContext } from "react";

export const DispatchContext = createContext();
export const StateContext = createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export const useDispatchContext = () => {
  return useContext(DispatchContext);
};
