import { useContext } from "react";
import AuthContext from "@contexts/auth/auth_context";
import type { AuthContextValue } from "@app-types/auth";

export default function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
