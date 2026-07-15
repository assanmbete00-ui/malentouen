import { Box } from "@mui/material";

import Section from "@components/section";

import useCulture from "./hooks/use_culture";

import CultureContent from "./sub_components/culture_content";
import CultureHighlight from "./sub_components/culture_highlight";
import CultureGrid from "./sub_components/culture_grid";

import styles from "./styles";

export default function Culture() {
  const culture = useCulture();

  return (
    <Section id="culture" variant="paper" containerSize="wide">
      <Box sx={styles.container}>
        <CultureContent {...culture.content} />

        {culture.options.showHighlight && (
          <CultureHighlight
            image={culture.highlight.image}
            title={culture.highlight.title}
            description={culture.highlight.description}
            action={culture.action}
            showAction={culture.options.showAction}
          />
        )}

        {culture.options.showItems && (
          <CultureGrid items={culture.items} />
        )}
      </Box>
    </Section>
  );
}