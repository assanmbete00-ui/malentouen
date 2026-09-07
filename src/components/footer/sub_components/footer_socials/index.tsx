import { Box, IconButton } from "@mui/material";
import FooterSection from "../footer_section";
import styles from "./styles";
import type { FooterSocialsProps } from "./types";

export default function FooterSocials({ title, items }: FooterSocialsProps) {
  const activeItems = items.filter((social) => social.enabled && social.url);

  if (!activeItems.length) return null;

  return (
    <FooterSection title={title}>
      <Box sx={styles.container}>
        {activeItems.map((social) => {
          const Icon = social.icon;

          return (
            <IconButton
              key={social.id}
              component="a"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              sx={styles.button}
            >
              <Icon fontSize="small" />
            </IconButton>
          );
        })}
      </Box>
    </FooterSection>
  );
}
