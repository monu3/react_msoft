// app/features/test/useTestSliceInit.ts
import { useEffect } from "react";
import formReducer from "./formSlice";
import { injectReducer } from "../../store/store"; // <-- adjust path if needed

/**
 * This hook injects the test reducer into the store
 * exactly once (on mount).
 */
export function useFormSliceInit() {
  useEffect(() => {
    injectReducer("form", formReducer);
  }, []);
}
