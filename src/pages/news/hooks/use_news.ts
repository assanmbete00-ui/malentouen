import useTranslate from "@hooks/use_translate";

import {
  NEWS_ARCHIVE,
  NEWS_BANNER,
  NEWS_COMMUNITY_CULTURE,
  NEWS_FEATURED,
  NEWS_LATEST,
  NEWS_OFFICIAL_UPDATES,
  NEWS_PROJECTS_DEVELOPMENT,
} from "../config";

import type { NewsPageData } from "../types";

export default function useNews(): NewsPageData {
  const { translate } = useTranslate();

  const formatDate = (value: string) =>
    new Intl.DateTimeFormat(undefined, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(value));

  const banner: NewsPageData["banner"] = {
    background: {
      image: NEWS_BANNER.image,
      alt: translate(NEWS_BANNER.imageAltKey),
      position: NEWS_BANNER.imagePosition,
    },
    breadcrumb: NEWS_BANNER.breadcrumb.map((item) => ({
      label: translate(item.labelKey),
      href: "href" in item ? item.href : undefined,
    })),
    eyebrow: translate(NEWS_BANNER.eyebrowKey),
    title: translate(NEWS_BANNER.titleKey),
    description: translate(NEWS_BANNER.descriptionKey),
  };

  const featured: NewsPageData["featured"] = {
    id: NEWS_FEATURED.id,
    eyebrow: translate(NEWS_FEATURED.eyebrowKey),
    title: translate(NEWS_FEATURED.titleKey),
    description: translate(NEWS_FEATURED.descriptionKey),
    actionLabel: translate(NEWS_FEATURED.actionLabelKey), 

    article: {
      id: NEWS_FEATURED.article.id,
      slug: NEWS_FEATURED.article.slug,
      image: NEWS_FEATURED.article.image,
      imageAlt: translate(NEWS_FEATURED.article.imageAltKey),
      category: {
        id: NEWS_FEATURED.article.category.id,
        slug: NEWS_FEATURED.article.category.slug,
        label: translate(NEWS_FEATURED.article.category.labelKey),
      },
      publishedAt: NEWS_FEATURED.article.publishedAt,
      formattedDate: formatDate(NEWS_FEATURED.article.publishedAt),
      featured: NEWS_FEATURED.article.featured,
      title: translate(NEWS_FEATURED.article.titleKey),
      excerpt: translate(NEWS_FEATURED.article.excerptKey),
      href: NEWS_FEATURED.article.href,
    },
  };

  const latest: NewsPageData["latest"] = {
    id: NEWS_LATEST.id,
    eyebrow: translate(NEWS_LATEST.eyebrowKey),
    title: translate(NEWS_LATEST.titleKey),
    description: translate(NEWS_LATEST.descriptionKey),
    actionLabel: translate(NEWS_LATEST.actionLabelKey),
    actionHref: NEWS_LATEST.actionHref,

    items: NEWS_LATEST.items.map((item) => ({
      id: item.id,
      slug: item.slug,
      image: item.image,
      imageAlt: translate(item.imageAltKey),
      category: {
        id: item.category.id,
        slug: item.category.slug,
        label: translate(item.category.labelKey),
      },
      publishedAt: item.publishedAt,
      formattedDate: formatDate(item.publishedAt),
      title: translate(item.titleKey),
      excerpt: translate(item.excerptKey),
      href: item.href,
    })),
  };

  const officialUpdates: NewsPageData["officialUpdates"] = {
    id: NEWS_OFFICIAL_UPDATES.id,
    eyebrow: translate(NEWS_OFFICIAL_UPDATES.eyebrowKey),
    title: translate(NEWS_OFFICIAL_UPDATES.titleKey),
    description: translate(NEWS_OFFICIAL_UPDATES.descriptionKey),
    actionLabel: translate(NEWS_OFFICIAL_UPDATES.actionLabelKey),
    actionHref: NEWS_OFFICIAL_UPDATES.actionHref,

    items: NEWS_OFFICIAL_UPDATES.items.map((item) => ({
      id: item.id,
      slug: item.slug,
      type: item.type,
      publishedAt: item.publishedAt,
      formattedDate: formatDate(item.publishedAt),
      title: translate(item.titleKey),
      excerpt: translate(item.excerptKey),
      href: item.href,
    })),
  };

  const communityCulture: NewsPageData["communityCulture"] = {
    id: NEWS_COMMUNITY_CULTURE.id,
    eyebrow: translate(NEWS_COMMUNITY_CULTURE.eyebrowKey),
    title: translate(NEWS_COMMUNITY_CULTURE.titleKey),
    description: translate(NEWS_COMMUNITY_CULTURE.descriptionKey),
    actionLabel: translate(NEWS_COMMUNITY_CULTURE.actionLabelKey),
    actionHref: NEWS_COMMUNITY_CULTURE.actionHref,

    items: NEWS_COMMUNITY_CULTURE.items.map((item) => ({
      id: item.id,
      slug: item.slug,
      image: item.image,
      imageAlt: translate(item.imageAltKey),
      category: {
        id: item.category.id,
        slug: item.category.slug,
        label: translate(item.category.labelKey),
      },
      publishedAt: item.publishedAt,
      formattedDate: formatDate(item.publishedAt),
      title: translate(item.titleKey),
      excerpt: translate(item.excerptKey),
      href: item.href,
    })),
  };

  const projectsDevelopment: NewsPageData["projectsDevelopment"] = {
    id: NEWS_PROJECTS_DEVELOPMENT.id,
    eyebrow: translate(NEWS_PROJECTS_DEVELOPMENT.eyebrowKey),
    title: translate(NEWS_PROJECTS_DEVELOPMENT.titleKey),
    description: translate(NEWS_PROJECTS_DEVELOPMENT.descriptionKey),
    actionLabel: translate(NEWS_PROJECTS_DEVELOPMENT.actionLabelKey),
    actionHref: NEWS_PROJECTS_DEVELOPMENT.actionHref,

    items: NEWS_PROJECTS_DEVELOPMENT.items.map((item) => ({
      id: item.id,
      slug: item.slug,
      image: item.image,
      imageAlt: translate(item.imageAltKey),
      category: {
        id: item.category.id,
        slug: item.category.slug,
        label: translate(item.category.labelKey),
      },
      publishedAt: item.publishedAt,
      formattedDate: formatDate(item.publishedAt),
      title: translate(item.titleKey),
      excerpt: translate(item.excerptKey),
      href: item.href,
    })),
  };

  const archive: NewsPageData["archive"] = {
    id: NEWS_ARCHIVE.id,
    eyebrow: translate(NEWS_ARCHIVE.eyebrowKey),
    title: translate(NEWS_ARCHIVE.titleKey),
    description: translate(NEWS_ARCHIVE.descriptionKey),
    actionLabel: translate(NEWS_ARCHIVE.actionLabelKey),
    actionHref: NEWS_ARCHIVE.actionHref,

    categories: NEWS_ARCHIVE.categories.map((item) => ({
      id: item.id,
      slug: item.slug,
      label: translate(item.labelKey),
    })),

    years: NEWS_ARCHIVE.years.map((item) => ({
      id: item.id,
      value: item.value,
      label: translate(item.labelKey),
    })),
  };

  return {
    banner,
    featured,
    latest,
    officialUpdates,
    communityCulture,
    projectsDevelopment,
    archive,
  };
}