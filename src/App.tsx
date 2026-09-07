import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AppContextProvider } from "@contexts/app_context";
import AuthProvider from "@contexts/auth/auth_provider";
import theme from "@constants/theme";
import router from "@navigations/router";

//import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AuthProvider>
        <AppContextProvider>
          <RouterProvider router={router} />
        </AppContextProvider>
      </AuthProvider>

      <ToastContainer position="top-right" autoClose={3000} />
    </ThemeProvider>
  );
}