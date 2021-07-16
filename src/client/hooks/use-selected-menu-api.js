import { useContext } from "react";
import { SelectedMenuContext } from "../selectedItemsProvider";

export function useSelectedMenuApi() {
  const context = useContext(SelectedMenuContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
