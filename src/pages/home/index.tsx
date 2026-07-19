import { Box, Typography } from "@mui/material";
import Hero from "./sub_components/hero";
import ChiefMessage from "./sub_components/chief_message";
import History from "./sub_components/history";
import Culture from "./sub_components/culture";
import News from "./sub_components/news";
import Events from "./sub_components/events";
import Gallery from "./sub_components/gallery";
import Projects from "./sub_components/projects";
import Partners from "./sub_components/partners";
import Contact from "./sub_components/contact_section";
//import CTA from "./sub_components/cta";

export default function HomePage() {
  return (
    <Box component="main">
      <Hero />
      <ChiefMessage />
      <History />
      <Culture />
      <News />
      <Events />
      <Gallery />
      <Projects />
      <Partners />
      <Contact />
     {/* <CTA /> */}
    </Box>
  );
}
