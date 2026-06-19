import { Box, IconButton } from "@mui/material";

import FooterSection from "../footer_section";

import { SOCIALS } from "@constants/socials";

import styles from "./styles";

export default function FooterSocials() {
  return (
    <FooterSection title="Suivez-nous">
      <Box sx={styles.container}>
        {SOCIALS.filter((social) => social.visible).map((social) => {
          const Icon = social.icon;

          return (
            <IconButton
              key={social.id}
              component="a"
              href={social.url || "#"}
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