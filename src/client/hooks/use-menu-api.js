import { useContext } from "react";
import { MenuContext } from "../menuProvider";

export function useMenuApi() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
