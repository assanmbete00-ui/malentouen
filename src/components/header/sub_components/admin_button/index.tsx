import { Box } from "@mui/material";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { useNavigate } from "react-router-dom";

import Button from "@components/button";

import { HEADER_CONFIG } from "../../config/header_config";

import styles from "./styles";
import type { AdminButtonProps } from "./types";

export default function AdminButton({
  compact = true,
  transparent = false,
  label,
}: AdminButtonProps) {
  const navigate = useNavigate();

  return (
    <Box sx={styles.container}>
      <Button
        startIcon={<LoginRoundedIcon />}
        sx={styles.button(compact, transparent)}
        onClick={() => navigate(HEADER_CONFIG.ADMIN_PATH)}
      >
        {label}
      </Button>
    </Box>
  );
}