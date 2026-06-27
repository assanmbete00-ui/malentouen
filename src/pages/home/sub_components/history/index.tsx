import { Box } from "@mui/material";

import Section from "@components/section";

import useHistory from "./hooks/use_history";

import HistoryContent from "./sub_components/history_content";
import HistoryImage from "./sub_components/history_image";
import HistoryTimeline from "./sub_components/history_timeline";

import styles from "./styles";

export default function History() {
  const history = useHistory();

  return (
    <Section variant="paper" id="history">
      <Box sx={styles.container}>
        <HistoryContent
          {...history.content}
          action={history.action}
          showAction={history.options.showAction}
        />

        <Box sx={styles.visualColumn}>
          {history.options.showImage && (
            <HistoryImage image={history.media.image} />
          )}

          {history.options.showTimeline && (
            <HistoryTimeline items={history.timeline} />
          )}
        </Box>
      </Box>
    </Section>
  );
}