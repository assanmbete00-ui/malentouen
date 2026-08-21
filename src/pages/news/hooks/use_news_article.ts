import { useParams } from "react-router-dom";

import useTranslate from "@hooks/use_translate";

import { getNewsArticleBySlug } from "../data/news_articles";
import type { NewsArticleItem } from "../types";

export type UseNewsArticleResult = {
  article: NewsArticleItem | undefined;
  isNotFound: boolean;
};

export default function useNewsArticle(): UseNewsArticleResult {
  const { slug } = useParams<{ slug: string }>();
  const { translate } = useTranslate();
  const source = slug ? getNewsArticleBySlug(slug) : undefined;

  if (!source) {
    return { article: undefined, isNotFound: true };
  }

  const formattedDate = new Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(source.publishedAt));

  return {
    isNotFound: false,
    article: {
      id: source.id,
      slug: source.slug,
      image: source.image,
      imageAlt: translate(source.imageAltKey),
      category: {
        id: source.category.id,
        slug: source.category.slug,
        label: translate(source.category.labelKey),
      },
      publishedAt: source.publishedAt,
      formattedDate,
      title: translate(source.titleKey),
      excerpt: translate(source.excerptKey),
      href: source.href,
    },
  };
}
