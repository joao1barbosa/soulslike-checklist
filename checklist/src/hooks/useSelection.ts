import { useContext } from "react";
import { SelectionContext } from "../contexts/SelectionContext";

export function useSelection() {
    return useContext(SelectionContext);
  }