import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import Button from "@components/button";
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
        />

        {partners.options.showItems && (
          <PartnersList
            items={partners.items}
          />
        )}

        {partners.options.showAction && (
          <Box sx={styles.action}>
            <RouterLink
              to={partners.action.href}
              style={{ textDecoration: "none" }}
            >
              <Button>
                {partners.action.label}
              </Button>
            </RouterLink>
          </Box>
        )}
      </Box>
    </Section>
  );
}