import { Box } from "@mui/material";

import Section from "@components/section";
import TextLink from "@components/text_link";

import usePartners from "./hooks/use_partners";

import PartnersContent from "./sub_components/partners_content";
import PartnersLogos from "./sub_components/partners_logos";

import styles from "./styles";

export default function Partners() {
  const partners = usePartners();

  return (
    <Section
      id="partners"
      variant="paper"
      containerSize="wide"
    >
      <Box sx={styles.container}>
        <PartnersContent {...partners.content} />

        {partners.options.showItems && (
          <PartnersLogos items={partners.items} />
        )}

        {partners.options.showAction && (
          <Box sx={styles.action}>
            <TextLink
              to={partners.action.href}
              sx={styles.actionLink}
            >
              {partners.action.label}
            </TextLink>
          </Box>
        )}
      </Box>
    </Section>
  );
}