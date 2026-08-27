import PageBanner from "@components/page_banner";

import type { ArticleHeaderProps } from "./types";

export default function ArticleHeader({
  background,
  breadcrumb,
  eyebrow,
  title,
  description,
}: ArticleHeaderProps) {
  return (
    <>
      <PageBanner
        background={background}
        breadcrumb={breadcrumb}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
    </>
  );
}
