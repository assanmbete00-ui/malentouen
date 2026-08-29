import type { ReactNode } from "react";
import type { PageBannerProps } from "@components/page_banner/types";

export type ProjectItem = {
  id: string;
  image: string;
  imageAlt: string;
  title: ReactNode;
  description: ReactNode;
};

export type ProjectsSectionData = {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export type ProjectsOverviewData = ProjectsSectionData & {
  image: string;
  imageAlt: string;
};

export type ProjectsPrinciple = {
  id: string;
  title: ReactNode;
  description: ReactNode;
};

export type ProjectsCommitmentData = ProjectsSectionData & {
  principles: ProjectsPrinciple[];
};

export type ProjectsPortfolioData = ProjectsSectionData & {
  items: ProjectItem[];
};

export type ProjectsPageData = {
  banner: PageBannerProps;
  overview: ProjectsOverviewData;
  portfolio: ProjectsPortfolioData;
  commitment: ProjectsCommitmentData;
};
