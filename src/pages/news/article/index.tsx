import { Box, Typography } from "@mui/material";

import PageBanner from "@components/page_banner";
import MediaWithSkeleton from "@components/media_with_skeleton";
import Section from "@components/section";
import TextLink from "@components/text_link";

import useTranslate from "@hooks/use_translate";
import useNewsArticle from "../hooks/use_news_article";
import styles from "./styles";
import type { NewsArticlePageProps } from "./types";

function NewsArticleNotFound() {
  const { translate } = useTranslate();

  return (
    <Section id="news-article-not-found" variant="default">
      <Box sx={styles.content}>
        <Typography component="h1" variant="h2">
          {translate("NEWS_ARTICLE_NOT_FOUND_TITLE")}
        </Typography>
        <Typography variant="body1">
          {translate("NEWS_ARTICLE_NOT_FOUND_DESCRIPTION")}
        </Typography>
        <Box sx={styles.footer}>
          <TextLink to="/news">
            {translate("NEWS_ARTICLE_NOT_FOUND_BACK")}
          </TextLink>
        </Box>
      </Box>
    </Section>
  );
}

function NewsArticleDetail({ article }: NewsArticlePageProps) {
  const { translate } = useTranslate();

  return (
    <>
      <PageBanner
        background={{ image: article.image, alt: article.imageAlt }}
        breadcrumb={[
          { label: translate("NAVIGATION_HOME"), href: "/" },
          { label: translate("NAVIGATION_NEWS"), href: "/news" },
          { label: article.title },
        ]}
        eyebrow={article.category.label}
        title={article.title}
        description={article.excerpt}
      />

      <Section id="news-article" variant="default" containerSize="wide">
        <Box sx={styles.content}>
          <MediaWithSkeleton
            src={article.image}
            alt={article.imageAlt}
            objectFit="cover"
            objectPosition="center"
            sx={styles.media}
          />

          <Box sx={styles.meta}>
            <Typography component="span" sx={styles.category}>
              {article.category.label}
            </Typography>
            <Box aria-hidden="true" sx={styles.separator} />
            <Typography component="time" dateTime={article.publishedAt}>
              {article.formattedDate}
            </Typography>
          </Box>

          <Typography component="div" sx={styles.excerpt}>
            {article.excerpt}
          </Typography>

          <Box sx={styles.footer}>
            <TextLink to="/news">
              {translate("NEWS_ARTICLE_NOT_FOUND_BACK")}
            </TextLink>
          </Box>
        </Box>
      </Section>
    </>
  );
}

export default function NewsArticle() {
  const { article, isNotFound } = useNewsArticle();

  if (isNotFound || !article) {
    return <NewsArticleNotFound />;
  }

  return <NewsArticleDetail article={article} />;
}
