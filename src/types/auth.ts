export type AdminUser = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: string;
};

export type AuthSession = {
  user: AdminUser;
  accessToken?: string;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type AuthContextValue = {
  user: AdminUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
};
