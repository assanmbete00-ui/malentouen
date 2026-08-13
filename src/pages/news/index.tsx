import PageBanner from "@components/page_banner";
import useNews from "./hooks/use_news";
import CommunityCulture from "./sub_components/community_culture";
import FeaturedNews from "./sub_components/featured_news";
import LatestNews from "./sub_components/latest_news";
import OfficialUpdates from "./sub_components/official_updates";
import ProjectsDevelopment from "./sub_components/projects_development";
import NewsArchive from "./sub_components/news_archives";

export default function News() {
  const {
    banner,
    featured,
    latest,
    officialUpdates,
    communityCulture,
    projectsDevelopment,
    archive,
  } = useNews();

  return (
    <>
      <PageBanner {...banner} />
      <FeaturedNews {...featured} />
      <LatestNews {...latest} />
      <OfficialUpdates {...officialUpdates} />
      <CommunityCulture {...communityCulture} />
      <ProjectsDevelopment {...projectsDevelopment} />
      <NewsArchive {...archive} />
    </>
  );
}