import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import Button from "@components/button";
import TextLink from "@components/text_link";

import styles from "./styles";
import type { HeroActionsProps } from "./types";

export default function HeroActions({
  primaryAction,
  secondaryAction,
}: HeroActionsProps) {
  return (
    <Box sx={styles.container}>
      <RouterLink
        to={primaryAction.href}
        style={{ textDecoration: "none" }}
      >
        <Button>
          {primaryAction.label}
        </Button>
      </RouterLink>

      {secondaryAction && (
        <TextLink to={secondaryAction.href}>
          {secondaryAction.label}
        </TextLink>
      )}
    </Box>
  );
}