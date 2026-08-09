import PageBanner from "@components/page_banner";

import useCultures from "./hooks/use_cultures";

import Introduction from
  "./sub_components/introduction";

export default function Cultures() {
  const {
    banner,
    introduction,
  } = useCultures();

  return (
    <>
      <PageBanner {...banner} />

      <Introduction {...introduction} />
    </>
  );
}