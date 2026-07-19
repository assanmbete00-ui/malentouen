import { Box } from "@mui/material";

import Section from "@components/section";

import useChiefMessage from "./hooks/use_chief_message";

import ChiefContent from "./sub_components/chief_content";
import ChiefPortrait from "./sub_components/chief_portrait";

import styles from "./styles";

export default function ChiefMessage() {
  const chief = useChiefMessage();

  return (
    <Section
      variant="paper"
      id="chief-message"
      contentSx={{ py: 0, display: "flex", alignItems: "center" }}
    >
      <Box sx={styles.container}>
        {chief.options.showPortrait && (
          <ChiefPortrait image={chief.media.portrait} />
        )}

        <ChiefContent
          {...chief.content}
          action={chief.action}
          showQuote={chief.options.showQuote}
          showSignature={chief.options.showSignature}
          showAction={chief.options.showAction}
        />
      </Box>
    </Section>
  );
}
