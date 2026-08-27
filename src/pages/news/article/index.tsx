import useNewsArticle from "../hooks/use_news_article";

import ArticleContent from "./sub_components/article_content";
import ArticleHeader from "./sub_components/article_header";
import ArticleNotFound from "./sub_components/article_not_found";

export default function NewsArticle() {
  const { article, isNotFound, notFound } = useNewsArticle();

  if (isNotFound || !article) {
    return (
      <ArticleNotFound
        title={notFound.title}
        description={notFound.description}
        actionLabel={notFound.actionLabel}
        actionHref={notFound.actionHref}
      />
    );
  }

  return (
    <>
      <ArticleHeader
        background={{ image: article.image, alt: article.imageAlt }}
        breadcrumb={article.breadcrumb ?? []}
        eyebrow={article.category.label}
        title={article.title}
        description={article.excerpt}
      />
      <ArticleContent
        image={article.image}
        imageAlt={article.imageAlt}
        categoryLabel={article.category.label}
        publishedAt={article.publishedAt}
        formattedDate={article.formattedDate}
        excerpt={article.excerpt}
        actionLabel={article.action?.label ?? ""}
        actionHref={article.action?.href ?? "/news"}
      />
    </>
  );
}
