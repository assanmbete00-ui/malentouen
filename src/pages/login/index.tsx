import { Box } from "@mui/material";

import LoginBranding from "./sub_components/login_branding";
import LoginForm from "./sub_components/login_form";
import LoginFooter from "./sub_components/login_footer";
import useLogin from "./hooks/use_login";

import styles from "./styles";

export default function LoginPage() {
  const { branding, form, footer } = useLogin();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.layout}>
        <Box sx={styles.branding}>
          <LoginBranding {...branding} />
        </Box>

        <Box sx={styles.form}>
          <LoginForm {...form} />
        </Box>
      </Box>
      <LoginFooter {...footer} />
    </Box>
  );
}
