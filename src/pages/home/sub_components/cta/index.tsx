import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import Button from "@components/button";
import Section from "@components/section";

import useCTA from "./hooks/use_cta";

import CTAContent from "./sub_components/cta_content";

import styles from "./styles";

export default function CTA() {
  const cta = useCTA();

  return (
    <Section
      id="cta"
      variant="primary"
      containerSize="wide"
      sx={styles.root}
    >
      <CTAContent {...cta.content} />

      <Box sx={styles.actions}>
        {cta.options.showPrimaryAction && (
          <RouterLink
            to={cta.primaryAction.href}
            style={{ textDecoration: "none" }}
          >
            <Button>
              {cta.primaryAction.label}
            </Button>
          </RouterLink>
        )}

        {cta.options.showSecondaryAction && (
          <RouterLink
            to={cta.secondaryAction.href}
            style={{ textDecoration: "none" }}
          >
            <Button appVariant="outline">
              {cta.secondaryAction.label}
            </Button>
          </RouterLink>
        )}
      </Box>
    </Section>
  );
}