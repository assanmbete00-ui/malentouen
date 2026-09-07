import { useState, type ReactNode } from "react";

import type { AdminUser, LoginCredentials } from "@app-types/auth";

import AuthContext from "./auth_context";

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (_credentials: LoginCredentials): Promise<void> => {
    setIsLoading(true);
    try {
      // await authService.login(_credentials);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = (): void => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: user !== null,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}