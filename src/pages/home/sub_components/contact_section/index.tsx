import { Box } from "@mui/material";
import Section from "@components/section";
import useContact from "./hooks/use_contact";

import ContactActions from "./sub_components/contact_actions";
import ContactContent from "./sub_components/contact_content";
import ContactInformation from "./sub_components/contact_information";
import ContactMap from "./sub_components/contact_map";

import styles from "./styles";

export default function Contact() {
  const contact = useContact();

  return (
    <Section
      id="contact"
      variant="default"
      containerSize="wide"
    >
      <Box sx={styles.container}>
        <ContactContent {...contact.content} />

        <Box sx={styles.layout}>
          <Box sx={styles.details}>
            {contact.options.showInformation && (
              <ContactInformation items={contact.items} />
            )}

            {contact.options.showAction && (
              <ContactActions action={contact.action} />
            )}
          </Box>

          <ContactMap {...contact.map} />
        </Box>
      </Box>
    </Section>
  );
}