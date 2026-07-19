import { Box } from "@mui/material";

import Section from "@components/section";

import useNews from "./hooks/use_news";

import NewsContent from "./sub_components/news_content";
import NewsList from "./sub_components/news_list";

import styles from "./styles";

export default function News() {
  const news = useNews();

  return (
    <Section id="news" variant="paper" containerSize="wide">
      <Box sx={styles.container}>
        <NewsContent
          {...news.content}
          action={news.options.showAction ? news.action : undefined}
        />

        {news.options.showItems && <NewsList items={news.items} />}
      </Box>
    </Section>
  );
}
