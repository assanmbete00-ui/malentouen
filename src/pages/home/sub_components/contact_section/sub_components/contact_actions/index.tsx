import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import Button from "@components/button";

import styles from "./styles";
import type { ContactActionsProps } from "./types";

export default function ContactActions({ action }: ContactActionsProps) {
  return (
    <Box sx={styles.container}>
      <RouterLink to={action.href} style={{ textDecoration: "none" }}>
        <Button>{action.label}</Button>
      </RouterLink>
    </Box>
  );
}