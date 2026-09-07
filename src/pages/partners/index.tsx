import PageBanner from "@components/page_banner";

import usePartners from "./hooks/use_partners";

import PartnersOverview from "./sub_components/partners_overview";
import PartnersDirectory from "./sub_components/partners_directory";
import PartnershipPrinciples from "./sub_components/partnership_principles";
import PartnershipCTA from "./sub_components/partnership_cta";

export default function Partners() {
  const { banner, overview, directory, principles, cta } = usePartners();

  return (
    <>
      <PageBanner {...banner} />
      <PartnersOverview {...overview} />
      <PartnersDirectory {...directory} />
      <PartnershipPrinciples {...principles} />
      <PartnershipCTA {...cta} />
    </>
  );
}
