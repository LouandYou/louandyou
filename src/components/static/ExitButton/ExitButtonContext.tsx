import { createContext } from "react";

interface IToggleButtonContext {
  isVisible: boolean;
  toggleIsVisible?: () => void;
}
const defaultState = {
  isVisible: true,
};

export const ExitButtonContext =
  createContext<IToggleButtonContext>(defaultState);
