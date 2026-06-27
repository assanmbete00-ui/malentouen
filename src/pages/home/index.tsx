import { Box, Typography } from "@mui/material";
import Hero from "./sub_components/hero";
import ChiefMessage from "./sub_components/chief_message";
import History from "./sub_components/history";
import Culture from "./sub_components/culture";

export default function HomePage() {
  return (
    <Box component="main">
      <Hero />
      <ChiefMessage />
      <History />
      <Culture />
    </Box>
  );
}
