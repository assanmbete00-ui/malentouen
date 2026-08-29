import PageBanner from "@components/page_banner";

import useProjects from "./hooks/use_projects";
import ProjectsCommitment from "./sub_components/projects_commitment";
import ProjectsOverview from "./sub_components/projects_overview";
import ProjectsPortfolio from "./sub_components/projects_portfolio";

export default function ProjectsPage() {
  const { banner, overview, portfolio, commitment } = useProjects();

  return (
    <>
      <PageBanner {...banner} />
      <ProjectsOverview {...overview} />
      <ProjectsPortfolio {...portfolio} />
      <ProjectsCommitment {...commitment} />
    </>
  );
}
