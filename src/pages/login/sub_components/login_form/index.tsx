import { useId } from "react";
import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

import Button from "@components/button";
import TextField from "@components/text_field";

import styles from "./styles";
import type { LoginFormProps } from "./types";

export default function LoginForm({
  eyebrow,
  title,
  description,
  forgotPasswordLabel,
  emailLabel,
  passwordLabel,
  submitLabel,
  showPasswordLabel,
  hidePasswordLabel,
  values,
  errors,
  isSubmitting,
  onChange,
  onSubmit,
  onTogglePassword,
  passwordVisible,
}: LoginFormProps) {
  const passwordId = useId();

  return (
    <Box sx={styles.container}>
      <Typography component="span" sx={styles.eyebrow}>
        {eyebrow}
      </Typography>
      <Typography component="h2" sx={styles.title}>
        {title}
      </Typography>
      <Typography sx={styles.description}>{description}</Typography>

      <Box component="form" noValidate onSubmit={onSubmit} sx={styles.form}>
        <TextField
          label={emailLabel}
          name="email"
          type="email"
          autoComplete="username"
          value={values.email}
          onChange={(event) => onChange("email", event.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email}
          required
        />

        <TextField
          id={passwordId}
          label={passwordLabel}
          name="password"
          type={passwordVisible ? "text" : "password"}
          autoComplete="current-password"
          value={values.password}
          onChange={(event) => onChange("password", event.target.value)}
          error={Boolean(errors.password)}
          helperText={errors.password}
          required
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="button"
                    aria-label={
                      passwordVisible ? hidePasswordLabel : showPasswordLabel
                    }
                    aria-controls={passwordId}
                    onClick={onTogglePassword}
                    edge="end"
                  >
                    {passwordVisible ? (
                      <VisibilityOffRoundedIcon />
                    ) : (
                      <VisibilityRoundedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <Box sx={styles.forgotPassword}>
          <Link
            component={RouterLink}
            to="/admin/forgot-password"
            sx={styles.forgotPasswordLink}
          >
            {forgotPasswordLabel}
          </Link>
        </Box>

        <Button type="submit" disabled={isSubmitting} sx={styles.submit}>
          {submitLabel}
        </Button>
      </Box>
    </Box>
  );
}
