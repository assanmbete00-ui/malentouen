import { Box } from "@mui/material";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { useNavigate } from "react-router-dom";

import Button from "@components/button";
import { HEADER_CONFIG } from "../../../../config/header_config";

import styles from "./styles";
import type { DrawerAdminProps } from "./types";

export default function DrawerAdmin({ onClick }: DrawerAdminProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick?.();
    navigate(HEADER_CONFIG.ADMIN_PATH);
  };

  return (
    <Box sx={styles.container}>
      <Button startIcon={<LoginRoundedIcon />} sx={styles.button} onClick={handleClick}>
        Administration
      </Button>
    </Box>
  );
}