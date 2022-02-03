import React, { useState, FC } from "react";
import { ExitButtonContext } from "./ExitButtonContext";

export const ExitButtonProvider: FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <ExitButtonContext.Provider value={{ isVisible, toggleIsVisible }}>
      {children}
    </ExitButtonContext.Provider>
  );
};
