import { useParams } from "react-router-dom";

import useTranslate from "@hooks/use_translate";

import { getNewsArticleBySlug } from "../data";
import type { NewsArticleItem } from "../types";

export type UseNewsArticleResult = {
  article: NewsArticleItem | undefined;
  isNotFound: boolean;
  notFound: {
    title: string;
    description: string;
    actionLabel: string;
    actionHref: string;
  };
};

export default function useNewsArticle(): UseNewsArticleResult {
  const { slug } = useParams<{ slug: string }>();
  const { translate } = useTranslate();
  const source = slug ? getNewsArticleBySlug(slug) : undefined;
  const notFound = {
    title: translate("NEWS_ARTICLE_NOT_FOUND_TITLE"),
    description: translate("NEWS_ARTICLE_NOT_FOUND_DESCRIPTION"),
    actionLabel: translate("NEWS_ARTICLE_NOT_FOUND_BACK"),
    actionHref: "/news",
  };

  if (!source) {
    return { article: undefined, isNotFound: true, notFound };
  }

  const formattedDate = new Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(source.publishedAt));

  const title = translate(source.titleKey);
  const excerpt = translate(source.excerptKey);
  const categoryLabel = translate(source.category.labelKey);
  const backLabel = translate("NEWS_ARTICLE_NOT_FOUND_BACK");

  return {
    isNotFound: false,
    notFound,
    article: {
      id: source.id,
      slug: source.slug,
      image: source.image,
      imageAlt: translate(source.imageAltKey),
      category: {
        id: source.category.id,
        slug: source.category.slug,
        label: categoryLabel,
      },
      publishedAt: source.publishedAt,
      formattedDate,
      title,
      excerpt,
      href: source.href,
      breadcrumb: [
        { label: translate("NAVIGATION_HOME"), href: "/" },
        { label: translate("NAVIGATION_NEWS"), href: "/news" },
        { label: title },
      ],
      action: {
        label: backLabel,
        href: "/news",
      },
    },
  };
}
