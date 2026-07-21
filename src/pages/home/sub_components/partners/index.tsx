import { Box } from "@mui/material";

import Section from "@components/section";

import usePartners from "./hooks/use_partners";

import PartnersContent from "./sub_components/partners_content";
import PartnersList from "./sub_components/partners_list";

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
        <PartnersContent
          {...partners.content}
          action={
            partners.options.showAction
              ? partners.action
              : undefined
          }
        />

        {partners.options.showItems && (
          <PartnersList items={partners.items} />
        )}
      </Box>
    </Section>
  );
}