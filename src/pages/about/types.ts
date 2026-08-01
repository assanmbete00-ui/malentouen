import type { PageBannerProps } from "@components/page_banner/types";

import type { IdentitySectionProps } from "./sub_components/identity/types";
import type { HistorySectionProps } from "./sub_components/history/types";
import type { MissionVisionSectionProps } from "./sub_components/missions_vision/types";
import type { ValuesSectionProps } from "./sub_components/values/types";
import type { GovernanceSectionProps } from "./sub_components/gouvernance/types";
import type { ChiefSectionProps } from "./sub_components/chief/types";
import type { CommitmentsSectionProps } from "./sub_components/commitments/types";
import type { HeritageLandmarksSectionProps } from "./sub_components/heritage_landmarks/types";
import type { ExplorePlatformSectionProps } from "./sub_components/explore_platform/types";

export type AboutPageData = {
  banner: PageBannerProps;

  identity: IdentitySectionProps;
  history: HistorySectionProps;
  missionVision: MissionVisionSectionProps;
  values: ValuesSectionProps;
  governance: GovernanceSectionProps;
  chief: ChiefSectionProps;
  commitments: CommitmentsSectionProps;
  heritageLandmarks: HeritageLandmarksSectionProps;
  explorePlatform: ExplorePlatformSectionProps;
};