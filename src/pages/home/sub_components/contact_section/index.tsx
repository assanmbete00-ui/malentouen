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
    <Section id="contact" variant="secondary" containerSize="wide">
      <Box sx={styles.container}>
        <ContactContent {...contact.content} />

        {contact.options.showInformation && (
          <Box sx={styles.information}>
            <ContactInformation items={contact.items} />
          </Box>
        )}

        <ContactMap />

        {contact.options.showAction && (
          <Box sx={styles.action}>
            <ContactActions action={contact.action} />
          </Box>
        )}
      </Box>
    </Section>
  );
}